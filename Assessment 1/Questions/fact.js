let num=5,fact=1;
function findFact() 
{
    //let num = 5, fact = 1;
    for (let i = 1; i <= num; i++) 
    {
        fact = fact * i;
    }
}

findFact();
console.log("Factorial of ", num, " is ", fact);
//console.log(fact);

module.exports = findFact;