interface Engine {
  cylinders: number;

  accelerate(fuel: number): void;
}

interface Tank {
  capacity: number;

  getFuel(quantity: number): number;
}

interface Car {
  readonly tank: Tank;
  readonly engine: Engine;

  move(): void;
}

class HondaV4 implements Engine {
  constructor(readonly cylinders: number) {}

  accelerate(fuel: number): void {
    console.log(
      `accelerate honda with ${this.cylinders} cylinders and ${fuel}`
    );
  }
}

class HondaTank implements Tank {
  constructor(public capacity: number) {}

  getFuel(quantity: number): number {
    const availableQuantity = Math.min(quantity, this.capacity);

    this.capacity = this.capacity - availableQuantity;

    return availableQuantity;
  }
}

class Car implements Car {
  constructor(readonly tank: Tank, readonly engine: Engine) {}

  move(): void {
    const fuel = this.tank.getFuel(20);
    this.engine.accelerate(fuel);
  }
}

function main() {
  const engine = new HondaV4(4);
  const tank = new HondaTank(40);

  const honda = new Car(tank, engine);
  honda.move();
  honda.move();
  honda.move();
}

main();
