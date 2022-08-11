class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }

    IsSuperCute(){
        return this.age <= 1;
    }
    Iscute(){
        return true;
    }
}


class Dog extends Animal{
   constructor(name,age,speed){
       super(name,age);  //inherit to Animal class
       this.speed=speed;
   }
   run(){
       return `${this.name} is running at ${this.speed}`;
   }
}


const Tommy = new Dog("tom",2,45);
console.log(Tommy.eat());

console.log(Tommy.Iscute());
console.log(Tommy);

console.log(Tommy.run());