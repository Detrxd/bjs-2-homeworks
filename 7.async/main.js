function TestCase() {
    let attention = new AlarmClock();
    attention.addClock("16:30", () => console.log('Звонок установлен на'), 1)

    attention.addClock("16:50", () => {
        console.log('Пора вставать'),
            attention.clearAlarms(2)
    }, 2);
}

console.log(TestCase());