import { FormInputs } from "../data/FormInputs.model";

export class DomService {
    formInputs: FormInputs = {
        email: document.querySelector<HTMLInputElement>("#email"),
        password: document.querySelector<HTMLInputElement>("#password"),
        button: document.querySelector<HTMLButtonElement>("#btn")
    }

    paragraph: HTMLParagraphElement = document.querySelector<HTMLParagraphElement>("#token");
    userDiv: HTMLDivElement = document.querySelector<HTMLDivElement>("#userDiv");

    addListeners: Function = (inptChangeFunc: Function, submitFunc: Function): void => {
        this.formInputs.email.addEventListener("keyup", (event: Event) => {
            let id = (event.target as HTMLInputElement).id;
            inptChangeFunc(id);
        })
        this.formInputs.password.addEventListener("keyup", (event: Event) => {
            let id = (event.target as HTMLInputElement).id;
            inptChangeFunc(id);
        })
        this.formInputs.button.addEventListener("click", (event: Event) => {
            event.preventDefault();
            submitFunc();
        })
    }
}
