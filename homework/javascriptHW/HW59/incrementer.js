// SL - 100
// SL - nice!
(function () {
    'use strict';
    // SL - no for loops???
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    window.app.counter.incrementCounter();
    const cnt1 = window.app.counters.createCounter();
    cnt1.incrementCounter();
    cnt1.incrementCounter();
    cnt1.incrementCounter();
    cnt1.incrementCounter();
    cnt1.incrementCounter();
    const cnt2 = window.app.counters.createCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    cnt2.incrementCounter();
    console.log('current count a =', window.app.counter.getCurrentCount());
    console.log('current count b.cnt1 =', cnt1.getCurrentCount());
    console.log('current count b.cnt2 =', cnt2.getCurrentCount());
    console.log('number of "b" counters created =', window.app.counters.getNumberOfCounters());

})();