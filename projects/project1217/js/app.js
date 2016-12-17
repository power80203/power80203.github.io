var correctNum = 24;
var biggestNum = 100;
var smallestNum = 0;


function guessAnswer() {
    var textNum = document.getElementById('textfield').value;
    var textToInt = parseInt(textNum);

    // 小於正確數字
    if (textToInt < correctNum) {
        alert('oops! 正確數字小於 ' + biggestNum + ' 大於 ' + textToInt + ' !');
        // 等於正確數字
    } else if (textToInt == correctNum) {
        alert('yes! 正確數字就是 ' + correctNum + ' !');
        // 大於正確數字
    } else if (textToInt > correctNum) {
        alert('oops! 正確數字小於 ' + textToInt + ' 大於 ' + smallestNum + ' !');
        // 非數字
    } else if (!textToInt) {
        alert('這是什麼？可以吃嗎？Ψ(￣∀￣)Ψ');
    }

}

window.onload = guessIt;
