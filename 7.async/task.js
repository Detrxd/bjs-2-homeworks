class AlarmClock {
    constructor(alarmCollection = []) {
        this.alarmCollection = alarmCollection;
        this.timerId = null;
    }
    addClock(time = "HH.MM", callback, id,) {
        if (id === undefined) {
            throw new Error('error text')
        }

        if (this.alarmCollection.some(elem => {
            return elem.id === id
        }
        )) {
            return;
        }

        this.alarmCollection.push({
            id,
            time,
            callback,
        })
    }

    removeClock(id) {
        let removedArr = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(el => el.id != id)
        return !(removedArr === this.alarmCollection.length);

    }

    getCurrentFormattedTime() {
        let date = new Date();
        let minutes;
        let hours;

        if (date.getHours() < 10) {
            hours = "0" + date.getHours();
        } else {
            hours = date.getHours();
        }

        if (date.getMinutes() < 10) {
            minutes = "0" + date.getMinutes();
        } else {
            minutes = date.getMinutes();
        }

        return hours + ":" + minutes;
    }

    start() {
        let curTime = this;
        function checkClock(alarm) {
            if (alarm.time === curTime.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(el => checkClock(el));
            }, 3000);
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(func => console.log(`Звонок с id = ${func.id} заведен на время ${func.time}.`));
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}



clock = new AlarmClock();

clock.addClock("16:45", f => f, 1)
clock.addClock("16:55", a => a, 3)
clock.addClock("17:55", b => b, 1)
console.log(clock.getCurrentFormattedTime());

// console.log(clock);
// clock.removeClock(1);
// clock.printAlarms();
// console.log(clock.removeClock(3));
// console.log(clock.getCurrentFormattedTime());
// console.log(clock);