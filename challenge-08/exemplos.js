function adder(x) {
    function(y){
        return x + y;
    }
    return addOther();
}

var add2 = adder(2, 6);
console.log(add2());



