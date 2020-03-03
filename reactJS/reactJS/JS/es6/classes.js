class Human{
    constructor(name, age, energy){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    eat(){
        this.energy +=6
    }
    walk(){
        this.energy -=3
    }
}
class Student extends Human{
    constructor(name, age, energy){
        super(name, age, energy);
    }
    study(){
        this.energy = 0;
    }
}