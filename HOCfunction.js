function song (callback) {
    console.log('la la');
    callback();
}
function meow() {
    console.log('meo meo');
}

console.log(song(meow))

function multiplier(factor) {
    return function(x) {
        return x*factor;
    }
}
let mul = multiplier(2)
console.log(mul(4));