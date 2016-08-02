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
    var ListService;
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
            ListService = (function () {
                function ListService(http) {
                    this.http = http;
                    this.listUrl = './list/repository/lists.json';
                    this.taskItemsUrl = './list/repository/taskItems.json';
                    this.selectedList = new Rx_1.BehaviorSubject(null);
                }
                ListService.prototype.setSelectedList = function (listItem) {
                    this.selectedList.next(listItem);
                };
                ListService.prototype.getLists = function () {
                    return this.http.get(this.listUrl).map(function (response) { return response.text(); });
                };
                ListService.prototype.getTaskItems = function () {
                    return this.http.get(this.taskItemsUrl).map(function (response) { return response.text(); });
                };
                ListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListService);
                return ListService;
            }());
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=listService.js.map