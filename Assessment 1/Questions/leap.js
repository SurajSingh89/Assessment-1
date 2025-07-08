function checkLeapYear() 
{
    let year = 2024;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) 
    {
        console.log("Yes year ", year, " is a leap year");
    }
    else 
    {
        console.log("No year ", year, "is not a leap year");
    }
}

module.exports = checkLeapYear;

