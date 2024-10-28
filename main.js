let score = 10000;
let choices = ['Bầu', 'Tôm', 'Cua', 'Cá', 'Mèo', 'Nai'];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Add 1000
function addBet(betId, amount) {
    let betInput = document.getElementById(betId);
    let currentBet = parseInt(betInput.value) || 0;
    betInput.value = currentBet + amount;
}

// Clear
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

    let oldScore = score; // Lưu lại điểm cũ trước khi chơi

    let result1 = getRandomChoice();
    let result2 = getRandomChoice();
    let result3 = getRandomChoice();
    document.getElementById('result').innerHTML = `Kết quả: ${result1}, ${result2}, ${result3}.`;

    let winnings = 0;
    let betResults = []; // Chuỗi lưu các kết quả cược

    // Tính toán số điểm thắng
    if (result1 === 'Cá') winnings += caBet;
    if (result2 === 'Cá') winnings += caBet;
    if (result3 === 'Cá') winnings += caBet;

    if (result1 === 'Bầu') winnings += bauBet;
    if (result2 === 'Bầu') winnings += bauBet;
    if (result3 === 'Bầu') winnings += bauBet;

    if (result1 === 'Tôm') winnings += tomBet;
    if (result2 === 'Tôm') winnings += tomBet;
    if (result3 === 'Tôm') winnings += tomBet;

    if (result1 === 'Cua') winnings += cuaBet;
    if (result2 === 'Cua') winnings += cuaBet;
    if (result3 === 'Cua') winnings += cuaBet;

    if (result1 === 'Cá') winnings += caBet;
    if (result2 === 'Cá') winnings += caBet;
    if (result3 === 'Cá') winnings += caBet;

    if (result1 === 'Mèo') winnings += meoBet;
    if (result2 === 'Mèo') winnings += meoBet;
    if (result3 === 'Mèo') winnings += meoBet;

    if (result1 === 'Nai') winnings += naiBet;
    if (result2 === 'Nai') winnings += naiBet;
    if (result3 === 'Nai') winnings += naiBet;

    score = score - totalBet + winnings;
    updateScoreDisplay();

    let gameStatus = score > oldScore ? "<b>Thắng</b>" : "<b>Thua</b>"; // So sánh điểm mới với điểm cũ

    if (winnings > 0) {
        document.getElementById('result').innerHTML += `<br>Chúc mừng! Bạn đã thắng ${winnings} điểm!`;
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

    // Thêm kết quả vào lịch sử
    let historyList = document.getElementById('history-list');
    let newHistoryItem = document.createElement('li');

    if (bauBet > 0) betResults.push(`Bầu: ${bauBet}`);
    if (tomBet > 0) betResults.push(`Tôm: ${tomBet}`);
    if (cuaBet > 0) betResults.push(`Cua: ${cuaBet}`);
    if (caBet > 0) betResults.push(`Cá: ${caBet}`);
    if (meoBet > 0) betResults.push(`Mèo: ${meoBet}`);
    if (naiBet > 0) betResults.push(`Nai: ${naiBet}`);

    let betResultsStr = betResults.join(', ');

    newHistoryItem.innerHTML = `${gameStatus} - Kết quả: ${result1}, ${result2}, ${result3}. Cược: ${betResultsStr}. Điểm: ${score}`;
    historyList.insertBefore(newHistoryItem, historyList.firstChild);

    // Giới hạn số lượt chơi hiển thị tối đa là 5
    while (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

updateScoreDisplay();
