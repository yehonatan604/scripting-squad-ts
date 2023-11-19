import { UserLogin } from "../data/UserLogin.model.js";
import { DomService } from "./Dom.service.js";

export class AuthService {
    constructor(public dom: DomService) {

    }

    login: Function = async (data: UserLogin): Promise<boolean> => {
        console.log("login");

        try {
            const res = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            const token = await res.text();
            localStorage.setItem('token', token);
            this.dom.paragraph.textContent = token;
            return true;
        } catch (error) {
            return false;
        }
    }

}