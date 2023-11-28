export class FormService {
    constructor(dom, authService) {
        this.dom = dom;
        this.authService = authService;
        this.user = {
            email: "",
            password: ""
        };
        this.number = 5; // demo
        this.str = "h"; // demo
        this.onInputChange = (id) => {
            this.user = Object.assign(Object.assign({}, this.user), { [id]: this.dom.formInputs[id].value });
        };
        this.onSubmit = () => {
            this.authService.login(this.user);
        };
    }
}
