function testCase() {
    clock = new AlarmClock();
    clock.addClock("16:45", () => console.log(`Добавление звонка`), 1);

    clock.addClock("16:46", () => {
        console.log(`Повторное добавление звонка`);
        clock.removeClock(2);
    }, 2);

    clock.addClock("16:47", () => {
        console.log(`Добавление-удаление будильника`);
        clock.stop();
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);

    clock.printAlarms();

    clock.start();
}

testCase();