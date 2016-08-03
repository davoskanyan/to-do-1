System.register(["@angular/core", "@angular/platform-browser-dynamic", "./tasks.component", "./lists.component", "./userInfo.component", "../services/listService", "@angular/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1, tasks_component_1, lists_component_1, userInfo_component_1, listService_1, http_1;
    var ListApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (lists_component_1_1) {
                lists_component_1 = lists_component_1_1;
            },
            function (userInfo_component_1_1) {
                userInfo_component_1 = userInfo_component_1_1;
            },
            function (listService_1_1) {
                listService_1 = listService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ListApp = (function () {
                function ListApp() {
                }
                ListApp = __decorate([
                    core_1.Component({
                        selector: 'list-app',
                        templateUrl: './list/components/app.html',
                        directives: [lists_component_1.Lists, tasks_component_1.Tasks, userInfo_component_1.UserInfo],
                        providers: [listService_1.ListService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListApp);
                return ListApp;
            })();
            platform_browser_dynamic_1.bootstrap(ListApp);
        }
    }
});
//# sourceMappingURL=app.component.js.map