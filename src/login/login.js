var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var fetch_1 = require('../utils/fetch');
var styles = require('./login.css');
var template = require('./login.html');
var Login = (function () {
    function Login(router) {
        this.router = router;
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        window.fetch('http://localhost:3001/sessions/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username, password: password
            })
        })
            .then(fetch_1.status)
            .then(fetch_1.json)
            .then(function (response) {
            localStorage.setItem('jwt', response.id_token);
            _this.router.parent.navigateByUrl('/home');
        })
            .catch(function (error) {
            alert(error.message);
            console.log(error.message);
        });
    };
    Login.prototype.signup = function (event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink],
            template: template,
            styles: [styles]
        })
    ], Login);
    return Login;
})();
exports.Login = Login;
//# sourceMappingURL=login.js.map