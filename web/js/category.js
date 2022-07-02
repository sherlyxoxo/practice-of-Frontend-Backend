window.onload=function(){


// tab栏切换

let btns =document.querySelectorAll('aside ul li a')
let contents=document.querySelectorAll('article')
// for循环绑定点击事件
for(let i=0; i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        // 移除active的元素
        document.querySelector('aside .active').classList.remove('active')
        document.querySelector('article.active').classList.remove('active')
      
        //   给当前点击和对应的内容添加active 
        this.classList.add('active')
        contents[i].classList.add('active')
    })
}



}