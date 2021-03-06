/*
ECMAScript 5 (2009) introduced Getter and Setters.
*/

class Meetup {
    constructor(name) {
        this._name = name;
    }
    get name() {
        // Validation can happen on data
        return this._name;
    }
    set name(val) {
        // Validation can happen on data
        this._name = val;
    }
}
let meetup = new Meetup('JS');
console.log("meetup Name: " + meetup.name); // meetup Name: JS

meetup.name = 'Angular';
console.log("meetup Name: " + meetup.name); // meetup Name: Angular



