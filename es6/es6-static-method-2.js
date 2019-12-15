class Meetup {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    start() {
        console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
    }
}

/*
    Static method in ES6
*/
Meetup.getMembers = function () {
    console.log('This is a static method.');
    /* this.location will return undefined ! */
    console.log('Access instance variable in static method: '+ this.location );
}

let jsMeetup = new Meetup('JS', 'Blr');
Meetup.getMembers();         // Adam Returned Members
jsMeetup.getMembers();       // TypeError: jsMeetup.getMembers is not a function
