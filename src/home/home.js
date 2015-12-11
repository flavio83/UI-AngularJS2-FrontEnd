var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var fetch_1 = require('../utils/fetch');
var styles = require('./home.css');
var template = require('./home.html');
var Home = (function () {
    function Home(router) {
        this.router = router;
        this.jwt = localStorage.getItem('jwt');
        this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }
    Home.prototype.logout = function () {
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    };
    Home.prototype.callAnonymousApi = function () {
        this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
    };
    Home.prototype.callSecuredApi = function () {
        this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
    };
    Home.prototype._callApi = function (type, url) {
        var _this = this;
        this.response = null;
        this.api = type;
        window.fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + this.jwt
            }
        })
            .then(fetch_1.status)
            .then(fetch_1.text)
            .then(function (response) {
            _this.response = response;
        })
            .catch(function (error) {
            _this.response = error.message;
        });
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES],
            template: template,
            styles: [styles]
        })
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map