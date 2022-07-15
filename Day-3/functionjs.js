 
 let age = 32;

 let totaladultYears;

 function calculateAdultYears(userAge) // declaring Function
    { 
     let result;
     result = userAge - 18;
     return result;
 }
 
 totaladultYears = calculateAdultYears(age);
 alert(totaladultYears);

 age = 45;
 totaladultYears = calculateAdultYears(age); 
 alert(totaladultYears);

 