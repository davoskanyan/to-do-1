System.register(["./components/tasks.component", "./components/lists.component", "@angular/platform-browser", "@angular/core", "./services/listService", "./components/app.component", "@angular/http"], function(exports_1, context_1) {
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
    var tasks_component_1, lists_component_1, platform_browser_1, core_1, listService_1, app_component_1, http_1;
    var AppModule;
    return {
        setters:[
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (lists_component_1_1) {
                lists_component_1 = lists_component_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (listService_1_1) {
                listService_1 = listService_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
                        declarations: [app_component_1.AppComponent, lists_component_1.ListComponent, tasks_component_1.TaskComponent],
                        providers: [listService_1.AppService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map