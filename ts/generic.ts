class Factory<T> {
  products: T[] = [];

  constructor(product: T) {
    this.products.push(product);
  }
}

type Syrup =
  | { syrup: 'choco'; price: 500 }
  | { syrup: 'strawberry'; price: 800 };
type Topping = 'java' | 'cherry';
type Coffee = { menu: string; price: number };

class CoffeeFactory extends Factory<Coffee> {
  order<T>(menu: string, topping: T[]) {
    const coffee = this.products.find(({ menu: coffee }) => coffee === menu);

    return coffee ? { ...coffee, additives: topping } : null;
  }
}

const coffeeFactory = new CoffeeFactory({
  menu: 'americano',
  price: 2000,
});

const myCoffee = coffeeFactory.order<Syrup | Topping>('americano', [
  { syrup: 'choco', price: 500 },
  'java',
  'cherry',
]);

// const myAdditionalPrice = myCoffee?.additives.reduce(
//   (sum, item) => (sum += item.price),
//   0
// ); // OK? Error? Error!

const yourCoffee = coffeeFactory.order<Syrup>('americano', [
  { syrup: 'choco', price: 500 },
  { syrup: 'strawberry', price: 800 },
]);
const yourAdditionalPrice = yourCoffee?.additives.reduce(
  (s, c) => (s += c.price),
  0
); // OK? Error? OK!
