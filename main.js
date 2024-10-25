let score = 10000;
let choices = ['Bầu', 'Tôm', 'Cua', 'Cá', 'Mèo', 'Nai'];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

//Add 1000
function addBet(betId, amount) {
    let betInput = document.getElementById(betId);
    let currentBet = parseInt(betInput.value) || 0;
    betInput.value = currentBet + amount;
}
//Clear
function clearBet(betId) {
    document.getElementById(betId).value = '';
}

function updateScoreDisplay() {
    document.getElementById('score').innerHTML = `Điểm hiện tại: ${score}`;
}

function playGame() {
    let bauBet = parseInt(document.getElementById('bauBet').value) || 0;
    let tomBet = parseInt(document.getElementById('tomBet').value) || 0;
    let cuaBet = parseInt(document.getElementById('cuaBet').value) || 0;
    let caBet = parseInt(document.getElementById('caBet').value) || 0;
    let meoBet = parseInt(document.getElementById('meoBet').value) || 0;
    let naiBet = parseInt(document.getElementById('naiBet').value) || 0;

    let totalBet = bauBet + tomBet + cuaBet + caBet + meoBet + naiBet;

    if (totalBet > score) {
        document.getElementById("result").innerHTML = "Bạn không có đủ điểm để cược số tiền này.";
        return;
    }

    let result1 = getRandomChoice();
    let result2 = getRandomChoice();
    let result3 = getRandomChoice();

    document.getElementById('result').innerHTML = `Kết quả: ${result1}, ${result2}, ${result3}.`;

    let winnings = 0;

    if (result1 === 'Bầu') winnings += bauBet * 2;
    if (result2 === 'Bầu') winnings += bauBet * 2;
    if (result3 === 'Bầu') winnings += bauBet * 2;

    if (result1 === 'Tôm') winnings += tomBet * 2;
    if (result2 === 'Tôm') winnings += tomBet * 2;
    if (result3 === 'Tôm') winnings += tomBet * 2;

    if (result1 === 'Cua') winnings += cuaBet * 2;
    if (result2 === 'Cua') winnings += cuaBet * 2;
    if (result3 === 'Cua') winnings += cuaBet * 2;

    if (result1 === 'Cá') winnings += caBet * 2;
    if (result2 === 'Cá') winnings += caBet * 2;
    if (result3 === 'Cá') winnings += caBet * 2;

    if (result1 === 'Mèo') winnings += meoBet * 2;
    if (result2 === 'Mèo') winnings += meoBet * 2;
    if (result3 === 'Mèo') winnings += meoBet * 2;

    if (result1 === 'Nai') winnings += naiBet * 2;
    if (result2 === 'Nai') winnings += naiBet * 2;
    if (result3 === 'Nai') winnings += naiBet * 2;

    score = score - totalBet + winnings;
    updateScoreDisplay();

    if (winnings > 0) {
        document.getElementById('result').innerHTML += `<br>Chúc mừng! Bạn đã thắng ${winnings - 1000} điểm!`;
    } else {
        document.getElementById('result').innerHTML += "<br>Rất tiếc! Bạn đã thua!";
    }

    // Xóa giá trị trong tất cả các ô cược sau khi quay
    document.getElementById('bauBet').value = '';
    document.getElementById('tomBet').value = '';
    document.getElementById('cuaBet').value = '';
    document.getElementById('caBet').value = '';
    document.getElementById('meoBet').value = '';
    document.getElementById('naiBet').value = '';
}

updateScoreDisplay();