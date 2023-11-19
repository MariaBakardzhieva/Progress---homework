class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
}

class Developer extends Person {
    constructor(name, age, skills) {
        super(name, age);
        this.skills = skills;
    }

    toString() {
        return `${super.toString()}\nI know ${this.skills.join(", ")}`;
    }
}

class DeveloperManager {
    constructor() {
        this.developers = [];
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    manageDevelopers() {
        console.log("Managing developers:");
        for (const developer of this.developers) {
            console.log(developer.toString());
        }
    }
}

// Example usage
const maria = new Developer("Maria Popova", 23, ["Python", "Machine Learning"]);
const petar = new Developer("Petar Petrov", 19, [
    "JavaScript",
    "Angular",
    "React",
    "Vue",
]);

const manager = new DeveloperManager();
manager.addDeveloper(maria);
manager.addDeveloper(petar);

manager.manageDevelopers();