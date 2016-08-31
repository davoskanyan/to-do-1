System.register(["@angular/core", "rxjs/Rx", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, Rx_1, http_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService(http) {
                    this.http = http;
                    this.selectedList = new Rx_1.BehaviorSubject(null);
                }
                AppService.prototype.setSelectedList = function (listItem) {
                    this.selectedList.next(listItem);
                };
                AppService.prototype.getListItems = function () {
                    return this.http.get(AppService.getUrl("/getListItems")).map(function (response) { return response.text(); });
                };
                AppService.prototype.getTaskItems = function (selectedListId) {
                    return this.http.get(AppService.getUrl("/getTaskItems", selectedListId)).map(function (response) { return response.text(); });
                };
                AppService.prototype.saveEditListItem = function (listItem) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var data = JSON.stringify(listItem);
                    return this.http.post(AppService.getUrl("/saveEditListItem"), data, options).map(function (response) { return response.text(); });
                };
                AppService.prototype.saveEditTaskItem = function (taskItem) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var data = JSON.stringify(taskItem);
                    return this.http.post(AppService.getUrl("/saveEditTaskItem"), data, options).map(function (response) { return response.text(); });
                };
                AppService.prototype.removeListItem = function (listItemId) {
                    this.http.delete(AppService.getUrl("/deleteListItem/", listItemId)).subscribe();
                };
                AppService.prototype.removeTaskItem = function (taskItem) {
                    this.http.delete(AppService.getUrl("/deleteTaskItem/", taskItem.listItemId, taskItem.id)).subscribe();
                };
                AppService.getUrl = function (absolute) {
                    var queryParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        queryParams[_i - 1] = arguments[_i];
                    }
                    var basePath = "http://localhost:8080";
                    var url = basePath + absolute;
                    for (var _a = 0, queryParams_1 = queryParams; _a < queryParams_1.length; _a++) {
                        var queryParam = queryParams_1[_a];
                        url += "/" + queryParam;
                    }
                    return url;
                };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
//# sourceMappingURL=appService.js.map