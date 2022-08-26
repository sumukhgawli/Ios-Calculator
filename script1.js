let screen = document.getElementById('cal_screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log('button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } 
        else if(buttonText == '÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
    
}
let time = document.getElementById('js_time');
function updateClock(){
    let hour = new Date().getHours()
    let minute = new Date().getMinutes() 
    if (minute<10) {minute = "0"+ minute}
    if (hour > 12) {
        hour -= 12;
     }
    time.innerText = `${hour} : ${minute}`;
}
setInterval("updateClock()",60);

var ploader = document.getElementById('loader');
console.log(ploader);
var mai_con = document.getElementById('iphone_m');
console.log(mai_con);
  
function disapear() {
    mai_con.style.display = 'none';
    setTimeout(function actual() {
    ploader.style.display = 'none';
    mai_con.style.display = 'block';
    },4000); 

}