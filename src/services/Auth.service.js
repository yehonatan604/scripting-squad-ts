var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class AuthService {
    constructor(dom) {
        this.dom = dom;
        this.login = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log("login");
            try {
                const res = yield fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                });
                const token = yield res.text();
                localStorage.setItem('token', token);
                this.dom.paragraph.textContent = token;
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
