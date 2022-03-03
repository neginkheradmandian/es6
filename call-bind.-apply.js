var obj={num:2}

var addToThis= function(a,b,c){
    return this.num+a+b+c;
};
console.log(addToThis.call(obj,3,4,5));

var arr=[1,2,3]
console.log(addToThis.apply(obj, arr));

var bond = addToThis.bind(obj);
console.log(bond(1,2,3));