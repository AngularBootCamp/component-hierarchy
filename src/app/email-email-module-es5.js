function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"], {
  /***/
  "./src/app/email/email-container/email-container.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/email/email-container/email-container.component.ts ***!
    \********************************************************************/

  /*! exports provided: EmailContainerComponent */

  /***/
  function srcAppEmailEmailContainerEmailContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailContainerComponent", function () {
      return EmailContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _folder_list_folder_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../folder-list/folder-list.component */
    "./src/app/email/folder-list/folder-list.component.ts");
    /* harmony import */


    var _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../message-display/message-display.component */
    "./src/app/email/message-display/message-display.component.ts");

    var EmailContainerComponent = function EmailContainerComponent() {
      _classCallCheck(this, EmailContainerComponent);
    };

    EmailContainerComponent.ɵfac = function EmailContainerComponent_Factory(t) {
      return new (t || EmailContainerComponent)();
    };

    EmailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailContainerComponent,
      selectors: [["app-email"]],
      decls: 5,
      vars: 0,
      consts: [[1, "simple-card", "narrow-wide", "fit-component-marker"], [1, "component-marker"]],
      template: function EmailContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " EmailContainerComponent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "folder-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "message-display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_folder_list_folder_list_component__WEBPACK_IMPORTED_MODULE_1__["FolderListComponent"], _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_2__["MessageDisplayComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailContainerComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-email',
        templateUrl: './email-container.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/email/email.module.ts":
  /*!***************************************!*\
    !*** ./src/app/email/email.module.ts ***!
    \***************************************/

  /*! exports provided: EmailModule */

  /***/
  function srcAppEmailEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailModule", function () {
      return EmailModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _email_container_email_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email-container/email-container.component */
    "./src/app/email/email-container/email-container.component.ts");
    /* harmony import */


    var _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./folder-item/folder-item.component */
    "./src/app/email/folder-item/folder-item.component.ts");
    /* harmony import */


    var _folder_list_folder_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-list/folder-list.component */
    "./src/app/email/folder-list/folder-list.component.ts");
    /* harmony import */


    var _message_body_message_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./message-body/message-body.component */
    "./src/app/email/message-body/message-body.component.ts");
    /* harmony import */


    var _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./message-display/message-display.component */
    "./src/app/email/message-display/message-display.component.ts");
    /* harmony import */


    var _message_header_message_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./message-header/message-header.component */
    "./src/app/email/message-header/message-header.component.ts");

    var routes = [{
      path: '',
      component: _email_container_email_container_component__WEBPACK_IMPORTED_MODULE_3__["EmailContainerComponent"],
      pathMatch: 'full'
    }];

    var EmailModule = function EmailModule() {
      _classCallCheck(this, EmailModule);
    };

    EmailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmailModule
    });
    EmailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EmailModule_Factory(t) {
        return new (t || EmailModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailModule, {
      declarations: [_email_container_email_container_component__WEBPACK_IMPORTED_MODULE_3__["EmailContainerComponent"], _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_4__["FolderItemComponent"], _folder_list_folder_list_component__WEBPACK_IMPORTED_MODULE_5__["FolderListComponent"], _message_body_message_body_component__WEBPACK_IMPORTED_MODULE_6__["MessageBodyComponent"], _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_7__["MessageDisplayComponent"], _message_header_message_header_component__WEBPACK_IMPORTED_MODULE_8__["MessageHeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [_email_container_email_container_component__WEBPACK_IMPORTED_MODULE_3__["EmailContainerComponent"], _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_4__["FolderItemComponent"], _folder_list_folder_list_component__WEBPACK_IMPORTED_MODULE_5__["FolderListComponent"], _message_body_message_body_component__WEBPACK_IMPORTED_MODULE_6__["MessageBodyComponent"], _message_display_message_display_component__WEBPACK_IMPORTED_MODULE_7__["MessageDisplayComponent"], _message_header_message_header_component__WEBPACK_IMPORTED_MODULE_8__["MessageHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/email/folder-item/folder-item.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/email/folder-item/folder-item.component.ts ***!
    \************************************************************/

  /*! exports provided: FolderItemComponent */

  /***/
  function srcAppEmailFolderItemFolderItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderItemComponent", function () {
      return FolderItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FolderItemComponent = function FolderItemComponent() {
      _classCallCheck(this, FolderItemComponent);
    };

    FolderItemComponent.ɵfac = function FolderItemComponent_Factory(t) {
      return new (t || FolderItemComponent)();
    };

    FolderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FolderItemComponent,
      selectors: [["folder-item"]],
      decls: 2,
      vars: 0,
      template: function FolderItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Folder Name Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FolderItemComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'folder-item',
        templateUrl: './folder-item.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/email/folder-list/folder-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/email/folder-list/folder-list.component.ts ***!
    \************************************************************/

  /*! exports provided: FolderListComponent */

  /***/
  function srcAppEmailFolderListFolderListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderListComponent", function () {
      return FolderListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../folder-item/folder-item.component */
    "./src/app/email/folder-item/folder-item.component.ts");

    var FolderListComponent = function FolderListComponent() {
      _classCallCheck(this, FolderListComponent);
    };

    FolderListComponent.ɵfac = function FolderListComponent_Factory(t) {
      return new (t || FolderListComponent)();
    };

    FolderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FolderListComponent,
      selectors: [["folder-list"]],
      decls: 10,
      vars: 0,
      consts: [[1, "simple-card"], [1, "component-marker"]],
      template: function FolderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FolderListComponent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "folder-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_1__["FolderItemComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FolderListComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'folder-list',
        templateUrl: './folder-list.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/email/message-body/message-body.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/email/message-body/message-body.component.ts ***!
    \**************************************************************/

  /*! exports provided: MessageBodyComponent */

  /***/
  function srcAppEmailMessageBodyMessageBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageBodyComponent", function () {
      return MessageBodyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageBodyComponent = function MessageBodyComponent() {
      _classCallCheck(this, MessageBodyComponent);
    };

    MessageBodyComponent.ɵfac = function MessageBodyComponent_Factory(t) {
      return new (t || MessageBodyComponent)();
    };

    MessageBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageBodyComponent,
      selectors: [["message-body"]],
      decls: 10,
      vars: 0,
      consts: [[1, "simple-card"], [1, "component-marker"]],
      template: function MessageBodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MessageBodyComponent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hey Peter,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I noticed that Susan is up for review. Can you please pull her TPS reports and run them up to my office? Also, I am going on vacation next week so if you could water my plants for me that would be great. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Oh, and I'm going to need you to come in on Saturday. Mmmkay? Thanks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageBodyComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'message-body',
        templateUrl: './message-body.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/email/message-display/message-display.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/email/message-display/message-display.component.ts ***!
    \********************************************************************/

  /*! exports provided: MessageDisplayComponent */

  /***/
  function srcAppEmailMessageDisplayMessageDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDisplayComponent", function () {
      return MessageDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _message_header_message_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../message-header/message-header.component */
    "./src/app/email/message-header/message-header.component.ts");
    /* harmony import */


    var _message_body_message_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../message-body/message-body.component */
    "./src/app/email/message-body/message-body.component.ts");

    var MessageDisplayComponent = function MessageDisplayComponent() {
      _classCallCheck(this, MessageDisplayComponent);
    };

    MessageDisplayComponent.ɵfac = function MessageDisplayComponent_Factory(t) {
      return new (t || MessageDisplayComponent)();
    };

    MessageDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageDisplayComponent,
      selectors: [["message-display"]],
      decls: 5,
      vars: 0,
      consts: [[1, "simple-card"], [1, "component-marker"]],
      template: function MessageDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MessageDisplayComponent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "message-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "message-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_message_header_message_header_component__WEBPACK_IMPORTED_MODULE_1__["MessageHeaderComponent"], _message_body_message_body_component__WEBPACK_IMPORTED_MODULE_2__["MessageBodyComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageDisplayComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'message-display',
        templateUrl: './message-display.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/email/message-header/message-header.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/email/message-header/message-header.component.ts ***!
    \******************************************************************/

  /*! exports provided: MessageHeaderComponent */

  /***/
  function srcAppEmailMessageHeaderMessageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageHeaderComponent", function () {
      return MessageHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageHeaderComponent = function MessageHeaderComponent() {
      _classCallCheck(this, MessageHeaderComponent);
    };

    MessageHeaderComponent.ɵfac = function MessageHeaderComponent_Factory(t) {
      return new (t || MessageHeaderComponent)();
    };

    MessageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageHeaderComponent,
      selectors: [["message-header"]],
      decls: 9,
      vars: 0,
      consts: [[1, "simple-card", 2, "margin-top", "30px"], [1, "component-marker"]],
      template: function MessageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MessageHeaderComponent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FROM: Lumbergh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TO: Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DATE: Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageHeaderComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'message-header',
        templateUrl: './message-header.component.html'
      }]
    }], null, null);
    /***/

  }
}]); //# sourceMappingURL=email-email-module-es2015.js.map
//# sourceMappingURL=email-email-module-es5.js.map