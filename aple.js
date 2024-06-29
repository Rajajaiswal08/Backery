var manubar = document.querySelector("#bars")
var closeBtn = document.querySelector("#closeBtn")
var open = document.querySelector(".open")

window.addEventListener(
    "scroll",
    function (e) {
        if (window.scrollY >= 65) {
            e.document.body.classList.add("open")
        }
        else {
            e.document.body.classList.remove("open")
        }

    }
)
manubar.addEventListener(
    "click",
    function () {
        document.body.classList.add("open-manu");
        manubar.style.display = "none";
    }

)
closeBtn.addEventListener(
    "click",
    function () {
        document.body.classList.remove("open-manu");
        manubar.style.display = "";
    }
)