let bgiarr = [{url:'url(../../Assets/Images/bgi_01.jpg)'},
        {url:'url(../../Assets/Images/bgi_02.jpg)'},{url:'url(../../Assets/Images/bgi_03.jpg)'},
        {url:'url(../../Assets/Images/bgi_04.jpg)'}]
        const lunbopic = document.querySelector('.lunbopic')
        let i = 0
        let n = setInterval(() => {
            lunbopic.style.backgroundImage = bgiarr[i].url
            i++
            if(i === bgiarr.length)
            {
                i = 0
            }
            document.querySelector('.current').classList.remove('current')
            document.querySelector(`.lunbopic li:nth-child(${i+1})`).classList.add('current')
        }, 5000);
        lunbopic.addEventListener('mouseenter',function(){
            clearInterval(n)
        })
        lunbopic.addEventListener('mouseleave',function(){
            clearInterval(n)
            n = setInterval(() => {
            lunbopic.style.backgroundImage = bgiarr[i].url
            i++
            if(i === bgiarr.length)
            {
                i = 0
            }
            document.querySelector('.current').classList.remove('current')
            document.querySelector(`.lunbopic li:nth-child(${i+1})`).classList.add('current')
        }, 5000);
        })
        const circle1 = document.querySelector('.circle1')
        const circle2 = document.querySelector('.circle2')
        const circle3 = document.querySelector('.circle3')
        const circle4 = document.querySelector('.circle4')
        circle1.addEventListener('click',function(){
            document.querySelector('.current').classList.remove('current')
            circle1.classList.add('current')
            lunbopic.style.backgroundImage = bgiarr[0].url
        })
        circle2.addEventListener('click',function(){
            document.querySelector('.current').classList.remove('current')
            circle2.classList.add('current')
            lunbopic.style.backgroundImage = bgiarr[1].url
        })
        circle3.addEventListener('click',function(){
            document.querySelector('.current').classList.remove('current')
            circle3.classList.add('current')
            lunbopic.style.backgroundImage = bgiarr[2].url
        })
        circle4.addEventListener('click',function(){
            document.querySelector('.current').classList.remove('current')
            circle4.classList.add('current')
            lunbopic.style.backgroundImage = bgiarr[3].url
        })