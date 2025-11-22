import os
import re
import json
import argparse
import subprocess
from datetime import datetime

# --- Configuration ---
# Files/Directories to ignore
IGNORE_DIRS = {'.git', '__pycache__', 'node_modules', 'venv', 'env', 'build', 'dist'}
IGNORE_EXTENSIONS = {'.pyc', '.o', '.exe', '.dll', '.so', '.md', '.json'}
# The output report file
REPORT_FILE = "TODO_LIST.md"
# Maximum width for the description column
MAX_DESC_WIDTH = 50

class TodoManager:
    def __init__(self, root_dir="."):
        self.root_dir = root_dir
        # Regex to capture text, ignoring any existing ID format if present
        self.todo_pattern = re.compile(r"(?P<prefix>.*)(\bTODO\b)(?:\[\d+\])?\s*:?\s*(?P<text>.*)")
        self.found_todos = []
        self.current_id = 1

    def scan_files(self):
        """Walks through directory and processes files (Read-Only)."""
        print(f"Scanning {self.root_dir} for TODOs...")

        files_scanned = 0

        for root, dirs, files in os.walk(self.root_dir):
            # Filter out ignored directories
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

            for file in files:
                if any(file.endswith(ext) for ext in IGNORE_EXTENSIONS):
                    continue
                if file == os.path.basename(__file__):
                    continue

                filepath = os.path.join(root, file)
                self._process_file(filepath)
                files_scanned += 1

        self._generate_report()
        print(f"Done! Scanned {files_scanned} files. Found {len(self.found_todos)} items. Report saved to {REPORT_FILE}")

    def _process_file(self, filepath):
        """Reads a file and extracts TODOs with Git info."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
        except UnicodeDecodeError:
            return

        for i, line in enumerate(lines):
            match = self.todo_pattern.search(line)

            if match:
                text = match.group('text').strip()
                line_num = i + 1

                # Fetch git info
                author, date = self._get_git_info(filepath, line_num)

                self.found_todos.append({
                    "id": self.current_id,
                    "text": text,
                    "file": filepath,
                    "line": line_num,
                    "author": author,
                    "date": date
                })
                self.current_id += 1

    def _get_git_info(self, filepath, line_num):
        """Runs git blame on the specific line."""
        try:
            # Run git blame for specific line in porcelain format
            cmd = ['git', 'blame', '-L', f'{line_num},{line_num}', '--porcelain', filepath]
            # Suppress stderr in case it's not a git repo
            result = subprocess.check_output(cmd, stderr=subprocess.DEVNULL).decode('utf-8')

            author_match = re.search(r'^author (.*)$', result, re.MULTILINE)
            time_match = re.search(r'^author-time (\d+)$', result, re.MULTILINE)

            author = author_match.group(1) if author_match else "Unknown"
            date_str = "Unknown"
            if time_match:
                timestamp = int(time_match.group(1))
                date_str = datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d')

            return author, date_str
        except (subprocess.CalledProcessError, FileNotFoundError):
            return "Unknown", "Unknown"

    def _generate_report(self):
        """Creates the Markdown file with all TODOs."""
        with open(REPORT_FILE, 'w', encoding='utf-8') as f:
            f.write(f"# Olifant TODO Tracker\n")
            f.write(f"**Last updated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")

            f.write("| ID | Description | Location | Author | Date |\n")
            f.write("|----|-------------|----------|--------|------|\n")

            for todo in self.found_todos:
                # Truncate description if too long
                desc = todo['text']
                if len(desc) > MAX_DESC_WIDTH:
                    desc = desc[:MAX_DESC_WIDTH-3] + "..."

                rel_path = os.path.relpath(todo['file'], self.root_dir)
                loc = f"[`{rel_path}:{todo['line']}`]({rel_path})"
                f.write(f"| {todo['id']} | {desc} | {loc} | {todo['author']} | {todo['date']} |\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Auto-number TODOs and generate a report.")
    parser.add_argument("--path", default=".", help="Path to scan")
    args = parser.parse_args()

    manager = TodoManager(args.path)
    manager.scan_files()