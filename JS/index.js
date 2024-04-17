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

    //------------------------轮播背景图----------------------
    // let arrBgi = [{url:'../Assets/Images/bgi_01.jpg'},
    // {url:'../Assets/Images/bgi_02.jpg'},
    // {url:'../Assets/Images/bgi_03.jpg'},
    // {url:'../Assets/Images/bgi_04.jpg'},
    // {url:'../Assets/Images/bgi_05.jpg'}]
    // let arrBgi2 = [{url:'url(../Assets/Images/bgi_01.jpg)'},
    // {url:'url(../Assets/Images/bgi_02.jpg)'},
    // {url:'url(../Assets/Images/bgi_03.jpg)'},
    // {url:'url(../Assets/Images/bgi_04.jpg)'},
    // {url:'url(../Assets/Images/bgi_05.jpg)'}]
    // const newspic = document.querySelector('.newspic')
    // const img = document.querySelector('.newspic img')
    // let i = 0
    // function switchBackground() {
    //     i++
    //     setTimeout(() => {
    //     if(i+2 >= arrBgi.length-1)
    //     {
    //         i = 0;
    //     }
    //     img.style.opacity = 0;
    //     img.src = arrBgi[i+1].url
    //     console.log(i)
    //     console.log(arrBgi[i+1].url)
    //     newspic.style.backgroundImage = arrBgi2[i+2].url
    //     }, 500);
    //     setTimeout(() => {
    //         i++
    //     }, 5000);
    //     setTimeout(() => {
    //         if(i+2 >= arrBgi.length-1)
    //         {
    //             i = 0;
    //         }
    //         img.style.opacity = 1;
    //         img.src = arrBgi[i+1].url
    //         newspic.style.backgroundImage = arrBgi2[i+2].url
    //         }, 500);
    // }
    // setInterval(switchBackground,5000)
    // //以上代码有bug