addEventListener("DOMContentLoaded", (e) => {
    let myfrom = document.querySelector("#myform");
    myfrom.addEventListener("submit", (e) => {
        e.preventDefault();
        let myinput = new FormData(e.target);
        let data = Object.fromEntries(myinput);
        let rest = () => {
            myfrom.reset();
            return "";
        }
        document.querySelector("#res").value = (e.submitter.dataset.operacion == "calcular") ? eval(`${data.n1} ${data.operaciones} ${data.n2}`) : rest();
    });
});