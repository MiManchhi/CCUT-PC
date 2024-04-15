    //获取标签
    const li1 = document.querySelector('.dropmenu1')
    const li2 = document.querySelector('.dropmenu2')
    const li3 = document.querySelector('.dropmenu3')
    const li4 = document.querySelector('.dropmenu4')
    const menu1 = document.querySelector('.xialamenu1')
    const menu2 = document.querySelector('.xialamenu2')
    const menu3 = document.querySelector('.xialamenu3')
    const menu4 = document.querySelector('.xialamenu4')
    console.log(li1.classList)
    console.log(menu1.classList)
    console.log(li1.style.height)
    //鼠标是否在下拉菜单上
     let isHoveringMenu1 = false
     let isHoveringMenu2 = false
     let isHoveringMenu3 = false
     let isHoveringMenu4 = false
     //鼠标是否在导航栏上
     let isHoveringNav1 = false
     let isHoveringNav2 = false
     let isHoveringNav3 = false
     let isHoveringNav4 = false
    //鼠标经过
    li1.addEventListener('mouseenter',function(){
        isHoveringNav1 = true
        menu1.style.display = 'block'
        menu1.style.opacity = '1'
    })
    li2.addEventListener('mouseenter',function(){
        isHoveringNav2 = true
        menu2.style.display = 'block'
    })
    li3.addEventListener('mouseenter',function(){
        isHoveringNav3 = true
        menu3.style.display = 'block'
    })
    li4.addEventListener('mouseenter',function(){
        isHoveringNav4 = true
        menu4.style.display = 'block'
    })
    menu1.addEventListener('mouseenter',function(){
        menu1.style.display = 'block'
        menu1.style.opacity = '1'
        isHoveringMenu1 = true
    })
    menu2.addEventListener('mouseenter',function(){
        menu2.style.display = 'block'
        isHoveringMenu2 = true
    })
    menu3.addEventListener('mouseenter',function(){
        menu3.style.display = 'block'
        isHoveringMenu3 = true
    })
    menu4.addEventListener('mouseenter',function(){
        menu4.style.display = 'block'
        isHoveringMenu4 = true
    })
    //鼠标离开
    li1.addEventListener('mouseleave',function(){
        isHoveringNav1 = false
        setTimeout(function(){
            if(!isHoveringMenu1)
            {
                menu1.style.opacity = '0'
                menu1.style.display = 'none'
            }
        },300)
    })
    li2.addEventListener('mouseleave',function(){
        isHoveringNav2 = false
        setTimeout(function(){
            if(!isHoveringMenu2)
            {
                menu2.style.display = 'none'
            }
        },300)
    })
    li3.addEventListener('mouseleave',function(){
        isHoveringNav3 = false
        setTimeout(function(){
            if(!isHoveringMenu3)
            {
                menu3.style.display = 'none'
            }
        },300)
    })
    li4.addEventListener('mouseleave',function(){
        isHoveringNav4 = false
        setTimeout(function(){
            if(!isHoveringMenu4)
            {
                menu4.style.display = 'none'
            }
        },300)
    })
    menu1.addEventListener('mouseleave',function(){
        isHoveringMenu1 = false
        if(!isHoveringNav1)
        {
            menu1.style.opacity = '0'
            menu1.style.display = 'none'
        }
    })
    menu2.addEventListener('mouseleave',function(){
        isHoveringMenu2 = false
        menu2.style.display = 'none'
    })
    menu3.addEventListener('mouseleave',function(){
        isHoveringMenu3 = false
        menu3.style.display = 'none'
    })
    menu4.addEventListener('mouseleave',function(){
        isHoveringMenu4 = false
        menu4.style.display = 'none'
    })