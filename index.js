// Get the modal
var modal = $("#myModal");

// Get the button that opens the modal

var btn = $(".create-character");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.on("click", function () {
    modal.show();
    console.log("button clicked");
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.css({ "display": "none" });
}

// window.onclick = function () {
//     if (modal.css({ "display": "block" })) {
//         modal.css({ "display": "none" })
//     }
// };