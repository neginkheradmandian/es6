const prevValues = []

function squre(n) {
    if (prevValues[n] != null)
    {
        return prevValues[n]
    }
    let result =0
    for (let i=0; i<n; i++){
      for(let j=0; j<n; j++){
      result+=1;
     }
    }
      prevValues[n]=result;
      return result;
}

console.log(squre(3000));
console.log(squre(3000));
console.log(squre(3000));
console.log(squre(3000));
console.log(squre(3000));
console.log(squre(3000));

