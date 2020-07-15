const daysOfWeek = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];
    return {
        getDayName: function (index) {
            return days[index - 1];
        },

        getDayNumber: function (name) {
            return days.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };
}());
console.log(daysOfWeek.getDayNumber('friday'));
console.log(daysOfWeek.getDayName(5));

const InterestCalculator = (function () {
    'use strict';

    let numberOfYears;
    let interestRate;
    return {
        setRate: function (rate) {
            interestRate = rate;
        },

        setYears: function (years) {
            numberOfYears = years;
        },

        calculateInterest: function (principal) {
            return principal * interestRate * numberOfYears;
        }
    };
}());
InterestCalculator.setYears(5);
InterestCalculator.setRate(0.1);
console.log(InterestCalculator.calculateInterest(25));
