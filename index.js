var modal = $("#myModal");
var createModal = $("#createModal");
var characterBtn = $(".create-character");
var createAccountBtn = $(".create-account");
var characterSubmitBtn = $(".character-submit");
var span = document.getElementsByClassName("close")[0];

characterBtn.on("click", function () {
    modal.show();
})


span.onclick = function () {
    modal.css({ "display": "none" });
}

