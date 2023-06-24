let stickman = document.querySelector(".stickman");
let text = document.querySelector(".text");
let circle = document.querySelector(".circle");
let time = 10;
let countdown_el = document.getElementById("countdown");

stickman.addEventListener("click",function(){
    function CountDown(){
        if(stickman.getBoundingClientRect().top>circle.getBoundingClientRect().top && stickman.getBoundingClientRect().left>circle.getBoundingClientRect().left && window.innerWidth + 300 - stickman.getBoundingClientRect().left>circle.getBoundingClientRect().left && window.innerHeight + 500 -  stickman.getBoundingClientRect().top>circle.getBoundingClientRect().top && time>0){
            circle.style.backgroundColor = "green"
            circle.style.borderColor = "green"
            document.querySelector(".stickman img").src = "assets/photos/holdinghands.png";
            document.querySelector(".friend").classList.add("d-none")
            stickman.style.width = "10%"
            stickman.style.top = "50%"
            stickman.style.left = "50%"
            stickman.style.transform = "translate(-50%,-50%)"
            document.body.onkeydown = () => {}
            text.classList.remove("d-none")
            document.querySelector(".text h4").innerHTML = "Congratulations, my friend! You can be proud of yourself, since you made two tiny stickmen happy! Now they will live a happy and joyful life! And it's all thanks to you!"
            document.querySelector(".countdown").classList.add("d-none")
            document.querySelector(".text h4").style.color = "#07565f"
            document.querySelector(".try-again").classList.remove("d-none")
            document.querySelector(".yes").onclick = function (){
                document.querySelector(".try-again p").innerHTML = "Well..Alright! Let's try again!"
                document.querySelector(".try-again p").style.fontSize = "30px"
                document.querySelector(".yes").classList.add("d-none")
                document.querySelector(".no").classList.add("d-none")
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            document.querySelector(".no").onclick = function(){
                document.querySelector(".try-again p").style.fontSize = "30px"
                document.querySelector(".try-again p").innerHTML = "Okay! I hope to see you again, good man :)"
                document.querySelector(".yes").classList.add("d-none")
                this.classList.add("d-none")
            }
        }   
        else{
            countdown_el.innerHTML = time;
            time --;
            if(time<3){
                countdown_el.style.color = "red";
            }
           if(time===-1){
            document.body.onkeydown = () => {};
           
            document.querySelector(".text h4").innerHTML = "Oh, no! Look what you did! Now these little stickmen will be alone for the rest of their lives..."
            document.querySelector(".text h4").style.color = "#ff0000"
            document.querySelector(".stickman img").src = "assets/photos/cry.png"
            document.querySelector(".friend img").src = "assets/photos/sad.png"
            time = 0;
            setTimeout(() => {
                text.classList.remove("d-none")
                document.querySelector(".countdown").classList.add("d-none")
                document.querySelector(".try-again").classList.remove("d-none")
                document.querySelector(".yes").onclick = function (){
                document.querySelector(".try-again p").innerHTML = "Well..I guess, i will give you one more chance to fix everything you've done...Good luck!"
                document.querySelector(".try-again p").style.fontSize = "30px"
                document.querySelector(".yes").classList.add("d-none")
                document.querySelector(".no").classList.add("d-none")
                setTimeout(() => {
                    location.reload();
                }, 2500);
            }
            document.querySelector(".no").onclick = function(){
                document.querySelector(".try-again p").style.fontSize = "30px"
                document.querySelector(".try-again p").innerHTML = "How cruel of you..."
                document.querySelector(".yes").classList.add("d-none")
                this.classList.add("d-none")
            }
            }, 1000);
            
           }
           
        }
    }
    setInterval(CountDown,1000);
   
   text.classList.add("d-none");
   let pixels_x = 0;
   let pixels_y = 0;
   document.querySelector(".stickman img").src = "assets/photos/walking.png"
   document.body.onkeydown = function(e){
    if(e.key === "w"){
        pixels_y-=5;
        stickman.style.top = `${pixels_y}px`;
        document.querySelector(".stickman img").src = "assets/photos/walking.png"
    }
    else if(e.key === "d"){
        pixels_x+=5;
        stickman.style.left = `${pixels_x}px`;
        document.querySelector(".stickman img").src = "assets/photos/walking.png" 
    }
    else if(e.key === "a"){
        pixels_x-=5;
        stickman.style.left = `${pixels_x}px`;
        document.querySelector(".stickman img").src = "assets/photos/walkingleft.png" 
    }
    else if(e.key === "s"){
        pixels_y+=5;
        stickman.style.top = `${pixels_y}px`;
    }

    if(e.key === "w" && pixels_y<-10){
        stickman.style.top = "-7px";
    }
    else if(e.key === "a" && pixels_x<-5){
        stickman.style.left = "-5px";
    }

    else if(e.key === "d" && stickman.style.left>window.innerWidth){
        stickman.style.left = "0";
        
    }


    console.log(stickman.getBoundingClientRect().top)
    console.log(stickman.getBoundingClientRect().left)
    console.log(circle.getBoundingClientRect().left)
}    
})
