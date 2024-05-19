// Immediately invoked function expressions (IIFE)

// Sometimes there might be problem to a specific function due to global scope which can cause trouble, That's why IIFE is used.

(function database() {
    // named IIFE
    console.log(`Database connection established`);
})();

( (name) => { 
    // unnamed IIFE
    console.log(`DB Connected two ${name}`);
}) ('Lakhan');

((port) => {
    console.log(`DB established connection to ${port}`);
}) (69)