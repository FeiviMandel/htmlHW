(function(){
    'use strict';
    fetch('recipe.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status}${r.statusText}`);
            }
            return r.json();
        });
})();