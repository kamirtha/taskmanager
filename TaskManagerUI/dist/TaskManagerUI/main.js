(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/viewtask/viewtask.component */ "./src/app/ui/viewtask/viewtask.component.ts");
/* harmony import */ var _ui_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/addtask/addtask.component */ "./src/app/ui/addtask/addtask.component.ts");
/* harmony import */ var _ui_edittask_edittask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/edittask/edittask.component */ "./src/app/ui/edittask/edittask.component.ts");






var routes = [
    { path: '', redirectTo: '/viewtask', pathMatch: 'full' },
    { path: 'viewtask', component: _ui_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_3__["ViewtaskComponent"] },
    { path: 'addtask', component: _ui_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__["AddtaskComponent"] },
    { path: 'edittask/:id', component: _ui_edittask_edittask_component__WEBPACK_IMPORTED_MODULE_5__["EdittaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/addtask/addtask.component */ "./src/app/ui/addtask/addtask.component.ts");
/* harmony import */ var _ui_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/viewtask/viewtask.component */ "./src/app/ui/viewtask/viewtask.component.ts");
/* harmony import */ var _ui_edittask_edittask_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/edittask/edittask.component */ "./src/app/ui/edittask/edittask.component.ts");
/* harmony import */ var _pipe_task_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/task/filter.pipe */ "./src/app/pipe/task/filter.pipe.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _ui_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_8__["AddtaskComponent"],
                _ui_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_9__["ViewtaskComponent"],
                _ui_edittask_edittask_component__WEBPACK_IMPORTED_MODULE_10__["EdittaskComponent"],
                _ui_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialog"],
                _pipe_task_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            entryComponents: [
                _ui_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialog"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/task/task.module.ts":
/*!*******************************************!*\
  !*** ./src/app/model/task/task.module.ts ***!
  \*******************************************/
/*! exports provided: TaskModule, TaskSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSearchModule", function() { return TaskSearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], TaskModule);
    return TaskModule;
}());

var TaskSearchModule = /** @class */ (function () {
    function TaskSearchModule() {
    }
    return TaskSearchModule;
}());



/***/ }),

/***/ "./src/app/pipe/task/filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/task/filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (value == null)
            return null;
        var result = value.filter(function (task) {
            return ((args.TaskDescription == undefined || args.TaskDescription == "" || task.TaskDescription.toLowerCase().includes(args.TaskDescription))
                && (args.ParentTaskDescription == undefined || args.ParentTaskDescription == "" || task.ParentTaskDescription.toLowerCase().includes(args.ParentTaskDescription))
                && (args.PriorityFrom == undefined || args.PriorityFrom == "" || task.Priority >= parseInt(args.PriorityFrom))
                && (args.PriorityTo == undefined || args.PriorityTo == "" || task.Priority <= parseInt(args.PriorityTo))
                && (args.StartDate == undefined || task.StartDate >= args.StartDate)
                && (args.EndDate == undefined || task.EndDate <= args.EndDate));
        });
        return result;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/taskmanager.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/taskmanager.service.ts ***!
  \*************************************************/
/*! exports provided: TaskmanagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskmanagerService", function() { return TaskmanagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TaskmanagerService = /** @class */ (function () {
    function TaskmanagerService(http) {
        this.http = http;
        this.endpoint = "http://localhost:81/api/taskmanager";
    }
    // get all the tasks
    TaskmanagerService.prototype.getAllTasks = function () {
        return this.http.get(this.endpoint + '/getalltasks').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // get the task details by id
    TaskmanagerService.prototype.getTaskById = function (id) {
        return this.http.get(this.endpoint + '/gettaskbyid/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // get the tasks for parent task dropdown
    TaskmanagerService.prototype.getParentTasks = function (id) {
        return this.http.get(this.endpoint + '/getparenttasks/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // save the task (add, edit)
    TaskmanagerService.prototype.saveTask = function (task) {
        return this.http.post(this.endpoint + '/save', task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // complete the task for the given id
    TaskmanagerService.prototype.completeTask = function (id) {
        return this.http.post(this.endpoint + '/completetask', { "TaskId": id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // delete the task for the given id
    TaskmanagerService.prototype.deleteTask = function (id) {
        return this.http.delete(this.endpoint + '/deletetask/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TaskmanagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskmanagerService);
    return TaskmanagerService;
}());



/***/ }),

/***/ "./src/app/ui/addtask/addtask.component.css":
/*!**************************************************!*\
  !*** ./src/app/ui/addtask/addtask.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkZHRhc2svYWRkdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/addtask/addtask.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/addtask/addtask.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-3\">\n        <h5>Add Task</h5>\n\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n\n          <div class=\"form-group\">\n            <label for=\"taskDescription\" class=\"control-label\">Task Description</label>\n            <div [ngClass]=\"{ 'has-error': submitted && f.TaskDescription.errors }\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"TaskDescription\" maxlength=\"80\" />\n            </div>\n            <div *ngIf=\"submitted && f.TaskDescription.errors\" class=\"has-error\">\n              <span class=\"help-block\" *ngIf=\"f.TaskDescription.errors.required\">Task Description is required</span>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"parentTask\" class=\"control-label\">Parent Task</label>\n            <select class=\"select-option form-control\" formControlName=\"ParentTaskId\">\n              <option class=\"option\" value=\"\"></option>\n              <option class=\"option\" *ngFor=\"let ptask of ParentTasks\" [value]=\"ptask.TaskId\">{{ ptask.TaskDescription }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"priority\" class=\"control-label\">Priority</label>\n            <div>\n              <input type=\"range\" min=\"1\" max=\"30\" formControlName=\"Priority\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"startDate\" class=\"control-label\">Start Date</label>\n            <div [ngClass]=\"{ 'has-error': submitted && f.StartDate.errors }\">\n              <input type=\"date\" class=\"form-control\" formControlName=\"StartDate\" />\n            </div>\n            <div *ngIf=\"submitted && f.StartDate.errors\" class=\"has-error\">\n              <span class=\"help-block\" *ngIf=\"f.StartDate.errors.required\">Start Date is required</span>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"endDate\" class=\"control-label\">End Date</label>\n            <div [ngClass]=\"{ 'has-error': submitted && f.EndDate.errors }\">\n              <input type=\"date\" class=\"form-control\" formControlName=\"EndDate\" value=\"\" />\n            </div>\n            <div *ngIf=\"submitted && f.EndDate.errors\" class=\"has-error\">\n              <span class=\"help-block\" *ngIf=\"f.EndDate.errors.required\">End Date is required</span>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary\">Submit</button>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"submitted && !status\" >\n            <span class=\"has-error help-block\"> {{ error }} </span>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/addtask/addtask.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/addtask/addtask.component.ts ***!
  \*************************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/task/task.module */ "./src/app/model/task/task.module.ts");
/* harmony import */ var _services_taskmanager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/taskmanager.service */ "./src/app/services/taskmanager.service.ts");






var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(taskService, route) {
        this.taskService = taskService;
        this.route = route;
        this.submitted = false;
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Task = new src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_4__["TaskModule"]();
        // get the parent tasks
        this.taskService.getParentTasks(0).subscribe(function (result) { return _this.ParentTasks = result; });
        // new object
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            TaskDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ParentTaskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('10'),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    Object.defineProperty(AddtaskComponent.prototype, "f", {
        get: function () { return this.addForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddtaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.Task.TaskDescription = this.addForm.get('TaskDescription').value;
        this.Task.ParentTaskId = this.addForm.get('ParentTaskId').value;
        this.Task.Priority = this.addForm.get('Priority').value;
        this.Task.StartDate = this.addForm.get('StartDate').value;
        this.Task.EndDate = this.addForm.get('EndDate').value;
        this.taskService.saveTask(this.Task).subscribe(function (result) {
            if (result) {
                _this.route.navigate(['/viewtask']);
            }
            else {
                _this.error = "Error while saving the task";
            }
        });
        return;
    };
    AddtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/ui/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/ui/addtask/addtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_taskmanager_service__WEBPACK_IMPORTED_MODULE_5__["TaskmanagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/ui/edittask/edittask.component.css":
/*!****************************************************!*\
  !*** ./src/app/ui/edittask/edittask.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2VkaXR0YXNrL2VkaXR0YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/edittask/edittask.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/edittask/edittask.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 offset-3\">\n          <h5>Edit Task</h5>\n  \n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n  \n            <div class=\"form-group\">\n              <label for=\"taskDescription\" class=\"control-label\">Task Description</label>\n              <div [ngClass]=\"{ 'has-error': submitted && f.TaskDescription.errors }\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"TaskDescription\" maxlength=\"80\" />\n              </div>\n              <div *ngIf=\"submitted && f.TaskDescription.errors\" class=\"has-error\">\n                <span class=\"help-block\" *ngIf=\"f.TaskDescription.errors.required\">Task Description is required</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"parentTask\" class=\"control-label\">Parent Task</label>\n              <select class=\"select-option form-control\" formControlName=\"ParentTaskId\">\n                <option class=\"option\" value=\"\"></option>\n                <option class=\"option\" *ngFor=\"let ptask of ParentTasks\" [value]=\"ptask.TaskId\">{{ ptask.TaskDescription }}</option>\n              </select>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"priority\" class=\"control-label\">Priority</label>\n              <div>\n                <input type=\"range\" min=\"1\" max=\"30\" formControlName=\"Priority\" />\n              </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"startDate\" class=\"control-label\">Start Date</label>\n              <div [ngClass]=\"{ 'has-error': submitted && f.StartDate.errors }\">\n                <input type=\"date\" class=\"form-control\" formControlName=\"StartDate\" />\n              </div>\n              <div *ngIf=\"submitted && f.StartDate.errors\" class=\"has-error\">\n                <span class=\"help-block\" *ngIf=\"f.StartDate.errors.required\">Start Date is required</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"endDate\" class=\"control-label\">End Date</label>\n              <div [ngClass]=\"{ 'has-error': submitted && f.EndDate.errors }\">\n                <input type=\"date\" class=\"form-control\" formControlName=\"EndDate\" value=\"\" />\n              </div>\n              <div *ngIf=\"submitted && f.EndDate.errors\" class=\"has-error\">\n                <span class=\"help-block\" *ngIf=\"f.EndDate.errors.required\">End Date is required</span>\n              </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\">Submit</button>\n            </div>\n  \n            <div class=\"form-group\" *ngIf=\"submitted && !status\" >\n              <span class=\"has-error help-block\"> {{ error }} </span>\n            </div>\n  \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/ui/edittask/edittask.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/edittask/edittask.component.ts ***!
  \***************************************************/
/*! exports provided: EdittaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittaskComponent", function() { return EdittaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/task/task.module */ "./src/app/model/task/task.module.ts");
/* harmony import */ var _services_taskmanager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/taskmanager.service */ "./src/app/services/taskmanager.service.ts");







var EdittaskComponent = /** @class */ (function () {
    function EdittaskComponent(taskService, route, activatedRoute) {
        this.taskService = taskService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
    }
    EdittaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Task = new src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_5__["TaskModule"]();
        // new object
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            TaskDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ParentTaskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](10),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.taskId = params['id'];
            _this.Task.TaskId = _this.taskId;
        });
        // get the parent tasks
        this.taskService.getParentTasks(this.taskId).subscribe(function (result) { return _this.ParentTasks = result; });
        // get the task details by id
        this.taskService.getTaskById(this.taskId).subscribe(function (result) {
            _this.Task = result;
            _this.editForm.patchValue({
                TaskDescription: _this.Task.TaskDescription,
                ParentTaskId: _this.Task.ParentTaskId,
                Priority: _this.Task.Priority,
                StartDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(_this.Task.StartDate, 'yyyy-MM-dd', 'en-US'),
                EndDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(_this.Task.EndDate, 'yyyy-MM-dd', 'en-US')
            });
        });
    };
    Object.defineProperty(EdittaskComponent.prototype, "f", {
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    EdittaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.invalid) {
            return;
        }
        this.Task.TaskDescription = this.editForm.get('TaskDescription').value;
        this.Task.ParentTaskId = this.editForm.get('ParentTaskId').value;
        this.Task.Priority = this.editForm.get('Priority').value;
        this.Task.StartDate = this.editForm.get('StartDate').value;
        this.Task.EndDate = this.editForm.get('EndDate').value;
        this.taskService.saveTask(this.Task).subscribe(function (result) {
            if (result) {
                _this.route.navigate(['/viewtask']);
            }
            else {
                _this.error = "Error while saving the task";
            }
        });
        return;
    };
    EdittaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edittask',
            template: __webpack_require__(/*! ./edittask.component.html */ "./src/app/ui/edittask/edittask.component.html"),
            styles: [__webpack_require__(/*! ./edittask.component.css */ "./src/app/ui/edittask/edittask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_taskmanager_service__WEBPACK_IMPORTED_MODULE_6__["TaskmanagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EdittaskComponent);
    return EdittaskComponent;
}());



/***/ }),

/***/ "./src/app/ui/viewtask/confirmationdialog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/ui/viewtask/confirmationdialog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- confirmation dialog -->\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Confirmation</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('x')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n    <label class=\"control-label\"> {{ confirmationMessage }} </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    <label class=\"label\"> {{ taskDescription }} </label>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('Yes')\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"activeModal.close('No')\">No</button>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/viewtask/viewtask.component.css":
/*!****************************************************!*\
  !*** ./src/app/ui/viewtask/viewtask.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3ZpZXd0YXNrL3ZpZXd0YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/viewtask/viewtask.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/viewtask/viewtask.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>View Tasks</h5>\n\n<p>\n  <a href=\"/addtask\">Add Task</a>\n</p>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    <div class=\"form-group\">\n      <label for=\"taskDescription\" class=\"control-label\">Task</label>\n      <input type=\"text\" name=\"taskDescription\" class=\"form-control\" [(ngModel)]=\"searchTask.TaskDescription\">\n    </div>\n  </div>\n  <div class=\"col-6\">\n    <div class=\"form-group\">\n      <label for=\"parentTaskDescription\" class=\"control-text\">Parent Task</label>\n      <input type=\"text\" name=\"parentTaskDescription\" class=\"form-control\" [(ngModel)]=\"searchTask.ParentTaskDescription\">\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"form-group\">\n      <label for=\"priorityFrom\" class=\"control-text\">Priority From</label>\n      <input type=\"text\" name=\"priorityFrom\" class=\"form-control\" [(ngModel)]=\"searchTask.PriorityFrom\">\n    </div>\n  </div>\n  <div class=\"col-3\">\n    <div class=\"form-group\">\n      <label for=\"priorityTo\" class=\"control-text\">Priority To</label>\n      <input type=\"text\" name=\"priorityTo\" class=\"form-control\" [(ngModel)]=\"searchTask.PriorityTo\">\n    </div>\n  </div>\n  <div class=\"col-3\">\n    <div class=\"form-group\">\n      <label for=\"startDate\" class=\"control-text\">Start Date</label>\n      <input type=\"date\" name=\"startDate\" class=\"form-control\" [(ngModel)]=\"searchTask.StartDate\">\n    </div>\n  </div>\n  <div class=\"col-3\">\n    <div class=\"form-group\">\n      <label for=\"endDate\" class=\"control-text\">End Date</label>\n      <input type=\"date\" name=\"endDate\" class=\"form-control\" [(ngModel)]=\"searchTask.EndDate\">\n    </div>\n  </div>\n</div>\n<br />\n<table class=\"table table-responsive-sm\">\n  <thead>\n    <tr>\n      <th class=\"w-20\">\n        Task\n      </th>\n      <th class=\"w-20\">\n        Parent Task\n      </th>\n      <th class=\"w-10\">\n        Priority\n      </th>\n      <th class=\"w-10\">\n        Start Date\n      </th>\n      <th class=\"w-10\">\n        End Date\n      </th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let task of Tasks | filter:searchTask\">\n      <td>{{ task.TaskDescription }}</td>\n      <td>{{ task.ParentTaskDescription }}</td>\n      <td>{{ task.Priority }}</td>\n      <td>{{ task.StartDate | date: 'dd/MM/yyyy' }}</td>\n      <td>{{ task.EndDate | date: 'dd/MM/yyyy' }}</td>\n      <td>\n        <div *ngIf=\"!task.Completed\">\n          <button class=\"btn btn-sm btn-primary\" (click)=\"editTask(task.TaskId)\">Edit</button>\n          | <button class=\"btn btn-sm btn-success\" (click)=\"completeTask(task.TaskId)\">Complete</button>\n          | <button class=\"btn btn-sm btn-danger\" (click)=\"deleteTask(task.TaskId)\">Delete</button>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/ui/viewtask/viewtask.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/viewtask/viewtask.component.ts ***!
  \***************************************************/
/*! exports provided: ConfirmationDialog, ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return ConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_task_task_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/task/task.module */ "./src/app/model/task/task.module.ts");
/* harmony import */ var _services_taskmanager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/taskmanager.service */ "./src/app/services/taskmanager.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var ConfirmationDialog = /** @class */ (function () {
    function ConfirmationDialog(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationDialog.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmationDialog.prototype, "confirmationMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmationDialog.prototype, "taskDescription", void 0);
    ConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-content',
            template: __webpack_require__(/*! ./confirmationdialog.component.html */ "./src/app/ui/viewtask/confirmationdialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]])
    ], ConfirmationDialog);
    return ConfirmationDialog;
}());

var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(taskService, route, modalService) {
        this.taskService = taskService;
        this.route = route;
        this.modalService = modalService;
    }
    ViewtaskComponent.prototype.ngOnInit = function () {
        this.searchTask = new _model_task_task_module__WEBPACK_IMPORTED_MODULE_3__["TaskSearchModule"]();
        this.getAllTasks();
    };
    ViewtaskComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.taskService.getAllTasks().subscribe(function (result) { return _this.Tasks = result; });
    };
    ViewtaskComponent.prototype.editTask = function (id) {
        this.route.navigate(['/edittask/' + id]);
    };
    ViewtaskComponent.prototype.completeTask = function (id) {
        var _this = this;
        this.taskId = id;
        this.filteredTask = this.Tasks.filter(function (t) { return t.TaskId == _this.taskId; });
        this.taskDescription = this.filteredTask[0].TaskDescription;
        this.confirmationMessage = "Are you sure to complete the task ?";
        this.closeResult = "";
        var modalRef = this.modalService.open(ConfirmationDialog, { ariaLabelledBy: 'modal-basic-title' });
        modalRef.componentInstance.confirmationMessage = this.confirmationMessage;
        modalRef.componentInstance.taskDescription = this.taskDescription;
        modalRef.result.then(function (result) {
            _this.closeResult = result;
            if (_this.closeResult == "Yes") {
                _this.taskService.completeTask(_this.taskId).subscribe(function (response) {
                    if (response) {
                        _this.getAllTasks();
                    }
                    else {
                        _this.errorMessage = "Error while saving data";
                    }
                });
            }
        }, function (reason) {
            _this.closeResult = reason;
        });
    };
    ViewtaskComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.taskId = id;
        this.filteredTask = this.Tasks.filter(function (t) { return t.TaskId == _this.taskId; });
        this.taskDescription = this.filteredTask[0].TaskDescription;
        this.confirmationMessage = "Are you sure to delete the task ?";
        this.closeResult = "";
        var modalRef = this.modalService.open(ConfirmationDialog, { ariaLabelledBy: 'modal-basic-title' });
        modalRef.componentInstance.confirmationMessage = this.confirmationMessage;
        modalRef.componentInstance.taskDescription = this.taskDescription;
        modalRef.result.then(function (result) {
            _this.closeResult = result;
            if (_this.closeResult == "Yes") {
                _this.taskService.deleteTask(_this.taskId).subscribe(function (result) {
                    if (result) {
                        _this.getAllTasks();
                    }
                    else {
                        _this.errorMessage = "Error while saving data";
                    }
                });
            }
        }, function (reason) {
            _this.closeResult = reason;
        });
    };
    ViewtaskComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ViewtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/ui/viewtask/viewtask.component.html"),
            entryComponents: [ConfirmationDialog],
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/ui/viewtask/viewtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_taskmanager_service__WEBPACK_IMPORTED_MODULE_4__["TaskmanagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\Visual Studio 2017\Projects\Capsule\TaskManager\TaskManagerUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map