System.register(["@angular/platform-browser", "@angular/core", "@angular/http", "./app.routing", "./welcome", "./toDo/toDo.module", "./common/pageNotFound.module"], function(exports_1, context_1) {
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
    var platform_browser_1, core_1, http_1, app_routing_1, welcome_1, toDo_module_1, pageNotFound_module_1;
    var AppModule;
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
            function (welcome_1_1) {
                welcome_1 = welcome_1_1;
            },
            function (toDo_module_1_1) {
                toDo_module_1 = toDo_module_1_1;
            },
            function (pageNotFound_module_1_1) {
                pageNotFound_module_1 = pageNotFound_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, toDo_module_1.ToDoModule, pageNotFound_module_1.PageNotFoundModule],
                        declarations: [welcome_1.Welcome],
                        providers: [app_routing_1.appRoutingProviders],
                        bootstrap: [welcome_1.Welcome]
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