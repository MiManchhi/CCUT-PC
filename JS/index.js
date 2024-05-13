    // //---------------------------下拉菜单-------------------
    const dropmenu1 = document.querySelector('.dropmenu1')
    const xialamenu1 = document.querySelector('.xialamenu1')
    dropmenu1.addEventListener('mouseenter', function() {
        xialamenu1.classList.add('show');
        setTimeout(() => {
            xialamenu1.style.opacity = 1; // 渐变显示
            xialamenu1.style.visibility = 'visible'; // 设置可见性
        }, 10); // 设置一个小延迟以确保渐变效果生效
    });
    
    dropmenu1.addEventListener('mouseleave', function() {
        xialamenu1.style.opacity = 0; // 渐变隐藏
        xialamenu1.style.visibility = 'hidden'; // 设置不可见
        setTimeout(() => {
            xialamenu1.classList.remove('show');
        }, 500);
    });

    const dropmenu2 = document.querySelector('.dropmenu2')
    const xialamenu2 = document.querySelector('.xialamenu2')
    dropmenu2.addEventListener('mouseenter', function() {
        xialamenu2.classList.add('show');
        setTimeout(() => {
            xialamenu2.style.opacity = 1; // 渐变显示
            xialamenu2.style.visibility = 'visible'; // 设置可见性
        }, 10); // 设置一个小延迟以确保渐变效果生效
    });
    
    dropmenu2.addEventListener('mouseleave', function() {
        xialamenu2.style.opacity = 0; // 渐变隐藏
        xialamenu2.style.visibility = 'hidden'; // 设置不可见
        setTimeout(() => {
            xialamenu2.classList.remove('show');
        }, 500);
    });

    const dropmenu3 = document.querySelector('.dropmenu3')
    const xialamenu3 = document.querySelector('.xialamenu3')
    dropmenu3.addEventListener('mouseenter', function() {
        xialamenu3.classList.add('show');
        setTimeout(() => {
            xialamenu3.style.opacity = 1; // 渐变显示
            xialamenu3.style.visibility = 'visible'; // 设置可见性
        }, 10); // 设置一个小延迟以确保渐变效果生效
    });
    
    dropmenu3.addEventListener('mouseleave', function() {
        xialamenu3.style.opacity = 0; // 渐变隐藏
        xialamenu3.style.visibility = 'hidden'; // 设置不可见
        setTimeout(() => {
            xialamenu3.classList.remove('show');
        }, 500);
    });

    const dropmenu4 = document.querySelector('.dropmenu4')
    const xialamenu4 = document.querySelector('.xialamenu4')
    dropmenu4.addEventListener('mouseenter', function() {
        xialamenu4.classList.add('show');
        setTimeout(() => {
            xialamenu4.style.opacity = 1; // 渐变显示
            xialamenu4.style.visibility = 'visible'; // 设置可见性
        }, 10); // 设置一个小延迟以确保渐变效果生效
    });
    
    dropmenu4.addEventListener('mouseleave', function() {
        xialamenu4.style.opacity = 0; // 渐变隐藏
        xialamenu4.style.visibility = 'hidden'; // 设置不可见
        setTimeout(() => {
            xialamenu4.classList.remove('show');
        }, 500);
    });
//轮播图
const newspic = document.querySelector('.news-list')
const pre = document.querySelector('.newspic_pre')
const next = document.querySelector('.newspic_next')
const circles = document.querySelectorAll('.circles')
let index = 0
let lock = true
function clickNext()
{
    if(!lock) return;
    index++
    newspic.style.left = `-${index*100}%`
    newspic.style.transition = 'all 0.8s ease'
    if(index === 5) 
    {
        index = 0
        setTimeout(() => {
            newspic.style.left = 0
            newspic.style.transition = 'none'
        },800)
    }
    setCircle()
    lock = false
    setTimeout(() => {
        lock = true
    }, 800);
}
next.addEventListener('click',clickNext)
pre.addEventListener('click',function(){
    if(!lock) return;
    index--;
    if(index === -1)
    {
        newspic.style.left = `-${5*100}%`
        newspic.style.transition = 'none'
        index = 4
        setTimeout(() => {
            newspic.style.left = `-${index*100}%`
            newspic.style.transition = 'all 0.8s ease'
        },0)
    }
    else
    {
        newspic.style.left = `-${index*100}%`
    }
    setCircle()
    lock = false
    setTimeout(() => {
        lock = true
    }, 800);
})
function setCircle()
{
    for(let i = 0;i<circles.length;i++)
    {
        if(i === index)
        {
            circles[i].classList.add("actives")
        }
        else
        {
            circles[i].classList.remove("actives")
        }
    }
}
const oCircle = document.querySelector('.circle-list')
oCircle.addEventListener('click',(e) => {
    if(e.target.nodeName.toLowerCase() === "li")
    {
        const n = Number(e.target.getAttribute("data-n"))
        index = n
        newspic.style.left = `-${index*100}%`
    }
    setCircle()
})
//自动轮播
let autoplay = setInterval(clickNext, 5000);
//暂停轮播
const newspicList = document.querySelector('.newspic')
newspicList.addEventListener('mouseenter',() => {
    clearInterval(autoplay)
})
//继续轮播
newspicList.addEventListener('mouseleave',() => {
    clearInterval(autoplay)
    autoplay = setInterval(clickNext, 5000);
})