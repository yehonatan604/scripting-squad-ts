export class DomService {
    constructor() {
        this.formInputs = {
            email: document.querySelector("#email"),
            password: document.querySelector("#password"),
            button: document.querySelector("#btn")
        };
        this.paragraph = document.querySelector("#token");
        this.userDiv = document.querySelector("#userDiv");
        this.addListeners = (inptChangeFunc, submitFunc) => {
            this.formInputs.email.addEventListener("keyup", (event) => {
                let id = event.target.id;
                inptChangeFunc(id);
            });
            this.formInputs.password.addEventListener("keyup", (event) => {
                let id = event.target.id;
                inptChangeFunc(id);
            });
            this.formInputs.button.addEventListener("click", (event) => {
                event.preventDefault();
                submitFunc();
            });
        };
    }
}
