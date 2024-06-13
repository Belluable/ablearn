// class  --------
interface Animal {
  move(): void;
  // move: () => void;
}

class Pet implements Animal {
  protected name;
  protected age!: number; // !: undefined가 아니라고 선언
  constructor(name: string) {
    this.name = name;
  }
  setAge(xage: number) {
    this.age = xage;
  }
  getAge() {
    return this.age;
  }
  move(): void {
    console.log('Pet is moving');
  }
  bark() {}
  getName() {
    return this.name;
  }
}

class Dog extends Pet {
  constructor(name: string, age: number) {
    super(name);
    this.setAge(age);
  }
  move() {
    console.log('어슬렁');
  }
  bark() {
    console.log('멍멍!', this.name);
  }
  howling() {
    console.log('우우우우!', this.name);
  }
}
class Cat extends Pet {
  bark() {
    console.log('야옹!', this.name);
  }
  kukuki() {
    console.log('꾹!꾹!');
  }
}

const lucy = new Dog('Lucy', 5);
lucy.move();
lucy.bark();
lucy.howling();

const maxx = new Dog('Maxx', 10);
maxx.howling();
console.log('🚀 ~ maxx:', maxx.getName()); // name이 protected로 선언돼서 maxx.name으로 가져올 수 없음
console.log('🚀 ~ maxx:', maxx.setAge(4));

const happy = new Cat('Happy');
happy.bark();
happy.kukuki();

interface ICat extends Animal {
  kukuki(): void;
}

class CatDog extends Pet implements ICat {
  kukuki() {
    console.log('꾹!꾹!');
  }
  bark() {
    console.log('야옹!');
  }
}
