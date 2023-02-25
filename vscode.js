let random_nr = 4;
function random(){
  random_nr = Math.floor(Math.random() * 3);
}
function button_check(x){
  if(x == random_nr){
    alert("Correct");
  }else{
    alert("Incorect");
  }
}
