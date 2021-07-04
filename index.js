var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
          var textContent =  this.textContent;  
          switch(textContent){
                case "JD":
                   var js = new Audio("sounds/jack sparrow bgm.mp3");
                         js.play();
                         break;
                case "RK":
                    var rs = new Audio("sounds/Kabali bgm.mp3");
                    rs.play();
                    break;
                case "YS":
                    var ys = new Audio("sounds/Yash bgm.mp3");
                    ys.play();
                    break;
                case "HR":
                    var hr = new Audio("sounds/hrithik bgm.mp3");
                    hr.play();
                    break;
                case "TS":
                    var ts = new Audio("sounds/tiger bgm.mp3");
                    ts.play();
                    break;
                case "VS":
                    var vs = new Audio("sounds/simha.mp3");
                    vs.play();
                    break;
                case "SU":
                    var su = new Audio("sounds/su.mp3");
                    su.play();
                    break;
                default: console.log(textContent);
          }
       
    });   // used anonymous functions
}
