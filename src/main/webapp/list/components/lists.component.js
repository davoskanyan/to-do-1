System.register(["@angular/core", "../models", "../services/listService"], function(exports_1, context_1) {
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
    var core_1, models_1, listService_1;
    var Lists;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (listService_1_1) {
                listService_1 = listService_1_1;
            }],
        execute: function() {
            Lists = (function () {
                function Lists(listService) {
                    this.listService = listService;
                    this.clickEvent = new core_1.EventEmitter(null);
                }
                Lists.prototype.onListItemClick = function (listItem) {
                    this.listService.setSelectedList(listItem);
                    this.clickEvent.emit(listItem);
                };
                Lists.prototype.addNewList = function (newListElement) {
                    if (newListElement.value.replace(/\s/g, '') == "") {
                        return;
                    }
                    var newId = this.getNextId();
                    var newListItem = new models_1.ListItem(newListElement.value, newId);
                    this.listItems.push(newListItem);
                    newListElement.value = "";
                };
                Lists.prototype.getNextId = function () {
                    var maxId = 0;
                    this.listItems.forEach(function (listItem) {
                        if (listItem.id > maxId) {
                            maxId = listItem.id;
                        }
                    });
                    return ++maxId;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Lists.prototype, "clickEvent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Lists.prototype, "listItems", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', models_1.ListItem)
                ], Lists.prototype, "selectedList", void 0);
                Lists = __decorate([
                    core_1.Component({
                        selector: 'lists',
                        templateUrl: './list/components/lists.html',
                    }), 
                    __metadata('design:paramtypes', [listService_1.ListService])
                ], Lists);
                return Lists;
            }());
            exports_1("Lists", Lists);
        }
    }
});
//# sourceMappingURL=lists.component.js.map