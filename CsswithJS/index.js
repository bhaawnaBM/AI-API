function handleClick() {
    // alert('Hooray');
    // heading.style.color = "red";
    let heading = document.querySelector("h1");
    // heading.classList.add("highlight");
    // heading.classList.remove("highlight");
    heading.classList.toggle("highlight");

    //Hide heading
    heading.classList.add("hidden");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
console.log(buttonElement.getAttribute("id"));
// buttonElement.setAttribute("disabled", "disabled");

//Change the CSS attribute
buttonElement.style.background = "red";

// let heading = document.querySelector("h1");
// heading.style.color = "green"; //to change the color on click, include the statement with in the function.