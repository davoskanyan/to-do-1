System.register(["@angular/core", "@angular/platform-browser-dynamic", "./tasks.component", "./lists.component", "./userInfo.component", "../models", "../services/listService", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, platform_browser_dynamic_1, tasks_component_1, lists_component_1, userInfo_component_1, models_1, listService_1, http_1;
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
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (listService_1_1) {
                listService_1 = listService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ListApp = (function () {
                function ListApp(listService) {
                    this.listService = listService;
                    this.listItems = [];
                }
                ListApp.prototype.ngOnInit = function () {
                    var _this = this;
                    this.listService.getLists().subscribe(function (responseJson) {
                        _this.listItems = models_1.ListItem.fromJson(responseJson);
                        _this.listService.setSelectedList(_this.listItems[0]);
                    });
                    this.listService.selectedList.subscribe(function (listItem) {
                        _this.selectedList = listItem;
                        _this.ngOnChanges();
                    });
                };
                ListApp.prototype.ngOnChanges = function () {
                };
                ListApp.prototype.listChanged = function (selectedList) {
                    this.listService.setSelectedList(selectedList);
                };
                ListApp = __decorate([
                    core_1.Component({
                        selector: 'list-app',
                        templateUrl: './list/components/app.html',
                        directives: [lists_component_1.Lists, tasks_component_1.Tasks, userInfo_component_1.UserInfo],
                        providers: [listService_1.ListService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [listService_1.ListService])
                ], ListApp);
                return ListApp;
            }());
            platform_browser_dynamic_1.bootstrap(ListApp);
        }
    }
});
//# sourceMappingURL=app.component.js.map