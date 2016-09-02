System.register(["@angular/core", "../services/appService", "../models"], function(exports_1, context_1) {
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
    var core_1, appService_1, models_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appService_1_1) {
                appService_1 = appService_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(listService) {
                    this.listService = listService;
                }
                ListComponent.prototype.onListItemClick = function (listItem) {
                    this.listService.setSelectedList(listItem);
                };
                ListComponent.prototype.onRemoveListItemClick = function (listItemId) {
                    if (this.selectedList.id == listItemId) {
                        this.listService.setSelectedList(null);
                    }
                    this.listItems = this.listItems.filter(function (listItem) { return listItem.id != listItemId; });
                    this.listService.removeListItem(listItemId);
                };
                ListComponent.prototype.addNewList = function (newListElement) {
                    var _this = this;
                    if (newListElement.value.replace(/\s/g, '') == "") {
                        return;
                    }
                    var newListItem = new models_1.ListItem(newListElement.value, null);
                    this.listService.saveEditListItem(newListItem).subscribe(function (newListId) {
                        newListItem.id = parseInt(newListId);
                        _this.listItems.push(newListItem);
                        newListElement.value = "";
                    });
                };
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.listService.getListItems().subscribe(function (responseJson) {
                        _this.listItems = models_1.ListItem.fromJson(responseJson);
                        _this.listService.setSelectedList(_this.listItems[0]);
                    });
                    this.listService.selectedList.subscribe(function (listItem) {
                        _this.selectedList = listItem;
                    });
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'lists',
                        templateUrl: 'app/toDo/components/lists.html',
                    }), 
                    __metadata('design:paramtypes', [appService_1.AppService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=lists.component.js.map