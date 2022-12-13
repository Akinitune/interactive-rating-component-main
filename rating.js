

function gate(){
  
    document.getElementById('hey').style.zIndex= "0";
    document.getElementById('there').innerHTML = " You did not choose a rate"; 
    
   
}
function ratingNumber(nomber){
switch(nomber){
    case 1:document.getElementById('there').innerHTML = " You 1 selected  out of 5";
    break;
    case 2:document.getElementById('there').innerHTML = " You 2 selected  out of 5";
    break;
    case 3:document.getElementById('there').innerHTML = " You 3 selected  out of 5";
    break;
    case 4:document.getElementById('there').innerHTML = " You 4 selected  out of 5";
    break;
    case 5:document.getElementById('there').innerHTML = " You 5 selected  out of 5";
    break;
    default:document.getElementById('there').innerHTML = "you did not choose a rate";
}

 

}