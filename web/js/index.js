window.onload=function(){
   
// 1.发起axios请求
axios({
    method:'GET',
    url:'http://127.0.0.1:3001/getAllCourse'
}).then(function(res){

    // 2. 调用 template 函数
    let htmlStr = template('li-tpl', res.data.result.data)
    // 3. 渲染HTML结构
    document.querySelector('#course_list').innerHTML=htmlStr
   
})


// ajax用法：
// $.ajax({
//     type:'GET',
//     url:'http://127.0.0.1:3001/getAllCourse',
//     success:function(res){
//     let data= res.result.data
//     // 2. 调用 template 函数
//     let htmlStr = template('li-tpl', data)
//     // 3. 渲染HTML结构
//     document.querySelector('#course_list').innerHTML=htmlStr
//     }
// })





}