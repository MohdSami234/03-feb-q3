const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease');
const num = document.querySelector('h1');
var num1 =0;
var tog= false;
function show(){
    num.innerText = num1
}
increase.addEventListener('click',()=>{
    tog = true;
    setInterval(()=>{
        num1 = num1+1;
        show()
    },1000)

})

decrease.addEventListener('click',()=>{
    tog = false;
  setInterval(()=>{
       
        num1 = num1-1;
        show()
    },1000);
})