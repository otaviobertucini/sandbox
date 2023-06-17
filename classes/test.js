class Mother {
  doit() {
    console.log("mother");
  }
}

class Base extends Mother {
  doit() {
    super.doit()
    console.log("oie");
  }
}

class Child extends Base {
  doit() {
    super.doit();
    console.log("tchau");
  }
}

const a = new Child();
a.doit();
