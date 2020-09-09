// Get array of all li's
var lis = document.querySelectorAll("li");

// itterate through all li's, add event listeners to all of them.
for (let index = 0; index < lis.length; index++) {
    // start hover event
    lis[index].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });

    // end hover event
    lis[index].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });

    lis[index].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}