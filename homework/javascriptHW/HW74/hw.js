(function () {
    'use strict';

    class Student {
        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }

    }

    function print(order, ...students) {
        students.forEach(student => {
            if (order) {
                console.log(`name: ${student.firstName} ${student.lastName} - age: ${student.age} - grade: ${student.grade}`);
            }
            else {
                console.log(`name: ${student.lastName}, ${student.firstName} - age: ${student.age} - grade: ${student.grade}`);
            }
        });
    }
    
    function copyStudent(student) {
        // let newStudent;
        let { firstName, lastName, ...rest } = student;
        [firstName, lastName] = [lastName, firstName];
        // newStudent = { firstName, lastName, age, grade };
        return { firstName, lastName, ...rest };
    }

    const s1 = new Student('Chaim', 'Goldberg', 17, '12th');
    const s2 = new Student('Avi', 'Jacobs', 7, '2nd');
    const s3 = new Student('Boruch', 'Cohen', 12, '7th');
    const students = [s1, s2, s3];

    print(true, ...students);
    console.log(copyStudent(s2));
})();