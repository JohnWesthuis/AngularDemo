webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_text_sample_text_component__ = __webpack_require__("./src/app/sample-text/sample-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_data_sample_data_component__ = __webpack_require__("./src/app/sample-data/sample-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'sampletext', component: __WEBPACK_IMPORTED_MODULE_2__sample_text_sample_text_component__["a" /* SampleTextComponent */] },
    { path: 'sampledata', component: __WEBPACK_IMPORTED_MODULE_3__sample_data_sample_data_component__["a" /* SampleDataComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  background-color: blue;\r\n  color: white;\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  margin: 0 20px;\r\n}\r\n\r\n.flex-wrap1 {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\na, button {\r\n  color: black;\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  border: 1px solid blue;\r\n  border-radius: 10px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  \r\n}\r\n\r\nli {\r\n  width: 200px;\r\n  margin: 50px 0;\r\n}\r\n\r\nbutton {\r\n  margin: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"flex-wrap1\">\r\n    <aside>\r\n      <ul>\r\n        <li><a routerLink=\"/sampletext\">Load Sample Text</a></li>\r\n        <li><a routerLink=\"/sampledata\">Load Sample Data</a></li>\r\n      </ul>\r\n    </aside>\r\n\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n    <button (click)=\"toggle()\">{{label}}</button>\r\n    <banner *ngIf=\"show\"></banner>\r\n \r\n  <app-server-data></app-server-data>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
        this.show = true;
        this.label = "HIDE BANNER";
    }
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.label = this.show ? "HIDE BANNER" : "SHOW BANNER";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_data_sample_data_component__ = __webpack_require__("./src/app/sample-data/sample-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__banner_banner_component__ = __webpack_require__("./src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_text_sample_text_component__ = __webpack_require__("./src/app/sample-text/sample-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_data_server_data_component__ = __webpack_require__("./src/app/server-data/server-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sample_data_sample_data_component__["a" /* SampleDataComponent */],
                __WEBPACK_IMPORTED_MODULE_6__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sample_text_sample_text_component__["a" /* SampleTextComponent */],
                __WEBPACK_IMPORTED_MODULE_8__server_data_server_data_component__["a" /* ServerDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  border: 2px solid blue;\r\n  padding: 20px;\r\n  text-align: center;\r\n  display: inline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.title = "Here is the banner content";
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'banner',
            template: __webpack_require__("./src/app/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/sample-data/sample-data.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: 0 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sample-data/sample-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Sample Data</h1>\r\n  <ul>\r\n    <li *ngFor=\"let drink of beverages\">{{drink.name}} : {{drink.price | currency}}</li>\r\n  </ul>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sample-data/sample-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleDataComponent = /** @class */ (function () {
    function SampleDataComponent() {
    }
    SampleDataComponent.prototype.ngOnInit = function () {
        this.beverages = [
            new Beverage('Coffee', 2),
            new Beverage('Tea', 2.5),
            new Beverage('Beer', 5),
            new Beverage('Wine', 7.5)
        ];
    };
    SampleDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample-data',
            template: __webpack_require__("./src/app/sample-data/sample-data.component.html"),
            styles: [__webpack_require__("./src/app/sample-data/sample-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleDataComponent);
    return SampleDataComponent;
}());

var Beverage = /** @class */ (function () {
    function Beverage(name, price) {
        this.name = name;
        this.price = price;
    }
    return Beverage;
}());


/***/ }),

/***/ "./src/app/sample-text/sample-text.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n  width: 75%;\r\n  margin: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sample-text/sample-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Sample Text</h1>\r\n  <p>Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.</p>\r\n  <p>Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sample-text/sample-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleTextComponent = /** @class */ (function () {
    function SampleTextComponent() {
    }
    SampleTextComponent.prototype.ngOnInit = function () {
    };
    SampleTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample-text',
            template: __webpack_require__("./src/app/sample-text/sample-text.component.html"),
            styles: [__webpack_require__("./src/app/sample-text/sample-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleTextComponent);
    return SampleTextComponent;
}());



/***/ }),

/***/ "./src/app/server-data/server-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-data/server-data.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Server data\n</h3>\n<div *ngFor=\"let item of data\">{{\"Got: \" + item}}</div>\n<p *ngIf=\"!data\">NO DATA RETURNED</p>\n\n"

/***/ }),

/***/ "./src/app/server-data/server-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerDataComponent = /** @class */ (function () {
    function ServerDataComponent(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:58763/api';
    }
    ServerDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.baseUrl + '/values').subscribe(function (response) {
            _this.data = response;
        }, function (error) {
            console.log('Need CORS to access: ' + _this.baseUrl);
        });
    };
    ServerDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-server-data',
            template: __webpack_require__("./src/app/server-data/server-data.component.html"),
            styles: [__webpack_require__("./src/app/server-data/server-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServerDataComponent);
    return ServerDataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:58763/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map