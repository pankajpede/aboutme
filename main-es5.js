function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 55,
      vars: 0,
      consts: [[1, "float-left", "w-100", "shape-wrapper"], [1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "mb-4"], [1, "title"], [1, "feature"], [1, "row"], [1, "col-12", "text-left", "home-text", "mb-5", "text-center", "animated", "bounceInDown"], [1, "col-12", "col-right", "sec-pad", "animated", "bounceInUp", "mt-5"], [1, "row", "row-experience"], [1, "col-4", "col-sm-3"], [1, "experience-date"], [1, "time-line-icon"], [1, "icon-uxui"], [1, "col-8", "col-sm-9", "ex-content", "text-left"], [1, "icon-mobileapp"], [1, "icon-webdesign"], [1, "icon-graphcisdesigning"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I am a UI/UX Designer and Front End Developer based in Pune, India. I am working in the Web / IT industry from last 6+ years. I have extensively worked on Designing and Coding various User Interfaces and Prototypes, which includes Web and Desktop based Applications, Mobile Applications, large/small scale websites.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I am well versed in working in Front End Technologies such as HTML/HTML5, CSS/CSS3/SCSS, JavaScript/Jquery, Angular, GIT and have extensive experience in Responsive Design, Bootstrap.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Strong knowledge of Cross Browser Testing and Browser Issues Debugging.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "UI/UX DESIGN & RESEARCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Serving as a fundamental part that brings value to create a good design, it has formed its own set of research methods.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "MOBILE APP DESIGN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Graphics is very important, but challange comes when we start working on mltiplatform app deisgning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "WEBSITE DESIGN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Journey from PSD to pixel match HTML is website design for me, which must be resposive and cross browser supported ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Graphics Designing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Graphic design is the process of visual communication and problem-solving through the use of typography, photography and illustration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".features-box[_ngcontent-%COMP%] {\n  padding: 15px 20px 15px 125px;\n  position: relative;\n}\n.features-box[_ngcontent-%COMP%]   .time-line-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40px;\n  top: 20px;\n}\n.features-box[_ngcontent-%COMP%]   .time-line-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: #000;\n}\n.features-box[_ngcontent-%COMP%]   .time-line-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100px;\n  height: 46px;\n  margin: -23px 0 0 -50px;\n  opacity: 0.2;\n  background: url('clouds.png') no-repeat center;\n  z-index: -1;\n}\n.features-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: 600;\n  font-size: 18px;\n  padding-bottom: 18px;\n  position: relative;\n  color: #999;\n}\n.features-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  width: 30px;\n  height: 2px;\n  background: #FAC921;\n}\n.features-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-bottom: 10px;\n}\n.experience-date[_ngcontent-%COMP%]   .time-line-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.experience-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: #000;\n}\n.experience-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  width: 100px;\n  height: 46px;\n  margin: -23px 0 0 -50px;\n  opacity: 0.2;\n  background: url('clouds.png') no-repeat center;\n  z-index: -1;\n}\n.ex-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 60px 0;\n  color: #a2a1a1;\n}\n.home-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 120px !important;\n  float: left;\n  margin-bottom: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0FDSWhCO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0daO0FEQUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDRVI7QURFSTtFQUNJLGtCQUFBO0FDQ1I7QURDSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQ1I7QURBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7QUNFWjtBRElJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDRFI7QURJQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVzLWJveCB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMTI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC50aW1lLWxpbmUtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgJjo6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLTIzcHggMCAwIC01MHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb3Vkcy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQUM5MjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuLmV4cGVyaWVuY2UtZGF0ZXtcbiAgICAudGltZS1saW5lLWljb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAtMjNweCAwIDAgLTUwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb3Vkcy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4uZXgtY29udGVudHtcbiAgICBwe1xuICAgICAgICBtYXJnaW46IDE1cHggMCA2MHB4IDA7XG4gICAgICAgIGNvbG9yOiAjYTJhMWExO1xuICAgIH1cbn1cbi5ob21lLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLmZlYXR1cmVzLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDEyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmVhdHVyZXMtYm94IC50aW1lLWxpbmUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDBweDtcbiAgdG9wOiAyMHB4O1xufVxuLmZlYXR1cmVzLWJveCAudGltZS1saW5lLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6ICMwMDA7XG59XG4uZmVhdHVyZXMtYm94IC50aW1lLWxpbmUtaWNvbiBpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbjogLTIzcHggMCAwIC01MHB4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvdWRzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbn1cbi5mZWF0dXJlcy1ib3ggaDMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmZlYXR1cmVzLWJveCBoMzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjRkFDOTIxO1xufVxuLmZlYXR1cmVzLWJveCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5leHBlcmllbmNlLWRhdGUgLnRpbWUtbGluZS1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV4cGVyaWVuY2UtZGF0ZSBpIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5leHBlcmllbmNlLWRhdGUgaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDZweDtcbiAgbWFyZ2luOiAtMjNweCAwIDAgLTUwcHg7XG4gIG9wYWNpdHk6IDAuMjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jbG91ZHMucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZXgtY29udGVudCBwIHtcbiAgbWFyZ2luOiAxNXB4IDAgNjBweCAwO1xuICBjb2xvcjogI2EyYTFhMTtcbn1cblxuLmhvbWUtdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHggIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _icon_sets_icon_sets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./icon-sets/icon-sets.component */
    "./src/app/icon-sets/icon-sets.component.ts");
    /* harmony import */


    var _prototyping_tool_prototyping_tool_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./prototyping-tool/prototyping-tool.component */
    "./src/app/prototyping-tool/prototyping-tool.component.ts");
    /* harmony import */


    var _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./case-study/case-study.component */
    "./src/app/case-study/case-study.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'skills',
      component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"]
    }, {
      path: 'experience',
      component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"]
    }, {
      path: 'skills',
      component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"]
    }, {
      path: 'education',
      component: _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
    }, {
      path: 'icon-sets',
      component: _icon_sets_icon_sets_component__WEBPACK_IMPORTED_MODULE_8__["IconSetsComponent"]
    }, {
      path: 'casestudy',
      component: _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__["CaseStudyComponent"]
    }, {
      path: 'prototyping-tool',
      component: _prototyping_tool_prototyping_tool_component__WEBPACK_IMPORTED_MODULE_9__["PrototypingToolComponent"]
    }, // {path: '404', component: NotFoundComponent},
    {
      path: '**',
      redirectTo: '/home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _icon_sets_icon_sets_component__WEBPACK_IMPORTED_MODULE_8__["IconSetsComponent"], _prototyping_tool_prototyping_tool_component__WEBPACK_IMPORTED_MODULE_9__["PrototypingToolComponent"], _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__["CaseStudyComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _icon_sets_icon_sets_component__WEBPACK_IMPORTED_MODULE_8__["IconSetsComponent"], _prototyping_tool_prototyping_tool_component__WEBPACK_IMPORTED_MODULE_9__["PrototypingToolComponent"], _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__["CaseStudyComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'aboutme';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/case-study/case-study.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/case-study/case-study.component.ts ***!
    \****************************************************/

  /*! exports provided: CaseStudyComponent */

  /***/
  function srcAppCaseStudyCaseStudyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaseStudyComponent", function () {
      return CaseStudyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CaseStudyComponent =
    /*#__PURE__*/
    function () {
      function CaseStudyComponent() {
        _classCallCheck(this, CaseStudyComponent);
      }

      _createClass(CaseStudyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CaseStudyComponent;
    }();

    CaseStudyComponent.ɵfac = function CaseStudyComponent_Factory(t) {
      return new (t || CaseStudyComponent)();
    };

    CaseStudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CaseStudyComponent,
      selectors: [["app-case-study"]],
      decls: 68,
      vars: 0,
      consts: [[1, "float-left", "w-100", "shape-wrapper"], [1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "title"], [1, "feature"], [1, "section", "allinone-home"], [1, "container", "mt-5"], [1, "row"], [1, "col-md-offset-2", "col-md-4", "col-12", "mb-4"], [1, "float-left", "w-100", "content-wrapper"], [1, "img-wrapper", "float-left", "w-100"], ["src", "./assets/images/projects/chabot-ai.png", 1, "w-100"], [1, "text-wrapper", "p-3", "float-left", "w-100"], [1, "h5", "text-dark", "font-weight-bold", "mb-3", "text-center"], [1, "links-wrapper", "mt-2", "float-left", "w-100"], [1, "links-item"], ["target", "_blank", "href", "https://xd.adobe.com/view/a61f37f0-43f3-4a06-8d3e-17b370cfe736-f34c/"], [1, "ri-arrow-right-line"], [1, "links-item", "mb-1"], ["target", "_blank", "href", "https://www.figma.com/proto/RFCtusleNzjiFv7BtAalyI/Bot-Station-AI-New?node-id=0%253A2&scaling=min-zoom"], ["href", "https://pankajpede.github.io/allinone/", "target", "_blank"], [1, "col-md-4", "col-12", "mb-4"], [1, "img-wrapper", "float-left", "w-100", "text-center", "pt-2"], ["src", "./assets/images/projects/concept-ott-platform.png", 2, "width", "100px"], ["target", "_blank", "href", "https://www.behance.net/gallery/142336345/Concept-video-streaming-platform?"], [1, "links-item", "mb-2"], ["target", "_blank", "href", "https://xd.adobe.com/view/7955982b-b1da-459d-b347-11b0c75d5de9-2c06/"], [1, "disabled"], ["src", "./assets/images/projects/canvas.png", 1, "w-100"], ["href", "#", 1, "disabled"], ["href", "https://xd.adobe.com/view/7955982b-b1da-459d-b347-11b0c75d5de9-2c06/", "target", "_blank", 1, "disabled"]],
      template: function CaseStudyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ChatBot AI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View UX Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "View Prototype ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Live Demo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Concept OTT platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "View UX Case Study ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "View Prototype ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "View Live Demo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Coprporate Blue Canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View UX Case Study");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "View Prototype ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Live Demo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".project-item[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-bottom: 4px solid #ddd;\n  padding: 15px;\n  cursor: pointer;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 7px;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2Nhc2Utc3R1ZHkvY2FzZS1zdHVkeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FzZS1zdHVkeS9jYXNlLXN0dWR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksaUJBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2Nhc2Utc3R1ZHkvY2FzZS1zdHVkeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWl0ZW17XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgICAgfVxuICAgIH1cbn0iLCIucHJvamVjdC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LWl0ZW0gLmhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLnByb2plY3QtaXRlbSAuaGVhZGluZyBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaseStudyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-case-study',
          templateUrl: './case-study.component.html',
          styleUrls: ['./case-study.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/education/education.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/education/education.component.ts ***!
    \**************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EducationComponent =
    /*#__PURE__*/
    function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 31,
      vars: 0,
      consts: [[1, "float-left", "w-100", "shape-wrapper"], [1, "text-center", "animated", "bounceInDown", "css-typing", "mb-5"], [1, "title"], [1, "feature"], [1, "float-left", "w-100", "animated", "bounceInUp", "mt-5", "pl-3", "animated", "bounceInUp", "mt-5"], [1, "row-experience"], [1, "ex-icon", "float-left"], [1, "icon-education"], [1, "ex-content", "text-left", "float-left"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Education ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bachelor of Engineering (Electronics)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "M. S. Bidwe Engineering College, Latur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Higher Secondary Certificate (HSC)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Science College, Nanded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Secondary School Certificate (SSC)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Z.P.High School, Ak. Balapur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".ex-icon[_ngcontent-%COMP%] {\n  width: 110px;\n  position: relative;\n}\n.ex-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: #000;\n  position: relative;\n}\n.ex-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  width: 100px;\n  height: 46px;\n  margin: -23px 0 0 -50px;\n  opacity: 0.2;\n  background: url('clouds.png') no-repeat center;\n  z-index: -1;\n}\n.ex-content[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n  margin-bottom: 50px;\n}\n.ex-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.ex-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 15px 0;\n  color: #a2a1a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0FDR1o7QURFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENRO0VBQ0ksT0FBQTtBQ0NaO0FERUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXgtaWNvbntcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBtYXJnaW46IC0yM3B4IDAgMCAtNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvdWRzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbi5leC1jb250ZW50e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAudGl0bGV7XG4gICAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xuICAgICAgICBjb2xvcjogI2EyYTFhMTtcbiAgICB9XG59XG4iLCIuZXgtaWNvbiB7XG4gIHdpZHRoOiAxMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leC1pY29uIGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbjogLTIzcHggMCAwIC01MHB4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvdWRzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmV4LWNvbnRlbnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmV4LWNvbnRlbnQgLnRpdGxlOjpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuLmV4LWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMTVweCAwIDE1cHggMDtcbiAgY29sb3I6ICNhMmExYTE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExperienceComponent =
    /*#__PURE__*/
    function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 75,
      vars: 0,
      consts: [[1, "float-left", "w-100", "shape-wrapper"], [1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "mb-4"], [1, "title"], [1, "feature"], [1, "col-12", "col-right", "sec-pad", "animated", "fadeInUp", "mt-5"], [1, "row", "row-experience"], [1, "col-4", "col-sm-3", "text-center"], ["src", "./assets/images/IML.png"], [1, "experience-date"], [1, "col-8", "col-sm-9", "ex-content", "text-left", "home-text"], ["src", "./assets/images/benchmarkitsolutions.png"], ["src", "./assets/images/enosissoftwaresolutions.png"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "January 2017 to Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Intelligent Machines Lab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "UX/UI Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Currently fulfilling contracts for UX/UI design and front-end web development jobs for Intelligents Machine Lab. I have designed Responsive Website, iOS and Android app prototypes and have coded for front-end projects as well.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I work closely with Supervisors, Developer, Bussiness Analyst, CEO's and stakeholders to fulfill a variety of specs, and address iterations professionally and quickly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My process is as follows: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Empathize (Learn about the audience for whom I am designing). Using contextual inquiry, surveying, advanced UX research and competitive analysis, I can gain a variety of user insights that can be used to mold personas, storyboards, and journey maps. These all help inform the business who and why we are designing for.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Define (Construct a POV that is based on user needs and insights) by defining the problem we can understand what features, functions or elements we can use to help the users solve it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ideate (generating ideas) by way of brainstorming, rapid prototyping, sketching, design studio, and low-fidelity wireframes, we can start ideating some solutions and even begin testing the concepts with users to start iterating the concepts. We want to be free thinking in this stage and expand the problem space.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Prototype (experiment). In addition to designing the high-fidelity prototype, I will create an Invision prototype (or in some cases a paper prototype, as mentioned before) to use internally or with the testing panel to continue to inform us about the perspective of the end user.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Test (final stage). This is probably the best part of the process, by actually testing the clickable high-fidelity app/web prototype formally I can dig deeper into the product and the user's goals. In some cases, the problem may be redefined, and in many cases, we will iterate the design once more. In my most expansive projects, we can go through 3-4 rounds of testing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "January 2017 to Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Benchmark IT Solutions LLP.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Grapics / Web Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "I am currently responsible for Grapics/Web Designer. It's my responsibility to make sure that the products rolling out have the best in UI for the user, complete with animations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " I develop User Experience for the products developed inside for Benchmark IT Solutions from the Pune Office.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "I am also responsible for the User Interface development of products.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "I provide all design, animation and interaction design elements for the products.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Aug 2013 to Jan 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Enosis Software Solutions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Grapics / Web Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "I am currently responsible for all the creative and visual creation for Enosis Software Solutions and its products. Enosis Software Solutions for every products and development have to pass through my critical eye for its User Experience and Visual persona.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "I develop User Experience for all the products developed inside the Enosis Software Solutions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " I am also responsible for the User Interface development of products.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "I provide all the animation and interaction design elements for the products.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".experience-date[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  line-height: 28px;\n  font-size: 15px;\n  color: #777777;\n}\n\n.row-experience[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 125px;\n}\n\n.row-experience[_ngcontent-%COMP%]   .time-line-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.row-experience[_ngcontent-%COMP%]    + .row-experience[_ngcontent-%COMP%] {\n  margin-top: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFSTtFQUNJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlLWRhdGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cbi5yb3ctZXhwZXJpZW5jZXtcbiAgICBpbWd7XG4gICAgICAgIG1heC13aWR0aDogMTI1cHhcbiAgICB9XG4gICAgLnRpbWUtbGluZS1pY29uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbi5yb3ctZXhwZXJpZW5jZSsucm93LWV4cGVyaWVuY2Uge1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG59IiwiLmV4cGVyaWVuY2UtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuXG4ucm93LWV4cGVyaWVuY2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMjVweDtcbn1cbi5yb3ctZXhwZXJpZW5jZSAudGltZS1saW5lLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3ctZXhwZXJpZW5jZSArIC5yb3ctZXhwZXJpZW5jZSB7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience',
          templateUrl: './experience.component.html',
          styleUrls: ['./experience.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 54,
      vars: 0,
      consts: [[1, "container-fluid", "p-0", "desktop-menu"], [1, "scroll-nav-wrap"], [1, "scroll-nav", "scroll-init"], ["routerLink", "/home", 1, "scroll-link", "act-link", "act-scrlink"], ["routerLink", "/casestudy", 1, "scroll-link"], ["routerLink", "/about", 1, "scroll-link"], ["routerLink", "/experience", 1, "scroll-link"], ["routerLink", "/education", 1, "scroll-link"], [1, "container-fluid", "p-0", "mobile-menu", "fixed-top"], [1, "navbar", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand"], [1, "fab", "icon-logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-menu"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/skills", 1, "nav-link"], ["routerLink", "/experience", 1, "nav-link"], ["routerLink", "/education", 1, "nav-link"], ["routerLink", "/projects", 1, "nav-link"], [1, "nav-item", "social"], ["href", "https://www.facebook.com/pankaj.pede.3", "target", "_blank"], [1, "fab", "icon-facebook"], ["href", "https://www.instagram.com/pankajpede3/", "target", "_blank"], [1, "fab", "icon-instagram"], ["href", "https://in.linkedin.com/in/pankaj-pede-aa6b113b", "target", "_blank"], [1, "fab", "icon-linkedin"], ["href", "#", "target", "_blank"], [1, "fab", "icon-pinterest"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".scroll-nav-wrap[_ngcontent-%COMP%] {\n  z-index: 5;\n  margin-top: 0px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  background: #2D2D32;\n}\n.scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%] {\n  float: left;\n  padding: 23px 40px 0;\n  height: 100%;\n  border-right: 1px solid rgba(255, 255, 255, 0.11);\n  background: #2A2A2E;\n  margin: 0 0 0 80px;\n}\n.scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n}\n.scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  padding: 13px 25px;\n  color: #cccccc;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  position: relative;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n  text-decoration: none;\n}\n.scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 15px;\n  height: 2px !important;\n  z-index: 62;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n  color: #fff;\n  left: 0;\n  top: 0;\n}\n.scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 2px;\n  margin-top: -1px;\n  background: rgba(255, 255, 255, 0.091);\n  z-index: 1;\n}\n.scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .scroll-nav-wrap[_ngcontent-%COMP%]   .scroll-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #FAC921;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background: #2C2D32;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .icon-logo[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #FAC921;\n  margin: 5px 0;\n  float: left;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus, .mobile-menu[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  border-top: 1px solid #faca47;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FAC921;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #faca47;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  border-top: 1px solid #faca47;\n  padding: 20px 0 10px 0;\n  margin: 25px 0 0 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px;\n  border: 1px solid #999;\n}\n.mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .mobile-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #faca47;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQVo7QURDWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ2hCO0FEQWdCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDRXBCO0FEQWdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0FDRXBCO0FEQWdCO0VBQ0ksY0FBQTtBQ0VwQjtBRE9JO0VBQ0ksbUJBQUE7QUNKUjtBREtRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0haO0FETUk7RUFDSSxhQUFBO0FDSlI7QURNSTtFQUNJLFVBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtBQ0haO0FETUk7RUFDSSw2QkFBQTtBQ0pSO0FES1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0haO0FESVk7RUFDSSxjQUFBO0FDRmhCO0FES1E7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRElZO0VBQ0ksa0JBQUE7QUNGaEI7QURHZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRHBCO0FER2dCO0VBQ0ksY0FBQTtBQ0RwQjtBRFFBO0VBQ0ksVUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQm90dG9tIEhlYWRlclxuLnNjcm9sbC1uYXYtd3JhcHtcbiAgICB6LWluZGV4OiA1O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQ6ICMyRDJEMzI7XG4gICAgXG4gICAgLnNjcm9sbC1uYXZ7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAyM3B4IDQwcHggMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMkEyQTJFO1xuICAgICAgICBtYXJnaW46IDAgMCAwIDgwcHg7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDI1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA2MjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOTEpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojRkFDOTIxO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gbW9iaWxlIG1lbnVcbi5tb2JpbGUtbWVudXtcbiAgICAubmF2YmFye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMkMyRDMyO1xuICAgICAgICAuaWNvbi1sb2dvLCAuaWNvbi1tZW51e1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNGQUM5MjE7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdmJhci10b2dnbGVyOmZvY3VzLCAubmF2YmFyLXRvZ2dsZXI6YWN0aXZle1xuICAgICAgICBvdXRsaW5lOiBub25lXG4gICAgfVxuICAgIC5uYXZiYXItYnJhbmR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdmJhci1uYXZ7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmFjYTQ3O1xuICAgICAgICBhe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNGQUM5MjE7XG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZhY2E0NztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc29jaWFse1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmYWNhNDc7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgMCAwO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYWNhNDc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG4ubW9kYWwtYmFja2Ryb3Auc2hvd3tcbiAgICB6LWluZGV4OiAxO1xufSIsIi5zY3JvbGwtbmF2LXdyYXAge1xuICB6LWluZGV4OiA1O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjMkQyRDMyO1xufVxuLnNjcm9sbC1uYXYtd3JhcCAuc2Nyb2xsLW5hdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAyM3B4IDQwcHggMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEpO1xuICBiYWNrZ3JvdW5kOiAjMkEyQTJFO1xuICBtYXJnaW46IDAgMCAwIDgwcHg7XG59XG4uc2Nyb2xsLW5hdi13cmFwIC5zY3JvbGwtbmF2IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zY3JvbGwtbmF2LXdyYXAgLnNjcm9sbC1uYXYgbGkgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxM3B4IDI1cHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNjcm9sbC1uYXYtd3JhcCAuc2Nyb2xsLW5hdiBsaSBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDYyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBjb2xvcjogI2ZmZjtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnNjcm9sbC1uYXYtd3JhcCAuc2Nyb2xsLW5hdiBsaSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5MSk7XG4gIHotaW5kZXg6IDE7XG59XG4uc2Nyb2xsLW5hdi13cmFwIC5zY3JvbGwtbmF2IGxpIGE6aG92ZXIsIC5zY3JvbGwtbmF2LXdyYXAgLnNjcm9sbC1uYXYgbGkgYTpmb2N1cywgLnNjcm9sbC1uYXYtd3JhcCAuc2Nyb2xsLW5hdiBsaSBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkFDOTIxO1xufVxuXG4ubW9iaWxlLW1lbnUgLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6ICMyQzJEMzI7XG59XG4ubW9iaWxlLW1lbnUgLm5hdmJhciAuaWNvbi1sb2dvLCAubW9iaWxlLW1lbnUgLm5hdmJhciAuaWNvbi1tZW51IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI0ZBQzkyMTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubW9iaWxlLW1lbnUgLm5hdmJhci10b2dnbGVyOmZvY3VzLCAubW9iaWxlLW1lbnUgLm5hdmJhci10b2dnbGVyOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubW9iaWxlLW1lbnUgLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubW9iaWxlLW1lbnUgLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogMzBweDtcbn1cbi5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmFjYTQ3O1xufVxuLm1vYmlsZS1tZW51IC5uYXZiYXItbmF2IGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkFDOTIxO1xufVxuLm1vYmlsZS1tZW51IC5uYXZiYXItbmF2IGE6aG92ZXIsIC5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiBhOmZvY3VzLCAubW9iaWxlLW1lbnUgLm5hdmJhci1uYXYgYTphY3RpdmUge1xuICBjb2xvcjogI2ZhY2E0Nztcbn1cbi5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiAuc29jaWFsIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmYWNhNDc7XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XG4gIG1hcmdpbjogMjVweCAwIDAgMDtcbn1cbi5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiAuc29jaWFsIGEge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubW9iaWxlLW1lbnUgLm5hdmJhci1uYXYgLnNvY2lhbCBhIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbn1cbi5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiAuc29jaWFsIGE6aG92ZXIsIC5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiAuc29jaWFsIGE6Zm9jdXMsIC5tb2JpbGUtbWVudSAubmF2YmFyLW5hdiAuc29jaWFsIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmYWNhNDc7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgei1pbmRleDogMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var typeit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! typeit */
    "./node_modules/typeit/dist/typeit.es.min.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          new typeit__WEBPACK_IMPORTED_MODULE_1__["default"]("#element", {
            strings: ["UX Tools", "Adobe Photoshop, Adobe Illustrator, Adobe XD, Invision, Figma", "UI Development Technologies", "HTML/HTML5, CSS/CSS3/SCSS, JavaScript/Jquery, Angular, GIT"],
            speed: 50,
            waitUntilVisible: true,
            delay: 0,
            loop: false
          }).go(); //     // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
          // var i = 0,
          // a = 0,
          // isBackspacing = false,
          // isParagraph = false;
          // // Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
          // var textArray = [
          // "Who I Am?| UX & UI Developer", 
          // "Which Skills I Have?| Persona, User Research, Sketching, Wireframing, Prototyping, Coding",
          // "Which UX Tools I use?| Adobe XD, Figma, Invision, Adobe Photoshop, Adobe Illustrator",
          // "Which coding technologies I worked on?| HTML/HTML5, CSS/CSS3/SCSS, Javascript/Jquery, Angular, Ionic (Hybrid App Development) ",
          // ];
          // // Speed (in milliseconds) of typing.
          // var speedForward = 100, //Typing Speed
          // speedWait = 2000, // Wait between typing and backspacing
          // speedBetweenLines = 1000, //Wait between first and second lines
          // speedBackspace = 25; //Backspace Speed
          // //Run the loop
          // typeWriter("output", textArray);
          // function typeWriter(id, ar) {
          // var element = $("#" + id),
          //   aString = ar[a],
          //   eHeader = element.children("h1"), //Header element
          //   eParagraph = element.children("p"); //Subheader element
          // // Determine if animation should be typing or backspacing
          // if (!isBackspacing) {
          // // If full string hasn't yet been typed out, continue typing
          // if (i < aString.length) {
          //   // If character about to be typed is a pipe, switch to second line and continue.
          //   if (aString.charAt(i) == "|") {
          //     isParagraph = true;
          //     eHeader.removeClass("cursor");
          //     eParagraph.addClass("cursor");
          //     i++;
          //     setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
          //   // If character isn't a pipe, continue typing.
          //   } else {
          //     // Type header or subheader depending on whether pipe has been detected
          //     if (!isParagraph) {
          //       eHeader.text(eHeader.text() + aString.charAt(i));
          //     } else {
          //       eParagraph.text(eParagraph.text() + aString.charAt(i));
          //     }
          //     i++;
          //     setTimeout(function(){ typeWriter(id, ar); }, speedForward);
          //   }
          // // If full string has been typed, switch to backspace mode.
          // } else if (i == aString.length) {
          //   isBackspacing = true;
          //   setTimeout(function(){ typeWriter(id, ar); }, speedWait);
          // }
          // // If backspacing is enabled
          // } else {
          // // If either the header or the paragraph still has text, continue backspacing
          // if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
          //   // If paragraph still has text, continue erasing, otherwise switch to the header.
          //   if (eParagraph.text().length > 0) {
          //     eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
          //   } else if (eHeader.text().length > 0) {
          //     eParagraph.removeClass("cursor");
          //     eHeader.addClass("cursor");
          //     eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
          //   }
          //   setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
          // // If neither head or paragraph still has text, switch to next quote in array and start typing.
          // } else { 
          //   isBackspacing = false;
          //   i = 0;
          //   isParagraph = false;
          //   a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
          //   setTimeout(function(){ typeWriter(id, ar); }, 50);
          // }
          // }
          // }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 15,
      vars: 0,
      consts: [[1, "float-left", "w-100", "shape-wrapper"], [1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "myphoto"], ["src", "./assets/images/myphoto.jpg"], [1, "mb-4", "float-left", "w-100"], [1, "mb-4", "float-left", "w-100", "mb-2"], [1, "float-left", "w-100", "text-center"], ["href", "./assets/documents/PankajPede_Resume.pdf", "download", "", 1, "mb-4", "btn", "btn-primary"], [1, "float-left", "w-100", "text-center", "mb-5", "btn-case-study"], ["routerLink", "/casestudy", 1, "text-primary"], ["id", "element", 1, "text-secondary"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello There,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I'M PANKAJ PEDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View Case study");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".section-home[_ngcontent-%COMP%] {\n  background-image: url('nill.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.myphoto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 100%;\n  margin-bottom: 40px;\n  border: 5px solid #f9ca47;\n}\n\n\n\n.cursor[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  margin-left: 3px;\n  background-color: white;\n  -webkit-animation-name: blink;\n          animation-name: blink;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\nh1.cursor[_ngcontent-%COMP%]::after {\n  height: 24px;\n  width: 13px;\n}\n\np.cursor[_ngcontent-%COMP%]::after {\n  height: 13px;\n  width: 6px;\n}\n\n.btn-case-study[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-size: 16px;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  49% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  49% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.text-secondary[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0UsbUJBQUE7O0FBRUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNHSjs7QURBSTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ0dOOztBREFFO0VBQ0U7SUFDRSxVQUFBO0VDR0o7RURERTtJQUNFLFVBQUE7RUNHSjtFRERFO0lBQ0UsVUFBQTtFQ0dKO0VEREU7SUFDRSxVQUFBO0VDR0o7QUFDRjs7QURmRTtFQUNFO0lBQ0UsVUFBQTtFQ0dKO0VEREU7SUFDRSxVQUFBO0VDR0o7RURERTtJQUNFLFVBQUE7RUNHSjtFRERFO0lBQ0UsVUFBQTtFQ0dKO0FBQ0Y7O0FEREU7RUFDRSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1ob21lIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmlsbC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubXlwaG90byBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmOWNhNDc7XG59XG4gIFxuICAvKiBDdXJzb3IgU3R5bGluZyAqL1xuICBcbiAgLmN1cnNvcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6Jyc7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6Ymxpbms7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuNXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH1cbiAgaDEuY3Vyc29yOjphZnRlciB7XG4gICAgaGVpZ2h0OjI0cHg7XG4gICAgd2lkdGg6MTNweDtcbiAgfVxuICBwLmN1cnNvcjo6YWZ0ZXIge1xuICAgIGhlaWdodDoxM3B4O1xuICAgIHdpZHRoOjZweDtcbiAgfVxuICAuYnRuLWNhc2Utc3R1ZHl7XG4gICAgYXtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICAgIDQ5JSB7XG4gICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgfVxuICAudGV4dC1zZWNvbmRhcnl7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9IiwiLnNlY3Rpb24taG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbmlsbC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5teXBob3RvIGltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2Y5Y2E0Nztcbn1cblxuLyogQ3Vyc29yIFN0eWxpbmcgKi9cbi5jdXJzb3I6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5oMS5jdXJzb3I6OmFmdGVyIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTNweDtcbn1cblxucC5jdXJzb3I6OmFmdGVyIHtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogNnB4O1xufVxuXG4uYnRuLWNhc2Utc3R1ZHkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA0OSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi50ZXh0LXNlY29uZGFyeSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/icon-sets/icon-sets.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/icon-sets/icon-sets.component.ts ***!
    \**************************************************/

  /*! exports provided: IconSetsComponent */

  /***/
  function srcAppIconSetsIconSetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconSetsComponent", function () {
      return IconSetsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IconSetsComponent =
    /*#__PURE__*/
    function () {
      function IconSetsComponent() {
        _classCallCheck(this, IconSetsComponent);
      }

      _createClass(IconSetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconSetsComponent;
    }();

    IconSetsComponent.ɵfac = function IconSetsComponent_Factory(t) {
      return new (t || IconSetsComponent)();
    };

    IconSetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconSetsComponent,
      selectors: [["app-icon-sets"]],
      decls: 150,
      vars: 0,
      consts: [[1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "title"], [1, "feature"], [1, "row", "col-right", "sec-pad", "animated", "fadeInUp", "project-wrapper", "mb-5", "pb-5"], [1, "col-12", "col-md-4", "mb-4"], [1, "project-item"], [1, "heading"], ["href", "./assets/icon-sets/remixicon/RemixIcon-master.zip", "download", "", 1, "float-right"], [1, "icon-download"], [1, "info"], ["href", "https://remixicon.com/", "target", "_blank"], ["href", "./assets/icon-sets/unicon/unicon.zip", "download", "", 1, "float-right"], ["href", "https://iconscout.com/unicons?ref=vue-unicons", "target", "_blank"], ["href", "./assets//icon-sets/material/material-design-iconic-font-master.zip", "download", "", 1, "float-right"], ["href", "https://zavoloklom.github.io/material-design-iconic-font/index.html", "target", "_blank"], ["href", "./assets/icon-sets/evaicon/eva-icons.zip", "download", "", 1, "float-right"], ["href", "https://akveo.github.io/eva-icons/#/", "target", "_blank"], ["href", "./assets/icon-sets/Fontisto/Fontisto.zip", "download", "", 1, "float-right"], ["href", "https://fontisto.com/", "target", "_blank"], ["href", "./assets/icon-sets/simpleicons/simple-icons-develop.zip", "download", "", 1, "float-right"], ["href", "https://simpleicons.org/", "target", "_blank"], ["href", "./assets/icon-sets/paymentfont/PaymentFont.zip", "download", "", 1, "float-right"], [1, "pf", "pf-stripe"], ["href", "https://paymentfont.com/", "target", "_blank"], ["href", "./assets/icon-sets/coreUI/coreui-icons-master.zip", "download", "", 1, "float-right"], ["href", "https://coreui.io/icons/", "target", "_blank"], ["href", "./assets/icon-sets/line-awesome/line-awesome.zip", "download", "", 1, "float-right"], ["href", "https://icons8.com/line-awesome", "target", "_blank"]],
      template: function IconSetsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Icon Sets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Remix Icon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remix Icon is a set of open-source neutral-style system symbols elaborately crafted for designers and developers. All of the icons are free for both personal and commercial use.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remix Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Unicons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Carefully crafted icons on 24px grid with 1px stroke available as SVG icons as well as icon-font in line style.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "unicons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Material Icons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Material Design Iconic Font is a full suite of official material design icons (created and maintained by Google), with additional community-designed icons and brands icons for easy scalable vector graphics on websites or desktop.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Material Design Iconic Font");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Eva Icon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Eva Icons is a pack of more than 480 beautifully crafted Open Source icons for common actions and items. Download our set on the desktop to use them in your digital products for Web, iOS and Android. Compatible with Eva Design System.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Eva Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Fontisto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Fontisto gives you scalable vector icons that can instantly be customized: size, color, drop shadow and anything that can be done with the power of CSS. For designers and developers. There are many ways to use symbols. On your website or at your favorite frames (photoshop, illustrator, xd, sketchapp, zeplin, invision studio, framer ...)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Fontisto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Simple Icon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Over 1000 Free SVG icons for popular brands. See them all on one page at SimpleIcons.org. Contributions, corrections & requests can be made on GitHub. Started by Dan Leech.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Simple Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " PaymentFont Icon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Copy or upload the folders /css and /font, include paymentfont.min.css and enjoy! Install via bower install paymentfont or npm install paymentfont. Example: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " results in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "PaymentFont");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Core UI Icons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Premium designed free icon set with marks in SVG, Webfont and raster formats. CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Core UI Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Line-awesome ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Set a link to icons8.com on all pages where you use our content. If you use it on most pages, a link in your footer is fine. macOS and Windows applications should have the link to https://icons8.com in the About dialog.Also, please credit our work in your App Store or Google Play description (something like \"Icons by Icons8\" is fine).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "References");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Line-awesome Icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".project-item[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-bottom: 4px solid #ddd;\n  padding: 15px;\n  min-height: 275px;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 15px;\n  padding-bottom: 8px;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #f9ca47;\n  padding: 8px 6px;\n  color: #fff;\n  border-radius: 100%;\n  font-weight: 700;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.project-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.project-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL2ljb24tc2V0cy9pY29uLXNldHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ljb24tc2V0cy9pY29uLXNldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDREo7QURFSTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaO0FEQVk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxxQkFBQTtBQ0dwQjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2ljb24tc2V0cy9pY29uLXNldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnByb2plY3QtaXRlbXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWluLWhlaWdodDogMjc1cHg7XG4gICAgLmhlYWRpbmcge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2E0NztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnByb2plY3QtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAyNzVweDtcbn1cbi5wcm9qZWN0LWl0ZW0gLmhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5wcm9qZWN0LWl0ZW0gLmhlYWRpbmcgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9qZWN0LWl0ZW0gLmhlYWRpbmcgaDQgaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWNhNDc7XG4gIHBhZGRpbmc6IDhweCA2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2plY3QtaXRlbSAuaGVhZGluZyBoNCBpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb2plY3QtaXRlbSB1bCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5wcm9qZWN0LWl0ZW0gdWwgbGkge1xuICBsaXN0LXN0eWxlOiBkaXNjO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconSetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-icon-sets',
          templateUrl: './icon-sets.component.html',
          styleUrls: ['./icon-sets.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 28,
      vars: 0,
      consts: [[1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "title"], [1, "feature"], [1, "row", "col-right", "sec-pad", "animated", "fadeInUp", "project-wrapper"], [1, "col-12", "col-md-4"], [1, "project-item"], [1, "heading"], [1, "info"], ["routerLink", "/icon-sets", 1, "btn", "btn-primary"], ["routerLink", "/prototyping-tool", 1, "btn", "btn-primary"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Icon Sets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I am trying to create a open cource library of icon sets where we can have set icons which we can use directly in our project. In this set we just need to link css and thats it we can use icons by there names");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UX Designing Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Now a days there are plenty of prototyping tools in market but most of them are inspired or started from pencil tool. Which is github open source community project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "So made few changes and created own prototyping tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".project-item[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-bottom: 4px solid #ddd;\n  padding: 15px;\n  cursor: pointer;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 7px;\n}\n.project-item[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWl0ZW17XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgICAgfVxuICAgIH1cbn0iLCIucHJvamVjdC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LWl0ZW0gLmhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLnByb2plY3QtaXRlbSAuaGVhZGluZyBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/prototyping-tool/prototyping-tool.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/prototyping-tool/prototyping-tool.component.ts ***!
    \****************************************************************/

  /*! exports provided: PrototypingToolComponent */

  /***/
  function srcAppPrototypingToolPrototypingToolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrototypingToolComponent", function () {
      return PrototypingToolComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrototypingToolComponent =
    /*#__PURE__*/
    function () {
      function PrototypingToolComponent() {
        _classCallCheck(this, PrototypingToolComponent);
      }

      _createClass(PrototypingToolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrototypingToolComponent;
    }();

    PrototypingToolComponent.ɵfac = function PrototypingToolComponent_Factory(t) {
      return new (t || PrototypingToolComponent)();
    };

    PrototypingToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrototypingToolComponent,
      selectors: [["app-prototyping-tool"]],
      decls: 76,
      vars: 0,
      consts: [[1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "title"], [1, "feature"], [1, "breadcrum"], [1, "current"], ["routerLink", "/projects"], [1, "row"], [1, "col-12", "text-left", "home-text", "mb-5", "text-center", "animated", "fadeInRight"], [1, "col-12", "col-right", "sec-pad", "animated", "bounceInUp", "mt-5"], [1, "row-experience"], [1, "ex-icon", "float-left"], [1, "icon-webdesign"], [1, "ex-content", "text-left", "float-left"], [1, "icon-logo"], [1, "icon-graphcisdesigning"], [1, "icon-download"], [1, "icon-share"], [1, "icon-menu"]],
      template: function PrototypingToolComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " UX Designing Tool ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UX Designing Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "An open-source GUI prototyping tool that's available for ALL platforms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pencil is built for the purpose of providing a free and open-source GUI prototyping tool that people can easily install and use to create mockups in popular desktop platforms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Easy GUI Prototyping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pencil provides various built-in shapes collection for drawing different types of user interface ranging from desktop to mobile platforms. Starting from 2.0.2, Pencil is shipped with Android and iOS UI stencils pre-installed. This makes it even easier to start protyping apps with a simple installation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Popular drawing features are also implemented in Pencil to simplify the drawing operations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Built-in Shape Collections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Starting from 2.0.2 Pencil has even more shape collections included by default. The list of built-in collections now includes general-purpose shapes, flowchart elements, desktop/web UI shapes, Android and iOS GUI shapes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "There are also many other collections created by the community and are distributed freely on the Internet. You can easily grab a collection and install it into Pencil with a simple drag-and-drop operation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Diagram Drawing Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pencil now supports connectors which can be used to \"wire\" shapes together in a diagram. A collection of flowchart shapes are also available for drawing diagrams.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Diagram Drawing Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pencil supports outputing the drawing document into different types of formats. You can have your drawing exported as a set of rasterized PNG files or as a web page that can be delivered to the viewers. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pencil also supports exporting documents into popular formats including OpenOffice/LibreOffice text documents, Inkscape SVG and Adobe PDF.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Easily Find Cliparts from the Internet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Pencil has a clipart browser tool that integrates with OpenClipart.org to let users easily find cliparts by keywords and added them into the drawing by a simple drag-and-drop operation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Clipart listed by the tool are in vector format and hence good for users in scaling to appropriate sizes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Inter-page linking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Elements in a drawing can be linked to a specific page in the same document. This helps user define the UI flow when creating application or website mockups.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Linkings defined in a document are converted into HTML hyper-links when the document is exported into web format. This process creates an interactive version of the mockup in which viewers can see a simulated flow when clicking on the UI elements.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".ex-icon[_ngcontent-%COMP%] {\n  width: 110px;\n  position: relative;\n}\n.ex-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: #000;\n  position: relative;\n}\n.ex-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  width: 100px;\n  height: 46px;\n  margin: -23px 0 0 -50px;\n  opacity: 0.2;\n  background: url('clouds.png') no-repeat center;\n  z-index: -1;\n}\n.ex-content[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n  margin-bottom: 30px;\n}\n.ex-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.ex-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 15px 0;\n  color: #a2a1a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL3Byb3RvdHlwaW5nLXRvb2wvcHJvdG90eXBpbmctdG9vbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvdG90eXBpbmctdG9vbC9wcm90b3R5cGluZy10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtBQ0daO0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDUTtFQUNJLE9BQUE7QUNDWjtBREVJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wcm90b3R5cGluZy10b29sL3Byb3RvdHlwaW5nLXRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXgtaWNvbntcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBtYXJnaW46IC0yM3B4IDAgMCAtNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvdWRzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbi5leC1jb250ZW50e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAudGl0bGV7XG4gICAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xuICAgICAgICBjb2xvcjogI2EyYTFhMTtcbiAgICB9XG59XG4iLCIuZXgtaWNvbiB7XG4gIHdpZHRoOiAxMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leC1pY29uIGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbjogLTIzcHggMCAwIC01MHB4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvdWRzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmV4LWNvbnRlbnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmV4LWNvbnRlbnQgLnRpdGxlOjpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuLmV4LWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMTVweCAwIDE1cHggMDtcbiAgY29sb3I6ICNhMmExYTE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrototypingToolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prototyping-tool',
          templateUrl: './prototyping-tool.component.html',
          styleUrls: ['./prototyping-tool.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 24,
      vars: 0,
      consts: [[1, "container-fluid", "p-0", "desktop-menu"], [1, "main-header"], ["href", "#", 1, "logo-holder"], ["src", "./assets/images/myphoto.jpg"], [1, "header-social"], ["href", "https://www.facebook.com/pankaj.pede.3", "target", "_blank"], [1, "icon-facebook"], ["href", "https://www.instagram.com/pankajpede3/", "target", "_blank"], [1, "icon-instagram"], ["href", "https://in.linkedin.com/in/pankaj-pede-aa6b113b", "target", "_blank"], [1, "icon-linkedin"], ["href", "#", "target", "_blank"], [1, "icon-pinterest"], [1, "show-share", "showshare"], ["href", "./assets/documents/PankajPede_Resume.pdf", "download", "", 1, "text-center", "w-100", "float-left"], [1, "icon-download"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Download Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 80px;\n  height: 100%;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0);\n}\n.main-header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #2C2D32;\n}\n.main-header[_ngcontent-%COMP%]   .logo-holder[_ngcontent-%COMP%] {\n  float: left;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n}\n.main-header[_ngcontent-%COMP%]   .logo-holder[_ngcontent-%COMP%]   .icon-logo[_ngcontent-%COMP%] {\n  color: #FAC921;\n  font-size: 50px;\n  position: absolute;\n  top: 10px;\n  left: 14px;\n}\n.main-header[_ngcontent-%COMP%]   .logo-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  float: left;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  border-radius: 100%;\n  border: 2px solid #faca47;\n}\n.main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 130px;\n  width: 100%;\n  left: 0;\n}\n.main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: -70px;\n  width: 1px;\n  height: 50px;\n  left: 50%;\n  background: rgba(255, 255, 255, 0.08);\n}\n.main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  margin-bottom: 16px;\n  text-align: center;\n}\n.main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  color: #cccccc;\n  font-size: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .main-header[_ngcontent-%COMP%]   .header-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  border-radius: 100%;\n  color: #fff;\n  outline: none;\n  text-decoration: none;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 80px;\n  height: 80px;\n  z-index: 100;\n  color: #fff;\n  font-size: 22px;\n  line-height: 80px;\n  background: #FAC921;\n  cursor: pointer;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 30px;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  outline: none;\n  color: #fff;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(250, 250, 250, 0.4)));\n  font-weight: bold;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n  text-decoration: none;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 50px;\n  line-height: 50px;\n  left: 0;\n  top: -50px;\n  padding: 0 30px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  min-width: 200px;\n  background: #000000;\n  margin-top: -20px;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n  color: #ffffff;\n}\n.main-header[_ngcontent-%COMP%]   .show-share[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  margin-top: 0;\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNBSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURBUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VaO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0VaO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7QUNFWjtBREFRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FDR2hCO0FERmdCO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDSXBCO0FERUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RSO0FERVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0FaO0FEQ1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NoQjtBRENZO0VBQ0ksNkpBQUE7RUFDQSxpQkFBQTtBQ0NoQjtBRENZO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDQ2hCO0FERVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUNBWjtBREVRO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVza3RvcCBMZWZ0IE1lbnVzIEhlYWRlclxuLm1haW4taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzJDMkQzMjtcbiAgICB9XG4gICAgLmxvZ28taG9sZGVyIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAuaWNvbi1sb2dve1xuICAgICAgICAgICAgY29sb3I6ICNGQUM5MjE7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmFjYTQ3O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXItc29jaWFsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTcwcHg7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cywgJjphY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2hvdy1zaGFyZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjM0MzQzNDO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFDOTIxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZle1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwcHggLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNTAlLCB0cmFuc3BhcmVudCksIHRvKHJnYmEoMjUwLCAyNTAsIDI1MCwgMC40KSkpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1c3tcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogLTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW4taGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLm1haW4taGVhZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMkMyRDMyO1xufVxuLm1haW4taGVhZGVyIC5sb2dvLWhvbGRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbn1cbi5tYWluLWhlYWRlciAubG9nby1ob2xkZXIgLmljb24tbG9nbyB7XG4gIGNvbG9yOiAjRkFDOTIxO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNHB4O1xufVxuLm1haW4taGVhZGVyIC5sb2dvLWhvbGRlciBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmYWNhNDc7XG59XG4ubWFpbi1oZWFkZXIgLmhlYWRlci1zb2NpYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuLm1haW4taGVhZGVyIC5oZWFkZXItc29jaWFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG59XG4ubWFpbi1oZWFkZXIgLmhlYWRlci1zb2NpYWwgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWhlYWRlciAuaGVhZGVyLXNvY2lhbCB1bCBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xufVxuLm1haW4taGVhZGVyIC5oZWFkZXItc29jaWFsIHVsIGxpIGE6aG92ZXIsIC5tYWluLWhlYWRlciAuaGVhZGVyLXNvY2lhbCB1bCBsaSBhOmZvY3VzLCAubWFpbi1oZWFkZXIgLmhlYWRlci1zb2NpYWwgdWwgbGkgYTphY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1haW4taGVhZGVyIC5zaG93LXNoYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNGQUM5MjE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWhlYWRlciAuc2hvdy1zaGFyZSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5tYWluLWhlYWRlciAuc2hvdy1zaGFyZSBhOmhvdmVyLCAubWFpbi1oZWFkZXIgLnNob3ctc2hhcmUgYTpmb2N1cywgLm1haW4taGVhZGVyIC5zaG93LXNoYXJlIGE6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFpbi1oZWFkZXIgLnNob3ctc2hhcmUgYSBpIHtcbiAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgMHB4IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDUwJSwgdHJhbnNwYXJlbnQpLCB0byhyZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNCkpKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1oZWFkZXIgLnNob3ctc2hhcmUgYTpob3ZlciwgLm1haW4taGVhZGVyIC5zaG93LXNoYXJlIGE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbi1oZWFkZXIgLnNob3ctc2hhcmUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtNTBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubWFpbi1oZWFkZXIgLnNob3ctc2hhcmU6aG92ZXIgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 129,
      vars: 0,
      consts: [[1, "text-center", "animated", "bounceInDown", "css-typing"], [1, "row", "animated", "bounceInDown"], [1, "col-12"], [1, "fl-wrap", "mar-bottom", "skill-wrap"], [1, "pr-title", "fl-wrap", "full-width", "pr-title-none"], [1, "name-t", "full-width", "text-center"], [1, "row"], [1, "col-md-3", "col-sm-6", "animated", "bounceInLeft", "mb-4"], [1, "progress", "yellow"], [1, "progress-left"], [1, "progress-bar"], [1, "progress-right"], [1, "progress-value"], [1, "w-100", "text-center", "float-left"], [1, "col-md-3", "col-sm-6", "animated", "bounceInRight", "mb-4"], [1, "row", "skilss-bottom"], [1, "col-md-3", "col-sm-6", "animated", "bounceInLeft"], [1, "col-md-3", "col-sm-6", "animated", "bounceInRight"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UX Designing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "90%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Wireframing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "70%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Invision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "85%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Figma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "80%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Adobe XD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "85%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Photoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "80%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Illustrator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Graphics Designing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "90%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Wireframing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "70%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Invision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "85%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Photoshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "80%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Illustrator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".skill-text[_ngcontent-%COMP%], .skill-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.progress[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  background: none;\n  margin: 0 auto;\n  box-shadow: none;\n  position: relative;\n}\n\n.progress[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 12px solid #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.progress[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: none;\n  border-width: 12px;\n  border-style: solid;\n  position: absolute;\n  top: 0;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  left: 100%;\n  border-top-right-radius: 80px;\n  border-bottom-right-radius: 80px;\n  border-left: 0;\n  -webkit-transform-origin: center left;\n  transform-origin: center left;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  left: -100%;\n  border-top-left-radius: 80px;\n  border-bottom-left-radius: 80px;\n  border-right: 0;\n  -webkit-transform-origin: center right;\n  transform-origin: center right;\n  -webkit-animation: loading-1 1.8s linear forwards;\n          animation: loading-1 1.8s linear forwards;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n  background: #44484b;\n  font-size: 24px;\n  color: #fff;\n  line-height: 135px;\n  text-align: center;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 1;\n  padding-top: 50px;\n}\n\n.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 20px;\n}\n\n.progress.blue[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-color: #049dff;\n}\n\n.progress.blue[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  -webkit-animation: loading-2 1.5s linear forwards 1.8s;\n          animation: loading-2 1.5s linear forwards 1.8s;\n}\n\n.progress.yellow[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-color: #fdba04;\n}\n\n.progress.yellow[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  -webkit-animation: loading-3 1s linear forwards 1.8s;\n          animation: loading-3 1s linear forwards 1.8s;\n}\n\n.progress.pink[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-color: #ed687c;\n}\n\n.progress.pink[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  -webkit-animation: loading-4 0.4s linear forwards 1.8s;\n          animation: loading-4 0.4s linear forwards 1.8s;\n}\n\n.progress.green[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-color: #1abc9c;\n}\n\n.progress.green[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  -webkit-animation: loading-5 1.2s linear forwards 1.8s;\n          animation: loading-5 1.2s linear forwards 1.8s;\n}\n\n@-webkit-keyframes loading-1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n}\n\n@keyframes loading-1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n}\n\n@-webkit-keyframes loading-2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(144deg);\n    transform: rotate(144deg);\n  }\n}\n\n@keyframes loading-2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(144deg);\n    transform: rotate(144deg);\n  }\n}\n\n@-webkit-keyframes loading-3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n}\n\n@keyframes loading-3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n}\n\n@-webkit-keyframes loading-4 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(36deg);\n    transform: rotate(36deg);\n  }\n}\n\n@keyframes loading-4 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(36deg);\n    transform: rotate(36deg);\n  }\n}\n\n@-webkit-keyframes loading-5 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(126deg);\n    transform: rotate(126deg);\n  }\n}\n\n@keyframes loading-5 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(126deg);\n    transform: rotate(126deg);\n  }\n}\n\n@media only screen and (max-width: 990px) {\n  .progress[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n.skilss-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwZWRlL0RvY3VtZW50cy9Qcm9qZWN0L3BhbmthanBlZGUvQWJvdXRtZS9zcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDSUo7O0FERkE7RUFDSSxPQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ01KOztBREpBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtBQ09KOztBRExBO0VBQ0ksUUFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNTSjs7QURQQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURUSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNXUjs7QURSQTtFQUNJLHFCQUFBO0FDV0o7O0FEVEE7RUFDSSxzREFBQTtVQUFBLDhDQUFBO0FDWUo7O0FEVkE7RUFDSSxxQkFBQTtBQ2FKOztBRFhBO0VBQ0ksb0RBQUE7VUFBQSw0Q0FBQTtBQ2NKOztBRFpBO0VBQ0kscUJBQUE7QUNlSjs7QURiQTtFQUNJLHNEQUFBO1VBQUEsOENBQUE7QUNnQko7O0FEZEE7RUFDSSxxQkFBQTtBQ2lCSjs7QURmQTtFQUNJLHNEQUFBO1VBQUEsOENBQUE7QUNrQko7O0FEaEJBO0VBQ0k7SUFDSSwrQkFBQTtJQUNBLHVCQUFBO0VDbUJOO0VEakJFO0lBQ0ksaUNBQUE7SUFDQSx5QkFBQTtFQ21CTjtBQUNGOztBRDNCQTtFQUNJO0lBQ0ksK0JBQUE7SUFDQSx1QkFBQTtFQ21CTjtFRGpCRTtJQUNJLGlDQUFBO0lBQ0EseUJBQUE7RUNtQk47QUFDRjs7QURqQkE7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsdUJBQUE7RUNtQk47RURqQkU7SUFDSSxpQ0FBQTtJQUNBLHlCQUFBO0VDbUJOO0FBQ0Y7O0FEM0JBO0VBQ0k7SUFDSSwrQkFBQTtJQUNBLHVCQUFBO0VDbUJOO0VEakJFO0lBQ0ksaUNBQUE7SUFDQSx5QkFBQTtFQ21CTjtBQUNGOztBRGpCQTtFQUNJO0lBQ0ksK0JBQUE7SUFDQSx1QkFBQTtFQ21CTjtFRGpCRTtJQUNJLGdDQUFBO0lBQ0Esd0JBQUE7RUNtQk47QUFDRjs7QUQzQkE7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsdUJBQUE7RUNtQk47RURqQkU7SUFDSSxnQ0FBQTtJQUNBLHdCQUFBO0VDbUJOO0FBQ0Y7O0FEakJBO0VBQ0k7SUFDSSwrQkFBQTtJQUNBLHVCQUFBO0VDbUJOO0VEakJFO0lBQ0ksZ0NBQUE7SUFDQSx3QkFBQTtFQ21CTjtBQUNGOztBRDNCQTtFQUNJO0lBQ0ksK0JBQUE7SUFDQSx1QkFBQTtFQ21CTjtFRGpCRTtJQUNJLGdDQUFBO0lBQ0Esd0JBQUE7RUNtQk47QUFDRjs7QURqQkE7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsdUJBQUE7RUNtQk47RURqQkU7SUFDSSxpQ0FBQTtJQUNBLHlCQUFBO0VDbUJOO0FBQ0Y7O0FEM0JBO0VBQ0k7SUFDSSwrQkFBQTtJQUNBLHVCQUFBO0VDbUJOO0VEakJFO0lBQ0ksaUNBQUE7SUFDQSx5QkFBQTtFQ21CTjtBQUNGOztBRGpCQTtFQUNJO0lBQVcsbUJBQUE7RUNvQmI7QUFDRjs7QURuQkE7RUFDSSxxQkFBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtdGV4dCwgLnNraWxsLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvZ3Jlc3N7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZ3Jlc3M6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMTJweCBzb2xpZCAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cbi5wcm9ncmVzcyA+IHNwYW57XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnR7XG4gICAgbGVmdDogMDtcbn1cbi5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci13aWR0aDogMTJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcbiAgICBsZWZ0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG59XG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXJpZ2h0e1xuICAgIHJpZ2h0OiAwO1xufVxuLnByb2dyZXNzIC5wcm9ncmVzcy1yaWdodCAucHJvZ3Jlc3MtYmFye1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDgwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xuICAgIGFuaW1hdGlvbjogbG9hZGluZy0xIDEuOHMgbGluZWFyIGZvcndhcmRzO1xufVxuLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0ODRiO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMTM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxufVxuLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWJhcntcbiAgICBib3JkZXItY29sb3I6ICMwNDlkZmY7XG59XG4ucHJvZ3Jlc3MuYmx1ZSAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFye1xuICAgIGFuaW1hdGlvbjogbG9hZGluZy0yIDEuNXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XG59XG4ucHJvZ3Jlc3MueWVsbG93IC5wcm9ncmVzcy1iYXJ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmRiYTA0O1xufVxuLnByb2dyZXNzLnllbGxvdyAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFye1xuICAgIGFuaW1hdGlvbjogbG9hZGluZy0zIDFzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xufVxuLnByb2dyZXNzLnBpbmsgLnByb2dyZXNzLWJhcntcbiAgICBib3JkZXItY29sb3I6ICNlZDY4N2M7XG59XG4ucHJvZ3Jlc3MucGluayAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFye1xuICAgIGFuaW1hdGlvbjogbG9hZGluZy00IDAuNHMgbGluZWFyIGZvcndhcmRzIDEuOHM7XG59XG4ucHJvZ3Jlc3MuZ3JlZW4gLnByb2dyZXNzLWJhcntcbiAgICBib3JkZXItY29sb3I6ICMxYWJjOWM7XG59XG4ucHJvZ3Jlc3MuZ3JlZW4gLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcbiAgICBhbmltYXRpb246IGxvYWRpbmctNSAxLjJzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xufVxuQGtleWZyYW1lcyBsb2FkaW5nLTF7XG4gICAgMCV7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nLTJ7XG4gICAgMCV7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG4gICAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nLTN7XG4gICAgMCV7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZy00e1xuICAgIDAle1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctNXtcbiAgICAwJXtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KXtcbiAgICAucHJvZ3Jlc3N7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbn1cbi5za2lsc3MtYm90dG9te1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn0iLCIuc2tpbGwtdGV4dCwgLnNraWxsLXZhbHVlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2dyZXNzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDEycHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5wcm9ncmVzcyA+IHNwYW4ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci13aWR0aDogMTJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5wcm9ncmVzcyAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDgwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4O1xuICBib3JkZXItbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG59XG5cbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQge1xuICByaWdodDogMDtcbn1cblxuLnByb2dyZXNzIC5wcm9ncmVzcy1yaWdodCAucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogLTEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDgwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLTEgMS44cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWUge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNDQ0ODRiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXZhbHVlIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1jb2xvcjogIzA0OWRmZjtcbn1cblxuLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XG4gIGFuaW1hdGlvbjogbG9hZGluZy0yIDEuNXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XG59XG5cbi5wcm9ncmVzcy55ZWxsb3cgLnByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1jb2xvcjogI2ZkYmEwNDtcbn1cblxuLnByb2dyZXNzLnllbGxvdyAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLTMgMXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XG59XG5cbi5wcm9ncmVzcy5waW5rIC5wcm9ncmVzcy1iYXIge1xuICBib3JkZXItY29sb3I6ICNlZDY4N2M7XG59XG5cbi5wcm9ncmVzcy5waW5rIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXIge1xuICBhbmltYXRpb246IGxvYWRpbmctNCAwLjRzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xufVxuXG4ucHJvZ3Jlc3MuZ3JlZW4gLnByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1jb2xvcjogIzFhYmM5Yztcbn1cblxuLnByb2dyZXNzLmdyZWVuIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXIge1xuICBhbmltYXRpb246IGxvYWRpbmctNSAxLjJzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmctMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctMiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctMyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nLTQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZy01IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLnByb2dyZXNzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uc2tpbHNzLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/pankajpede/Documents/Project/pankajpede/Aboutme/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map