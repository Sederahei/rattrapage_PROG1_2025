
function findOdd(array){

    return array.reduice((acc,val) => acc^val, 0);
}
console.log([1,2,2,3,3,3,4,3,3,3,2,2,1]);
module.exports={ findOdd };

