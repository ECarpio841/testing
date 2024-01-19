function describe(description, func){
console.log (description);
func();
}

function it(msg, func){
    try{
    func();
    console.log(msg + ': TEST PASSED');
    } catch(e) {
        console.log(msg + ': TEST FAILED');
    }

}


function pow(x,n){
    return Math.pow(x,n)
}

describe("pow", function(){
    it("raises to the nth power", function(){
        assertEqual(pow(2,3),8);
    })
});


function assertEqual (a,b){
    if(a !== b){
        throw new Error ();
    }
}


function add(x,n){
    return x + n ;
}

describe("pow", function(){
    it("raises to the nth power", function(){
        assertEqual(add(2,3), 8);
    });
});

function less(x,n){
    return x - n ;
}

describe("pow", function(){
    it("raises to the nth power", function(){
        assertEqual(less(2,3),8);
    })
});


function divide(x,n){
    return x / n ;
}

describe("pow", function(){
    it("raises to the nth power", function(){
        assertEqual(divide(2,3),8);
    })
});
