
let BirthDate = document.querySelector(".brth");
let Button = document.querySelector(".Calculate");
let results = document.querySelector(".result");

Button.addEventListener("click",()=>{

    BdayInput=BirthDate.value;
    Bday=new Date(BdayInput);

    let  todayDate=new Date();

    let years= todayDate.getFullYear()-Bday.getFullYear()
    let months=todayDate.getMonth()-Bday.getMonth();
    let days=todayDate.getDate()-Bday.getDate();

  if(days<0){
    months--;
    days+=new Date(todayDate.getFullYear(),todayDate.getMonth(),0).getDate();
  }

    if(months<0){
        years--;
        months+=12;
    }

let monthLabel=months===1?"month":"months";
let dayLabel=days===1?"day":"days";
    results.innerHTML=`You are ${years} years ${months} ${monthLabel} ${days} ${dayLabel} old`;

  

})