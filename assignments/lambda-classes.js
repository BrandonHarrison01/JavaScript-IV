// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo() {
        console.log(`Today we are learning about ${subject}`);
    }
    grade() {
        console.log(`${steve.name} recieves a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment() {
        console.log(`${this.name} has submitted a PR for ${this.favSubjects}`)
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${this.favSubjects}`)
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp() {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    dubugsCode() {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const steve = new Student({
  name: 'Steve',
  location: 'Atown',
  age: 12,
  previousBackground: 'meme chef',
  className: 'web200',
  favSubjects: [`not javascript`, `everything`, `somethings`]
});

const karen = new ProjectManager({
  name: 'Karen',
  location: 'Bikini Bottom',
  age: 56,
  gradClassName: 'web4',
  favInstructor: 'Fred',
});

const subject = "Functions"
const channel = "Web200_channel"

karen.standUp();
steve.listsSubjects();
fred.grade();