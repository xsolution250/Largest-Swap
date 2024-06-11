let num = document.getElementById('num').value;
let change = num.toString();
function reverseNum() {
    let new_code = change.split("").reverse().join("");
    let answer = parseInt(new_code);
    let answer_field = document.getElementById('ans');
    if (answer > num) {
        answer_field.innerHTML = false;
    }
    else{
        answer_field.innerHTML = true;
    }
    
}
