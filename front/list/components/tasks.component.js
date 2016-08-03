System.register(["@angular/core", "../models", "../services/listService"], function(exports_1) {
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
    var Tasks;
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
            Tasks = (function () {
                function Tasks(listService) {
                    this.listService = listService;
                    this.taskItems = [];
                }
                Tasks.prototype.toggleCheck = function (taskItem) {
                    taskItem.completed = !taskItem.completed;
                    this.listService.saveEditTaskItem(taskItem).subscribe();
                };
                Tasks.prototype.addNewTask = function (newTaskElement) {
                    var _this = this;
                    if (newTaskElement.value.replace(/\s/g, '') == "") {
                        return;
                    }
                    var newTaskItem = new models_1.TaskItem(null, this.selectedList.id, newTaskElement.value, false);
                    this.listService.saveEditTaskItem(newTaskItem).subscribe(function (newTaskId) {
                        newTaskItem.id = parseInt(newTaskId);
                        _this.taskItems.push(newTaskItem);
                        newTaskElement.value = "";
                    });
                };
                Tasks.prototype.onRemoveTaskItemClick = function (taskItem) {
                    this.taskItems = this.taskItems.filter(function (t) { return t.id != taskItem.id; });
                    this.listService.removeTaskItem(taskItem);
                };
                Tasks.prototype.ngOnInit = function () {
                    var _this = this;
                    this.listService.selectedList.subscribe(function (listItem) {
                        _this.selectedList = listItem;
                        if (listItem == null) {
                            _this.taskItems = [];
                        }
                        else {
                            _this.listService.getTaskItems(listItem.id).subscribe(function (taskItemsJson) {
                                _this.taskItems = models_1.TaskItem.fromJson(taskItemsJson);
                            });
                        }
                    });
                };
                Tasks = __decorate([
                    core_1.Component({
                        selector: 'tasks',
                        templateUrl: './list/components/tasks.html'
                    }), 
                    __metadata('design:paramtypes', [listService_1.ListService])
                ], Tasks);
                return Tasks;
            })();
            exports_1("Tasks", Tasks);
        }
    }
});
//# sourceMappingURL=tasks.component.js.map