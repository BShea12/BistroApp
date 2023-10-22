//Bistro Hours
//8 am to 11am - Breakfast
//11am to 5pm - Lunch
// 5pm - 8pm - Dinner
// 8pm - 12am - Late Night
function isOpen (){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var open = document.getElementById('openCondition');
    var meal = document.getElementById('meal');

    console.log(dateTime);

    if(hrs<8){
        open.innerHTML = 'closed';
        open.style.color = "#f21e0f";
    }
    else if(hrs<11){
        open.innerHTML = 'open';
        open.style.color = '#2a9e10';
        meal.innerHTML = ' for breakfast';
    }
    else if(hrs<16){
        open.innerHTML = 'open';
        open.style.color = '#2a9e10';
        meal.innerHTML = ' for lunch';
    }
    else if(hrs<19){
        open.innerHTML = 'open' ;
        open.style.color = '#2a9e10';
        meal.innerHTML = ' for dinner';
    }
    else{
        open.innerHTML = 'open';
        open.style.color = '#2a9e10';
        meal.innerHTML = ' for a yummy late night snack';
    }
}
isOpen();