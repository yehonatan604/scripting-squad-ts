import { AuthService } from "./services/Auth.service.js";
import { DomService } from "./services/Dom.service.js";
import { FormService } from "./services/Form.service.js";
let dom = new DomService();
let auth = new AuthService(dom);
let form = new FormService(dom, auth);
dom.addListeners(form.onInputChange, form.onSubmit);
