var player=1;

function clk(btn){
  if(player==1){
  document.getElementById(btn).value='X';
  player-=1;
  win('X');
  document.getElementById(btn).disabled='disable';
}else{
  document.getElementById(btn).value='O'
  player+=1;
  win('O');
  document.getElementById(btn).disabled='disable';
}
}

function row(n,val){
  if(document.getElementById('btn'+n).value==val && document.getElementById('btn'+(n+1)).value==val && document.getElementById('btn'+(n+2)).value==val){
    return true;
  }else{
    return false;
  }
}

function col(n,val){
  if(document.getElementById('btn'+n).value==val && document.getElementById('btn'+(n+3)).value==val && document.getElementById('btn'+(n+6)).value==val){
    return true;
  }else{
    return false;
  }
}

function win(vl){
  // function clear(){
  //   for(var n=1;n<10;n++){
  //     document.getElementById('btn'+n).value=" ";
  //     document.getElementById(btn).disabled='enable';
  //   }
  // }
    if(diag(vl)||row(1,vl)||col(1,vl)||row(4,vl)||col(2,vl)||row(7,vl)||col(3,vl)){
      alert(vl+' won');
      // clear();

    }
  }
function diag(val){
  if((document.getElementById('btn1').value==val&&document.getElementById('btn5').value==val&&document.getElementById('btn9').value==val)||(document.getElementById('btn3').value==val&&document.getElementById('btn5').value==val&&document.getElementById('btn7').value==val)){
    return true;
  }else{
    return false;
  }
}
function clear(){
  for(var n=1;n<0;n++){
    document.getElementById('btn'+n).value="";
  }
}
