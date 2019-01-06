f1=0;
f2=0;
f3=0;
f4=0;

function myFunction() {

   document.getElementById('box1').style.backgroundImage = 'url("clock1.jpg")';

}

function myFunction2() {
   document.getElementById('box2').style.backgroundImage = 'url("nasu1.jpg")';
}

function myFunction3() {
   document.getElementById('box3').style.backgroundImage = 'url("kaeru1.jpg")';
}

function myFunction4() {
   document.getElementById('box4').style.backgroundImage = 'url("chair1.jpg")';
   
 }

 function passFunction()  {
   var pw;
   
pw = prompt("スタンプの絵の頭文字を順番にいれて暗号を完成させよう！(ひらがなで）","");


if (pw == "となかい"){
  location.href = "https://hungry-goldberg-5c9bfd.netlify.com/";
}else{
  alert("暗号が違います！");
}
}





 
  AFRAME.registerComponent('counthandler', {
     tick: function () {
          if (document.querySelector('#animated-marker').object3D.visible == true) {
             setTimeout("myFunction()",1000);
             f1=1;
              }
              if (document.querySelector('#animated-marker2').object3D.visible == true) {
               setTimeout("myFunction2()",1000);
               f2=1;
                }
                if (document.querySelector('#animated-marker3').object3D.visible == true) {
                  setTimeout("myFunction3()",1000);
                  f3=1;
               }

                  if (document.querySelector('#animated-marker4').object3D.visible == true) {
                     setTimeout("myFunction4()",1000);
                     f4=1;
                     }

                  if(f1==1 && f2==1 && f3==1 && f4==1){
                     setTimeout("passFunction()",3000);
                     f1=0;
                  }
         } 
      }
 );

 




  
  
  
   