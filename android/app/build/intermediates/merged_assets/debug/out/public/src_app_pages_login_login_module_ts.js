"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);





let LoginPage = class LoginPage {
    /**
     * Constructor de la clase
     * @param formBuilder para crear el formulario
     * @param validationMessages para crear el mensaje de validacion (Para requerir el campo de usuario y contraseña)
     */
    constructor(fb) {
        this.fb = fb;
        this.formLogin = this.fb.group({
            us_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
        this.validationMessages = {
            us_name: [
                { type: 'required', message: "Obligatorio!" }
            ],
            pass: [
                { type: 'required', message: "Obligatorio!" }
            ]
        };
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    /**
     * Funcion para inicio de sesion
    */
    login() {
        //Aqui va todo el guateque
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.light-bg {\n  --background: #fff;\n}\n\n.menu-bar {\n  padding: 10px;\n}\n\n.menu-container {\n  display: none;\n}\n\n#logo {\n  width: 90px;\n}\n\nion-item.footer-item > p,\nion-item.footer-item > ion-icon {\n  color: #fff;\n}\n\n.green-title {\n  color: #39b54a;\n}\n\n.purple {\n  color: #331832;\n}\n\ndiv#container > h1 {\n  color: #262262;\n}\n\n#container {\n  width: 90%;\n  background: #fff;\n  height: 500px;\n  border-top: 3px solid #39b54a;\n  margin-left: 5%;\n  margin-top: 15%;\n  box-shadow: 2px 3px 10px 3px #888888;\n  border-radius: 3px;\n  text-align: center;\n}\n\n#form-items {\n  padding: 10px 10px 10px 10px;\n}\n\n.item {\n  padding: 5px;\n}\n\n#submit-button {\n  transition-duration: 0.3s;\n  width: 100px;\n  --border-radius: 50px;\n  --background: #fff;\n  border: 2px solid #331832;\n  --color: #331832;\n  border-radius: 50px;\n  margin-top: 50px;\n  --background-activated: #fff;\n  --color-activated: #39b54a;\n}\n\n#submit-button:hover {\n  transition-duration: 0.3s;\n  --background-activated: #fff;\n  --background-focused: #fff;\n  border: 2px solid #39b54a;\n  --color: #39b54a;\n}\n\n#submit-button:active {\n  --background-activated: #fff;\n  --background-focused: #fff;\n  border: 2px solid #331832;\n  --color: #331832;\n}\n\n.form_error {\n  text-align: left;\n  margin-left: 20px;\n  color: red;\n}\n\n.reg-link {\n  text-decoration: none;\n}\n\n.reg-link:hover {\n  color: #39b54a;\n}\n\n.register {\n  width: 90%;\n  margin-left: 5%;\n}\n\n@media screen and (min-width: 600px) {\n  .menu-button {\n    display: none;\n  }\n\n  .menu-items {\n    color: #999;\n    margin-left: 10px;\n    font-size: 1.2em;\n    background: none;\n    cursor: pointer;\n  }\n\n  .current {\n    color: #262262;\n  }\n\n  .current:before {\n    content: \"\";\n    position: absolute;\n    top: 30px;\n    transform: translateX(-3px);\n    width: 75px;\n    height: 3px;\n    background: #39b54a;\n    border-radius: 3px;\n  }\n\n  .menu-items:hover {\n    color: #39b54a;\n  }\n\n  .menu-container {\n    display: flex;\n    margin-right: 5%;\n  }\n\n  #container {\n    width: 50%;\n    height: 450px;\n    border-top: 3px solid #39b54a;\n    margin-left: 25%;\n    margin-top: 5%;\n    box-shadow: 2px 3px 10px 3px #888888;\n    border-radius: 3px;\n    text-align: center;\n  }\n\n  #form-items {\n    margin-top: 5%;\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n\n  .register {\n    width: 45%;\n    margin-left: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElORyUyMEVOJTIwU0lTVEVNQVNcXDEwbW8lMjBzZW1lc3RyZVxcR1BTXFxQcm95ZWN0b1xcZnJvbnRFbmRQcm95ZWN0XFxzcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7QUNISjs7QURNQTs7RUFFSSxXQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksNEJBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7QUNISjs7QURNQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDSEo7O0FES0E7RUFDSTtJQUNJLGFBQUE7RUNGTjs7RURLRTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDRk47O0VES0U7SUFDSSxjQUFBO0VDRk47O0VES0U7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNGTjs7RURLRTtJQUNJLGNBQUE7RUNGTjs7RURLRTtJQUNJLGFBQUE7SUFDQSxnQkFBQTtFQ0ZOOztFREtFO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSw2QkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLG9DQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ0ZOOztFREtFO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0ZOOztFREtFO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VDRk47QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2ZXJzaW9uPScxLjEnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpzdmdqcz0naHR0cDovL3N2Z2pzLmNvbS9zdmdqcycgd2lkdGg9JzE0NDAnIGhlaWdodD0nNTYwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgMTQ0MCA1NjAnJTNlJTNjZyBtYXNrPSd1cmwoJTI2cXVvdCUzYiUyM1N2Z2pzTWFzazEwMDglMjZxdW90JTNiKScgZmlsbD0nbm9uZSclM2UlM2NyZWN0IHdpZHRoPScxNDQwJyBoZWlnaHQ9JzU2MCcgeD0nMCcgeT0nMCcgZmlsbD0ncmdiYSg1MSUyYyAyNCUyYyA1MCUyYyAxKSclM2UlM2MvcmVjdCUzZSUzY3BhdGggZD0nTTE0NDAgMEw4NTIuMTQgMEwxNDQwIDE1OS4xOXonIGZpbGw9J3JnYmEoMjU1JTJjIDI1NSUyYyAyNTUlMmMgLjEpJyUzZSUzYy9wYXRoJTNlJTNjcGF0aCBkPSdNODUyLjE0IDBMMTQ0MCAxNTkuMTlMMTQ0MCAyNjEuODFMODI1Ljg4IDB6JyBmaWxsPSdyZ2JhKDI1NSUyYyAyNTUlMmMgMjU1JTJjIC4wNzUpJyUzZSUzYy9wYXRoJTNlJTNjcGF0aCBkPSdNODI1Ljg4IDBMMTQ0MCAyNjEuODFMMTQ0MCA0MjQuMDgwMDAwMDAwMDAwMDRMNTI2LjIyIDB6JyBmaWxsPSdyZ2JhKDI1NSUyYyAyNTUlMmMgMjU1JTJjIC4wNSknJTNlJTNjL3BhdGglM2UlM2NwYXRoIGQ9J001MjYuMjIgMEwxNDQwIDQyNC4wODAwMDAwMDAwMDAwNEwxNDQwIDUxOS44NkwyMTEuOTcwMDAwMDAwMDAwMDMgMHonIGZpbGw9J3JnYmEoMjU1JTJjIDI1NSUyYyAyNTUlMmMgLjAyNSknJTNlJTNjL3BhdGglM2UlM2NwYXRoIGQ9J00wIDU2MEw2MzIuMjggNTYwTDAgNTQ5LjkzeicgZmlsbD0ncmdiYSgwJTJjIDAlMmMgMCUyYyAuMSknJTNlJTNjL3BhdGglM2UlM2NwYXRoIGQ9J00wIDU0OS45M0w2MzIuMjggNTYwTDkxOC4wODk5OTk5OTk5OTk5IDU2MEwwIDUxMy45OXonIGZpbGw9J3JnYmEoMCUyYyAwJTJjIDAlMmMgLjA3NSknJTNlJTNjL3BhdGglM2UlM2NwYXRoIGQ9J00wIDUxMy45OUw5MTguMDg5OTk5OTk5OTk5OSA1NjBMMTAxNi4wNiA1NjBMMCAyNzcuNjl6JyBmaWxsPSdyZ2JhKDAlMmMgMCUyYyAwJTJjIC4wNSknJTNlJTNjL3BhdGglM2UlM2NwYXRoIGQ9J00wIDI3Ny42OUwxMDE2LjA2IDU2MEwxMDQzLjE1OTk5OTk5OTk5OTkgNTYwTDAgMTg1LjQzeicgZmlsbD0ncmdiYSgwJTJjIDAlMmMgMCUyYyAuMDI1KSclM2UlM2MvcGF0aCUzZSUzYy9nJTNlJTNjZGVmcyUzZSUzY21hc2sgaWQ9J1N2Z2pzTWFzazEwMDgnJTNlJTNjcmVjdCB3aWR0aD0nMTQ0MCcgaGVpZ2h0PSc1NjAnIGZpbGw9J3doaXRlJyUzZSUzYy9yZWN0JTNlJTNjL21hc2slM2UlM2MvZGVmcyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5saWdodC1iZ3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjsgICAgXHJcbn1cclxuXHJcbi5tZW51LWJhcnsgICAgXHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn0gICBcclxuXHJcbi5tZW51LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0gIFxyXG5cclxuI2xvZ297ICAgIFxyXG4gICAgd2lkdGg6OTBweDsgICAgXHJcbn0gICAgICBcclxuXHJcbmlvbi1pdGVtLmZvb3Rlci1pdGVtID4gcCwgXHJcbmlvbi1pdGVtLmZvb3Rlci1pdGVtID4gaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmZjsgXHJcbn0gICAgXHJcblxyXG4uZ3JlZW4tdGl0bGV7XHJcbiAgICBjb2xvcjojMzliNTRhOyAgICBcclxufVxyXG5cclxuLnB1cnBsZXtcclxuICAgIGNvbG9yOiAjMzMxODMyO1xyXG59ICBcclxuXHJcbmRpdiNjb250YWluZXIgPiBoMXtcclxuICAgIGNvbG9yOiAjMjYyMjYyO1xyXG59XHJcblxyXG4jY29udGFpbmVyeyAgICAgICBcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDUwMHB4OyAgICAgIFxyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzOWI1NGE7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTsgICBcclxuICAgIG1hcmdpbi10b3A6MTUlOyAgICBcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggMTBweCAzcHggIzg4ODg4ODsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm0taXRlbXN7XHJcbiAgICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn0gICAgXHJcblxyXG4jc3VibWl0LWJ1dHRvbntcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246MC4zcztcclxuICAgIHdpZHRoOjEwMHB4OyAgICAgIFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4OyAgICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMTgzMjtcclxuICAgIC0tY29sb3I6ICMzMzE4MzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzM5YjU0YTtcclxufVxyXG5cclxuI3N1Ym1pdC1idXR0b246aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzliNTRhO1xyXG4gICAgLS1jb2xvcjogIzM5YjU0YTtcclxufVxyXG5cclxuI3N1Ym1pdC1idXR0b246YWN0aXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMTgzMjtcclxuICAgIC0tY29sb3I6ICMzMzE4MzI7XHJcbn1cclxuXHJcbi5mb3JtX2Vycm9ye1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLnJlZy1saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi5yZWctbGluazpob3ZlcnsgICAgICAgIFxyXG4gICAgY29sb3I6ICMzOWI1NGE7XHJcbn1cclxuXHJcbi5yZWdpc3RlcntcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjUlO1xyXG59ICAgIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KXtcclxuICAgIC5tZW51LWJ1dHRvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWl0ZW1zeyAgICAgICAgICBcclxuICAgICAgICBjb2xvcjogIzk5OTsgICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTsgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTsgICAgXHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdXJyZW50e1xyXG4gICAgICAgIGNvbG9yOiAjMjYyMjYyOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY3VycmVudDpiZWZvcmV7IFxyXG4gICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7ICAgICAgIFxyXG4gICAgICAgIHRvcDozMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcclxuICAgICAgICB3aWR0aDo3NXB4O1xyXG4gICAgICAgIGhlaWdodDozcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMzliNTRhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWVudS1pdGVtczpob3ZlcntcclxuICAgICAgICBjb2xvcjogIzM5YjU0YTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIC5tZW51LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjUlO1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWluZXJ7ICAgICAgIFxyXG4gICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4OyAgICAgIFxyXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzliNTRhO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JTsgICBcclxuICAgICAgICBtYXJnaW4tdG9wOjUlOyAgICBcclxuICAgICAgICBib3gtc2hhZG93OiAycHggM3B4IDEwcHggM3B4ICM4ODg4ODg7ICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjZm9ybS1pdGVtc3tcclxuICAgICAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXJ7XHJcbiAgICAgICAgd2lkdGg6NDUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIH0gICAgXHJcbn0iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5saWdodC1iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1lbnUtYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogOTBweDtcbn1cblxuaW9uLWl0ZW0uZm9vdGVyLWl0ZW0gPiBwLFxuaW9uLWl0ZW0uZm9vdGVyLWl0ZW0gPiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZ3JlZW4tdGl0bGUge1xuICBjb2xvcjogIzM5YjU0YTtcbn1cblxuLnB1cnBsZSB7XG4gIGNvbG9yOiAjMzMxODMyO1xufVxuXG5kaXYjY29udGFpbmVyID4gaDEge1xuICBjb2xvcjogIzI2MjI2Mjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzliNTRhO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAxMHB4IDNweCAjODg4ODg4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvcm0taXRlbXMge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI3N1Ym1pdC1idXR0b24ge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB3aWR0aDogMTAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMxODMyO1xuICAtLWNvbG9yOiAjMzMxODMyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzM5YjU0YTtcbn1cblxuI3N1Ym1pdC1idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzM5YjU0YTtcbiAgLS1jb2xvcjogIzM5YjU0YTtcbn1cblxuI3N1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzE4MzI7XG4gIC0tY29sb3I6ICMzMzE4MzI7XG59XG5cbi5mb3JtX2Vycm9yIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZWctbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJlZy1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMzOWI1NGE7XG59XG5cbi5yZWdpc3RlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm1lbnUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1lbnUtaXRlbXMge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY3VycmVudCB7XG4gICAgY29sb3I6ICMyNjIyNjI7XG4gIH1cblxuICAuY3VycmVudDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzM5YjU0YTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuICAubWVudS1pdGVtczpob3ZlciB7XG4gICAgY29sb3I6ICMzOWI1NGE7XG4gIH1cblxuICAubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxuXG4gICNjb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzM5YjU0YTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggMTBweCAzcHggIzg4ODg4ODtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgI2Zvcm0taXRlbXMge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB9XG5cbiAgLnJlZ2lzdGVyIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"\">\n  <ion-toolbar class=\"light-bg\">\n    <ion-buttons slot=\"start\" class=\"menu-button\">\n      <ion-menu-button menu=\"main-menu\" class=\"purple\"></ion-menu-button>\n    </ion-buttons>    \n    <ion-buttons slot=\"end\" class=\"menu-container\">\n      <button class=\"menu-items\" [routerLink]=\"['/home']\">\n        Inicio\n      </button>\n      <button class=\"menu-items\" [routerLink]=\"['/report']\">\n        Denunciar\n      </button>\n      <button class=\"menu-items\" [routerLink]=\"['/about']\">\n        ¿Quienes somos?\n      </button>    \n      <button class=\"menu-items current\" [routerLink]=\"['/login']\">\n        Ingresar\n      </button>\n    </ion-buttons>\n    <ion-title>      \n      <a href=\"/home\"><img src=\"../assets/img/logo.png\" id=\"logo\" alt=\"Asociación progreso para México\"></a>                        \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <form [formGroup]=\"formLogin\">\n    <div id=\"container\">\n      <h1 align=\"center\">Ingresa a tu cuenta</h1>\n      <div id=\"form-items\">\n        <ion-item class=\"item\">\n          <ion-label position=\"floating\">Correo electrónico</ion-label>\n          <ion-input [(ngModel)]=\"username\" formControlName=\"us_name\"></ion-input>\n        </ion-item>\n        <div class=\"form_error\">\n          <ng-container *ngFor=\"let val of validationMessages['us_name']\">\n            <div\n              *ngIf=\"formLogin.get('us_name').hasError(val.type) && (formLogin.get('us_name').dirty || formLogin.get('us_name').touched)\"\n            >\n              {{val.message}}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"item\">\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\" formControlName=\"pass\"></ion-input>\n        </ion-item>\n        <div class=\"form_error\">\n          <ng-container *ngFor=\"let val of validationMessages['pass']\">\n            <div\n              *ngIf=\"formLogin.get('pass').hasError(val.type) && (formLogin.get('pass').dirty || formLogin.get('pass').touched)\"\n            >\n              {{val.message}}\n            </div>\n          </ng-container>\n        </div>        \n      </div>      \n      <ion-button type=\"submit\" id=\"submit-button\" (click)=\"login()\">\n        Ingresar\n      </ion-button>\n      <ion-item class=\"register\">\n        <ion-label>\n          ¿Aún no tienes cuenta? <a href=\"#\" class=\"reg-link\">Registrate</a>\n        </ion-label>\n      </ion-item>\n    </div>\n  </form>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map