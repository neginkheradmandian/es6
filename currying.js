let deragon= (name , size, element) =>
name + 'is a '+
size + 'that breath'+ 
element;

console.log(deragon('fuly' , 'tiny' , 'lightweight'));

let currderagon = name=>
                        size=>
                            element=> 
                                name+ 'is a'+ size+ 'that breath' + element;

console.log(currderagon('fully')('tiny')('lightweight'));