(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        }

        print() {
            console.log(`the ${this.color} vehicle is moving at speed ${this.speed}`);
        }

    }
    const v = new Vehicle('yellow');
    v.go(5);
    v.print();

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        print() {
            super.print();
        }

        go (speed) {
            this.speed = speed;
            console.log(`now flying at speed ${speed}`);
        }
    }

    const p = new Plane('green');
    p.go(25);
    p.print();
  
})();