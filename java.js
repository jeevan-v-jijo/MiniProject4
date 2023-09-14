console.log('hello')
var num=document.querySelectorAll(".drum").length
console.log(num)

for(i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var button=this.innerHTML
        switch(button){
            case 'w' :var audio=new Audio("sounds/tom-1.mp3")
                    audio.play();
                    break;
            case 'a' :var audio=new Audio("sounds/tom-2.mp3")
                    audio.play();
                    break;
            case 's' :var audio=new Audio("sounds/tom-3.mp3")
                    audio.play();
                    break;
            case 'd' :var audio=new Audio("sounds/tom-4.mp3")
                    audio.play();
                    break;
            case 'j' :var audio=new Audio("sounds/snare.mp3")
                    audio.play();
                    break;
            case 'k' :var audio=new Audio("sounds/crash.mp3")
                    audio.play();
                    break;
          
            case 'l' :var audio=new Audio("sounds/kick-bass.mp3")
                    audio.play();
                    break;
        }
        
    })
}  


document.addEventListener("keypress",function(e){
    var choice= e.key.toLowerCase()
    switch(choice){
        case 'w' :var audio=new Audio("sounds/tom-1.mp3")
                audio.play();
                break;
        case 'a' :var audio=new Audio("sounds/tom-2.mp3")
                audio.play();
                break;
        case 's' :var audio=new Audio("sounds/tom-3.mp3")
                audio.play();
                break;
        case 'd' :var audio=new Audio("sounds/tom-4.mp3")
                audio.play();
                break;
        case 'j' :var audio=new Audio("sounds/snare.mp3")
                audio.play();
                break;
        case 'k' :var audio=new Audio("sounds/crash.mp3")
                audio.play();
                break;
      
        case 'l' :var audio=new Audio("sounds/kick-bass.mp3")
                audio.play();
                break;
        default: console.log("other key pressed")
    }
    
})