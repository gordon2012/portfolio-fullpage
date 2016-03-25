$(document).ready(function()
{
  $('#fullpage').fullpage
  ({
    anchors: ['home', 'about', 'portfolio', 'contact'],
    menu: '#menu'
  });

  // objInterval = setInterval("verticalloop()", interval);

});




// attempt to scroll skills
//
// var interval=1000;
// var stepsize=78;
// var scrollspeed="normal";
// var objInterval=null;

// function verticalloop(){
//   console.log("test");
//   if($("#scr1-out").scrollTop()>=$("#scr1-in").outerHeight()){
//     $("#scr1-out").scrollTop($("#scr1-out").scrollTop()-$("#scr1-in").outerHeight());
//   }
//   $("#scr1-out").animate({"scrollTop" : $("#scr1-out").scrollTop()+stepsize +"px"},scrollspeed,function(){
//     // $("#foot").html("scrollTop:"+$("#content").scrollTop());
//   });
// }
