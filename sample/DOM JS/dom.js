
//                                        JavaScript DOM Crash Course part 1                 //

//console.dir(document)

// console.log(document.domain)
// console.log(document.url)
// console.log(document.title)
// document.title = 1234
// console.log(documentdoctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all) // arrray all DOM
// //console.log(document).all[10]
// //document.all[10].textContent = 'hello'
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)


// // Selecting DOM


// // GetElementbyID //
// // textContent // innerHTML // innerText

// //console.log(document.getElementById('header-title'))

//     const headerTitle = document.getElementById('header-title')

//     console.log(headerTitle)

//     headerTitle.textContent = 'hello' // it will show even with hide class
//     headerTitle.innerText = 'Goodbye' // it will show like on the site (hidden)
//     headerTitle.innerHTML = '<h3>Hello</h3>' // will add h3 inside


//     headerTitle.style.borderBottom = 'solid 3px #000'

//     const header = document.getElementById('main-header')
//     header.style.borderBottom = 'solid 3px #000'

// // GetElementByClassName //

//     const items = document.getElementsByClassName('list-group-item')
//     console.log(items)
//     console.log(items[1]) // Arrays start from 0
//     items[1].textContent = 'Hello 2'
//     items[1].style.fontWeight = 'bold'
//     items[1].style.backgroundColor = 'Yellow'

//     // items.style.backgroundColor = '#f4f4f4f4' // Dosent work on all 

//     for(var i = 0; i < items.lenght; i++){
//         items[i].style.backgroundColor = '#f4f4f4'
//     }

// // GetElementByTagName //

//     const li = document.getElementsByTagName('li')
//     console.log(li)
//     console.log(li[1]) // Arrays start from 0
//     li[1].textContent = 'Hello 2'
//     li[1].style.fontWeight = 'bold'
//     li[1].style.backgroundColor = 'Yellow'

//     // items.style.backgroundColor = '#f4f4f4f4' // Dosent work on all 

//     for(var i = 0; i < li.lenght; i++){
//         li[i].style.backgroundColor = '#f4f4f4'
//     }

// // QuerySelector // !!! // only one First one
//     const header = document.querySelector('#main-header')  // any CSS selector
//     header.style.borderBottom = 'solid 4px #ccc'

//     const input = document.querySelector('input')
//     input.value = 'Hello World'

//     const submit = document.querySelector('input[type="Submit"]')
//     submit.value = "Send"

//     const item = document.querySelector('.list-group-item')
//     item.style.color = 'red'

//     const lastItem = document.querySelector('.list-group-item:last-child')
//     lastItem.style.color = 'blue'

//     const secondItem = document.querySelector('.list-group-item:nth-child(2)')
//     secondItem.style.color = 'coral'



// // QuerySelectorALL // 

//     const titles = document.querySelectorAll('.title')
//     console.log(titles)
//     titles[0].textContent = 'Hello'

//     const odd = document.querySelectorAll('li:nth-child(odd)')
//     const even = document.querySelectorAll('li:nth-child(even)')


//     for(var i = 0; i < odd.length; i++ ){
//         odd[i].style.backgroundColor = '#f4f4f4f4'
//         even[i].style.backgroundColor = '#ccc'

//     }

//     //                                        JavaScript DOM Crash Course part 2                 //


//     //  Traversing The DOM  //

//     const itemList = document.querySelector('#items')
//     // ParentNode 1/2
//     console.log(itemList.parentNode)
//     itemList.parentNode.style.backgroundColor = '#f4f4f4f4'
//     console.log(itemList.parentNode.parentNode) 

//     // ParentElements 2/2 // can be use interchangeable

//     console.log(itemList.parentElement)
//     itemList.parentElement.style.backgroundColor = '#f4f4f4f4'
//     console.log(itemList.parentElement.parentElement) 

//     // ChildNodes //

//     console.log(itemList.childNodes)


//     console.log(itemList.children)
//     console.log(itemList.children[1])
//     itemList.children[1].style.backgroundColor = 'yellow'

//     // FirstChild //

//     console.log(item.firstChild) // useless
     
//     // FirstElementChild

//     console.log(item.firstElementChild)
//     item.firstElementChild.textContent = 'Helllo 1'

//     // lastChild

//     console.log(item.lastElementChild)
//     item.lastElementChild.textContent = 'Helllo 4'

//     // Sibling
//     // nextSibling

//     console.log(itemList.nextSibling)

//     // nestElementSibling

//     console.log(itemList.nextElementSibling)

//     // previousSibling

//     console.log(itemList.previousSibling)

//     // previousElementSibling

//     console.log(itemList.previousElementSibling)
//     itemList.previousElementSibling.style.color = 'green'

// // Create elements and add them

//     // createElement

//         // create Div
//         const newDiv = document.createElement('div')

//         // Add class
//         newDiv.className = 'hello'

//         // Add id
//         newDiv.id = 'hello1'

//         // Add attribute
//         newDiv.setAttribute('title', 'Hello Div')

//         // Create content inside Div 
//         // Create text node
//         const newDivText = document.createTextNode('Hello world')

//         // Add text to div
//         newDiv.appendChild(newDivText)

//         // Add to the DOM
//         const container = document.querySelector('header .container')
//         const h1 = document.querySelector('header h1')

//         newDiv.style.fontSize = '30px'

//         container.insertBefore(newDiv, h1) // Two parameters - one(newDiv) - what we inserting, Two (h1) - what we are inserting before


   //                                        JavaScript DOM Crash Course part 3                 //


    // Events listeners
    // 

        // // OLD way !!!
        //  function buttonClick() {
        //     // console.log('Button clicked')
        //  }

    
        // //
        // const button = document.getElementById('button').addEventListener('click', function(){
        //     console.log(123)
        // })


        // Name Function
        // const button = document.getElementById('button').addEventListener('click', buttonClick)

        // function buttonClick() {
        //     //console.log('1m2m3')

        //     document.getElementById('header-title').textContent = 'Change!'
        //     document.querySelector('#main').style.backgroundColor = '#f7f7f7f3'
        // }


        // Event e!!!

        // const button = document.getElementById('button').addEventListener('click', buttonClick)

        // function buttonClick(e) {
          //  console.log(e)
        //   console.log(e.target)
        //   console.log(e.target.id)
        //   console.log(e.target.className)
        //   console.log(e.target.classList)
        //   const output = document.getElementById('output')
        //   output.innerHTML = '<h3>'+e.target.id+'</h3>'

        //   console.log(e.type)

        // Position of mouse from the window
        // console.log(e.clientX)    
        // console.log(e.clientY)   
        
        // Position of mouse from the element itself
        // console.log(e.offsetX)
        // console.log(e.offsetY)

        // // 'ALT' key press in while Click
        // console.log(e.altKey)
        // //  'CTRL'
        // console.log(e.ctrlKey)
        // // 'SHIFT'
        // console.log(e.shiftKey)
  //      }


    //     const button = document.getElementById('button')
        
    //    // button.addEventListener('click', runEvent)
    //    // DoubleClick
    //    // button.addEventListener('dblclick', runEvent)
    //    // Mouse down?
    //    //button.addEventListener('mousedown', runEvent)
    //    // Click and hold - nothing happend only when you let go click
    //    //button.addEventListener('mouseup', runEvent)
    //    button.addEventListener('dblclick', runEvent)



    //     function runEvent(e){
    //     console.log('EVENT TYPE: '+e.type)
    //     }
 
    // const button = document.getElementById('button')
    // const box = document.getElementById('box')

    // box.addEventListener('mouseenter', runEvent)
    // box.addEventListener('mouseleave', runEvent)

    // box.addEventListener('mouseover', runEvent)
    // box.addEventListener('mouseout', runEvent)

    // // Only mouseover fires for any inner elements
    // // mouse ENTER will be for element itself


    // box.addEventListener('mousemove', runEvent)




    // function runEvent(e) {
    //     console.log('EVENT TYPE: '+e.type)

            //How that knows what is output class??????
    //   //  output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'


    //     // box.style.background = "rgb("+e.offsetX+","+e.offsetY+",40)"
    //     document.body.style.background = "rgb("+e.offsetX+","+e.offsetY+",40)"

    // }
// ################################################################################
// ################################################################################
// ################################################################################

    // const itemInput = document.querySelector('input[type="text"]')
    // const form = document.querySelector('form')

    // const select = document.querySelector('select')

    // itemInput.addEventListener('keydown', runEvent)
    // itemInput.addEventListener('keyup', runEvent)
    // itemInput.addEventListener('keypress', runEvent)



    // itemInput.addEventListener('focus', runEvent)
    // itemInput.addEventListener('blur', runEvent)

    
    // itemInput.addEventListener('cut', runEvent)
    // itemInput.addEventListener('paste', runEvent)

     // itemInput.addEventListener('input', runEvent)


    //  select.addEventListener('change', runEvent)
    //  select.addEventListener('input', runEvent)


    // form.addEventListener('submit', runEvent)
      

    // function runEvent(e) {
    //       //stop from submiting form
    //       e.preventDefault()
    //     console.log('EVENT TYPE: '+e.type)

        // Disappears all body when cut or paste no idea why cut from key dosent work... past dose
     //   document.body.style.display = 'none'

      //  console.log(e.target.value)
       // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'


    // }
























