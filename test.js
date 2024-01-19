
//Array
function addArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
 export function testSumarArray() {
    const array = [1, 2, 3, 4];
    const answer = addArray(array);
    const expected = 10;
  
    if (answer === expected) {
      console.log('Test de sumarArray PASADO');
    } else {
      console.log('Test de sumarArray FALLIDO');
    }
  }

  //Pow 
  function pow(x,n){
    return Math.pow(x,n) ;
}

 export function testPowing(){
    let a = 2;
    let b = 5;
    let powAnswer = pow(a,b)
    let expected = 32;
    if (powAnswer === expected) {
        console.log('Test de elevación PASADO');
      } else {
        console.log('Test de sumarArray FALLIDO');
      }
};

//loop
function loop(n){
    if(n<0){
        return undefined
    }; 
  let x = 0
   for(let i=1 ; i<=N ; i++){
    x += i
   }
   return x
}

export function testLooping(){
    let a = 5
    let addAnswer = loop(a);
    let expected = 15; 
    if (addAnswer === expected) {
        console.log('Test de loop PASADO');
      } else {
        console.log('Test de loop FALLIDO');
      }
};
