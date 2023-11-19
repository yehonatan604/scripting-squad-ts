import { UserLogin } from "../data/UserLogin.model";
import { AuthService } from "./Auth.service";
import { DomService } from "./Dom.service";

export class FormService {
    user: UserLogin = {
        email: "",
        password: ""
    }

    private number = 5; // demo
    public str = "h"; // demo

    constructor(public dom: DomService, public authService: AuthService) {
    }

    onInputChange: Function = (id: string) => {
        this.user = {
            ...this.user,
            [id]: this.dom.formInputs[id].value
        }
        console.log(this.dom.formInputs[id].value);

    }

    onSubmit: Function = () => {
        console.log(this.user);
        this.authService.login(this.user);
    }
}