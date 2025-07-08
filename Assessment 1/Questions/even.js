function printEven() 
{
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let i = 0;
    for (i = 0; i < num.length; i++) 
    {
        if (num[i] % 2 == 0) 
        {
            console.log(num[i], " ");
        }
    }
}

module.exports = printEven;