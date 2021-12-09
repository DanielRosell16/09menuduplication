function duplicateMenu(){

    // get all of the anchor elements from the top menu <3
    let topMenu = document.querySelectorAll('ul#primaryNavigation li a')
   
    //create the new list items for the bottom of the page
    let newMenu = document.createElement('ul')
   
    //take everything in topMenu and insert it into newMenu
    topMenu.forEach(menuItem =>{
       let newLi = document.createElement('li')
       let newAncher = document.createElement('a')
       newAncher.setAttribute('href', menuItem.getAttribute('href'))
   
   
       // "copy" the textContent from upper menu to new menu
       let lowerMenu = document.querySelector('#smallNavArea')
       newAncher.textContent = menuItem.textContent
   
       // append children to make them appear in the DOM??
       newLi.appendChild(newAncher)
       newMenu.appendChild(newLi)
       lowerMenu.appendChild(newMenu)
    })
   
   }
   
   duplicateMenu()