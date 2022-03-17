//Button
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        console.log(this);
        // const white = ["white" , "red"];
        // console.log(this.style.color = white[Math.floor(Math.random() * 2)]);

        switch (this.innerHTML) {
            case "w": //document.querySelectorAll(".drum")[0]:
                // var tom1 = new Audio("sounds/tom-1.mp3");
                // tom1.play();
                new Audio("sounds/tom-1.mp3").play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            default: console.log(this.innerHTML);
        }

    });
}
//keypress
document.addEventListener("keypress", function (event) {
//   alert("iam press the key");
   //console.log(event.key);
   console.log(event);
   
   
});





// function playaudio() {
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();

// }



// document.querySelectorAll("button")[1].addEventListener("click" , function () {
//     alert("Kerja anjing !!");
// });



// function handleClick() {
//     alert("Kerja anjing !!");
// }



// document.querySelectorAll(".drum")[0].addEventListener("click", () => {

//         new Audio("sounds/tom-1.mp3").play();

//     })