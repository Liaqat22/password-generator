// const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerSet = "abcdefghijklmnopqrstuvwxyz"
// const numberSet = "1234567890"
// const symbolSet = "~!@#$%^&*()_+/"

// // selectors
// const passbox = document.getElementById("passbox")
// const totalChar = document.getElementById("num")
// const upperInput = document.getElementById("uppercase")
// const lowerInput = document.getElementById("lowercase")
// const numberInput = document.getElementById("digits")
// const symbolInput = document.getElementById("symbols")



// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)]
// }

// const generatePassword = (password = "") => {
//     if (upperInput.checked) {
//         password += getRandomData(upperSet)
//     }
//     if (lowerInput.checked) {
//         password += getRandomData(lowerSet) 
// }
// if (numberInput.checked) {
//     password += getRandomData(numberSet)
// }
// if (symbolInput.checked) {
//     password += getRandomData(symbolSet)
// }console.log(password)

// if(password.length < totalChar.value){
//     return generatePassword(password)
// }

// passbox.innerText = truncateString(password, totalChar.value);

// }




// document.getElementById("btn").addEventListener(
//     "click",
//     function() {
//         generatePassword();
//     }

// )

// function truncateString(str, num) {
//     if (str.length > num) {
//         let subStr = str.substring(0, num);
//         return subStr;
//     } else {
//         return str;
//     }
// }

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = '0123456789';
const symbol = '!@#$%^&*()';

const passInput = document.getElementById('passbox');
const passlen = document.getElementById('num');
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numberInput = document.getElementById("digits");
const symbolInput = document.getElementById("symbols");

const getRandomData = (data) =>{
    return data[Math.floor(Math.random()*data.length)]
    
}

const generatePassword = (password = "") =>{
    if(upperInput.checked){
        password += getRandomData(upper)
    }
    if(lowerInput.checked){
        password += getRandomData(lower)
    }
    if(numberInput.checked){
        password += getRandomData(number)
    }
    if(symbolInput.checked){
        password += getRandomData(symbol)
    }
 
    if(password.length < num.value){
        return generatePassword(password);
    }   console.log(password);
    passInput.innerText = truncateString(password, num.value);
}

generatePassword();

document.getElementById('btn').addEventListener(
    'click',
    function(){
        generatePassword()
    }
);

function truncateString(str, num) {
        if (str.length > num) {
            let subStr = str.substring(0, num);
            return subStr;
        } else {
            return str;
        }
    }
   function result(){
    var a = parseInt(document.getElementById('no1').value);
    var b = parseInt(document.getElementById('no2').value);
   document.getElementById('res').innerHTML = a*b;
   
    }