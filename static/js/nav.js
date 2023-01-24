let button = document.getElementById("navButton")
//const menu1 = document.getElementsByClassName("MainNav")[0];

  button.addEventListener("click",function(e) {

    e.preventDefault();//prevent default click

    //get header and toggle navigation
    const header = document.getElementsByClassName("mainHeader")[0];
    header.classList.toggle("navigationActive");


  });


/*
Prevents animations and traansitions from firing when browser resized
https://css-tricks.com/stop-animations-during-window-resizing/
*/
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});