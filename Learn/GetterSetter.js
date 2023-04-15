class Person {
    constructor(name) {
        this.name = name
    }
    get get_name() {
        return this.name
    }
    set set_name(name) {
        this.name = name
    }
    walk() {
        console.log("Đang đi")
    }
}

class Programmer extends Person {
    constructor(name, language) {
        super(name)
        this.language = language
    }

    get get_language() {
        return this.language
    }
    set set_language(language) {
        this.language = language
    }
    writeCode() {
        console.log(this.name + " đang lập trình ngôn ngữ " + this.language)
    }
}

let person = new Programmer("Tùng", "Javascript")
person.writeCode()
person.walk()
console.log(person.get_language)
console.log(person.get_name)