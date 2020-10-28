(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now going at speed ${speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`the ${this.color} vehicle is moving at speed ${this.speed}`);
    };    

    function Plane(color) {
        this.color = color;       
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now flying at speed ${speed}`);
    };

    const v = new Vehicle('yellow');
    v.go(5);
    v.print();

    const p = new Plane('green');
    p.go(25);
    p.print();

    // function Person(first, last) {
    //     this.first = first;
    //     this.last = last;
    // }

    // Person.prototype.print = function () {
    //     console.log(this.first, this.last);
    // };

    // Person.prototype.talk = function () {
    //     console.log(`${this.first} ${this.last} says blah blah blah`);
    // };

    // const mike = new Person('Mike', 'Pence');
    // console.log(mike);

    // const bernie = new Person('Bernie', 'Sanders');
    // bernie.print();
    // bernie.talk();

    // //const m = {};
    // //Person.call(m, 'Mike', 'Pence');
    // //console.log(m);

    // // const bad = Person('wont', 'work');

    // mike.print();
    // mike.talk();

    // //mike.sleep();
    // //bernie.sleep();

    // Person.prototype.sleep = function () {
    //     console.log(this.first, this.last, 'is sleeping...');
    // };

    // mike.sleep();
    // bernie.sleep();


    // const p = Object.create(personFunctions);
    // p.first = 'Joe';
    // p.last = 'Smith';
    // p.print();
    // p.talk();

    // function Employee(first, last, dept) {
    //     this.first = first;
    //     this.last = last;
    //     this.dept = dept;
    // }

    // //Employee.prototype = Person.prototype;
    // //Employee.prototype = new Person();
    // Employee.prototype = Object.create(Person.prototype);
    // Employee.prototype.print = function () {
    //     console.log(this.first, this.last, this.dept);
    // };

    // const hunter = new Employee('Hunter', 'Biden', 'Oil');
    // hunter.print();
    // hunter.talk();

    // mike.print();

})();