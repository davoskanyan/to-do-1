System.register(["@angular/platform-browser", "@angular/core", "@angular/http", "../app.routing", "./components/toDo.component", "./services/appService", "./components/tasks.component", "./components/lists.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_1, core_1, http_1, app_routing_1, toDo_component_1, appService_1, tasks_component_1, lists_component_1;
    var ToDoModule;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (toDo_component_1_1) {
                toDo_component_1 = toDo_component_1_1;
            },
            function (appService_1_1) {
                appService_1 = appService_1_1;
            },
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (lists_component_1_1) {
                lists_component_1 = lists_component_1_1;
            }],
        execute: function() {
            ToDoModule = (function () {
                function ToDoModule() {
                }
                ToDoModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing],
                        declarations: [toDo_component_1.ToDoComponent, lists_component_1.ListComponent, tasks_component_1.TaskComponent],
                        providers: [appService_1.AppService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToDoModule);
                return ToDoModule;
            }());
            exports_1("ToDoModule", ToDoModule);
        }
    }
});
//# sourceMappingURL=toDo.module.js.map