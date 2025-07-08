//printing sum of natural numbers
function getSum()
{
    let n = [1,2,3,4,5,6,7,8,9,10,11,12];
    let i,sum=0;
    for(i=1;i<=n.length;i++)
    {
        sum=sum+i;
    }
    console.log(sum);
}

module.exports = getSum;