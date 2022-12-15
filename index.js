

function gate(){
  
    document.getElementById('hey').style.zIndex= "0";
    
    
   
}
function ratingNumber(nomber){
switch(nomber){
    case 1:
        document.getElementById('there').innerHTML = " You 1 selected  out of 5";
        document.getElementById('changing').style.backgroundColor= "hsl(217, 12%, 63%)";
        document.getElementById('changing').style.color= "white";
    break;
    case 2:document.getElementById('there').innerHTML = " You 2 selected  out of 5"
    document.getElementById('changing').style.backgroundColor= "hsl(217, 12%, 63%)";
    document.getElementById('changing').style.color= "white";
    ;
    break;
    case 3:document.getElementById('there').innerHTML = " You 3 selected  out of 5"
    document.getElementById('changing').style.backgroundColor= "hsl(217, 12%, 63%)";
    document.getElementById('changing').style.color= "white";
    ;
    break;
    case 4:document.getElementById('there').innerHTML = " You 4 selected  out of 5"
    document.getElementById('changing').style.backgroundColor= "hsl(217, 12%, 63%)";
    document.getElementById('changing').style.color= "white";
    ;
    break;
    case 5:document.getElementById('there').innerHTML = " You 5 selected  out of 5"
    document.getElementById('changing').style.backgroundColor= "hsl(217, 12%, 63%)";
    document.getElementById('changing').style.color= "white";
    ;
    break;
    default:document.getElementById('there').innerHTML = "you did not choose a rate";
}

 

}
