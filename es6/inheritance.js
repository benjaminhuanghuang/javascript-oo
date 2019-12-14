class Meetup {
    organise() {
        console.log('Organising Meetup');
    }
    static getMeetupFounderDetails() {
        console.log("Meetup Founder Details");
    }
}
class TechMeet extends Meetup {
    constructor() {
        // super() method is constructor function of Parent class.
        super();
        console.log("inside TechMeet constructor");
    }

    organise() {
        //super.organise();
        console.log('Organising TechMeet');
        super.organise();
    }
}
class SportMeet extends Meetup {
}

let js = new TechMeet();
console.log(js instanceof TechMeet);  // true
console.log(js instanceof Meetup);    // true
console.log(js instanceof Object);    // true