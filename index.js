function opensidebar(){
    const select = document.querySelector(".sidebar");
select.style.display ="flex";
}
function closesidebar(){
    const selects = document.querySelector(".sidebar");
selects.style.display ="none";
}









  var num =0;
  var container=[
   "slide2.JPG",
   "slide3.JPG",
   "slide4.JPG",
   "slide5.JPG" ]
function nextbtn(){ 
    num++

     if(num>=container.length){
        num =0;
     }
    document.getElementById("slideimg").src= container[num];

   
   

    
}
function prebtn(){ 
   

     if(num<container.length){
      num--;
      if(num<0){
        num =3;
      }
        
     }
    document.getElementById("slideimg").src= container[num];

   
   

    
}