import { AuthService } from "./services/Auth.service.js";
import { DomService } from "./services/Dom.service.js";
import { FormService } from "./services/Form.service.js";

let dom: DomService = new DomService();
let auth: AuthService = new AuthService(dom);
let form: FormService = new FormService(dom, auth);

dom.addListeners(form.onInputChange, form.onSubmit);
