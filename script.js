console.log('start');



var rez = document.getElementById('var_c');
function calc_click_gipotenysa(){
  var a = document.getElementById('var_a').value;
  var b = document.getElementById('var_b').value;

  var c = Math.sqrt((a*a)+(b*b));
  rez.innerHTML = c;
}

var rez2 = document.getElementById('var_d');
var rezx = document.getElementById('var_x');
var rezx1 = document.getElementById('var_x1');
var rezx2 = document.getElementById('var_x2');
function calc_click_kvrv(){
  var a2 = document.getElementById('var_a2').value;
  var b2 = document.getElementById('var_b2').value;
  var c2 = document.getElementById('var_c2').value;

  var d = (b2*b2 - (4*a2*c2));
  rez2.innerHTML = d;
  if(d<0){
    alert("Немає коренів!");
  }
  else if(d==0){
    var x = (-b2)/(2*a2);
    rezx.innerHTML = x;
  }
  else{
    var x1 = ((-b2) - Math.sqrt(d))/(2*a2);
    var x2 = ((-b2) + Math.sqrt(d))/(2*a2);
    rezx1.innerHTML = x1;
    rezx2.innerHTML = x2;
  }
}

  function calc_click_tabyl() {
  xp=parseInt(document.forms[0].xp.value)
  xk=parseInt(document.forms[0].xk.value)
  kr=parseFloat(document.forms[0].kr.value)
  i=0
  for (x=xp;x<=xk;x=x+kr) {
      y= Math.sin(x)*Math.cos(x);
      t="для x = " + Math.round (x*10) / 10 + " y = " + Math.round (y*10) / 10 
      document.forms[0].tab_list.options[i]= new Option(t)   
      i ++
      }
  }
