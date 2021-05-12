const login = () => {
    const pass = document.querySelector("#password");
    const passValue = pass.value;
    const msg = document.querySelector("#message");

    if (passValue === "969") {
        msg.textContent = "You are in!";
    } else {
        msg.textContent = "Try harder!";
    }
}