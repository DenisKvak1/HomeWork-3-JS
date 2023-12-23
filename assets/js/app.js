function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let correctAnswers = 0;
let incorrectAnswers = [];
let correctAnswersList = [];

for (let i = 1; i < 13; i++) {
    let min = getRandomNumber(10, 99);
    let max = getRandomNumber(10, 99);
    let correctAnswer = min * max;
    let userAnswer = prompt(`${min} * ${max} = ?`);

    if (parseInt(userAnswer) === correctAnswer) {
        correctAnswers++;
        correctAnswersList.push(`${min} * ${max} = ${correctAnswer}`);
    } else {
        if(!userAnswer){
            userAnswer=0
        }
        incorrectAnswers.push({
            expression: `${min} * ${max}`,
            correctAnswer: correctAnswer,
            userAnswer: userAnswer
        });
    }
}

let score = (correctAnswers / 12) * 12;

console.log(`\nВаша оценка: ${score}`);
console.log('\nВерные ответы:');
console.log(correctAnswersList.join('\n'));

console.log('\nОшибочные ответы:');
incorrectAnswers.forEach(item => {
    console.log(`${item.expression} - Верный ответ: ${item.correctAnswer}, Ваш ответ: ${item.userAnswer}`);
});
