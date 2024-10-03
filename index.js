//      <------------------------- calculator program ----------------------------->

let string = "";
let buttons =document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
        document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value = string;
        }
       else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
       }
    } )
})
    








// (function() {

//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click', function(e){
//         if(screen.value === '0'){
//             screen.value = "please enter";
//         }
//         else if(screen.value === '='){
//             screen.value = eval(screen);
//             // document.querySelector('screen').value = screen;
//             console.log(screen);
//         }
//         else{
//             let answer = eval(screen.value);
//             screen.value= answer;
//         }
//     })
//     clear.addEventListener('click', function(e){
//         screen.value = "";
//     })




// })();










