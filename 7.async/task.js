class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }
    addClock(time = "HH.MM", callback, id,) {
        if (id === undefined) {
            throw new Error('error text')
        }

        this.alarmCollection.push({
            id,
            time,
            callback,
        })
    }
    removeClock(id) {
        let aaa = this.alarmCollection.filter(e => e.id === id)
        // if (aaa){
        //     ??
        // }
    }
    getCurrentFormattedTime() {
        return new Date();
    }

    start(){
        function CheckClock() {
            
        }
    }
}

clock = new AlarmClock();

clock.addClock("16:45", f => f, 1)
clock.addClock("16:55", a => a, 3)
clock.addClock("17:55", b => b, 1)

clock.removeClock(3);
clock.getCurrentFormattedTime();