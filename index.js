var modal = $("#myModal");
var characterBtn = $(".create-character");
var characterSubmitBtn = $(".character-submit");
var span = document.getElementsByClassName("close")[0];

characterBtn.on("click", function () {
    modal.show();
    console.log("button clicked");
})

span.onclick = function () {
    modal.css({ "display": "none" });
}

