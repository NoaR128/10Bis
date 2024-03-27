const form= document.querySelector(".form")
pwShowHide = document.querySelectorAll(".eye-icon");
link = document.querySelectorAll(".link");


document.addEventListener("DOMContentLoaded", () => {
    pwShowHide.forEach(eyeicon => {
        eyeicon.addEventListener("click", () => {
            var pwFields = eyeicon.parentElement.parentElement.querySelectorAll(".password");

            console.log(pwShowHide)
            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                    eyeicon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeicon.classList.replace("bx-show", "bx-hide");
            })
        })
    })
})