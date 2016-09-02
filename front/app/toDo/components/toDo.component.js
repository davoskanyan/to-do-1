System.register(["@angular/core", "./tasks.component", "./lists.component", "./user.component", "../services/appService"], function(exports_1, context_1) {
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
    var core_1, tasks_component_1, lists_component_1, user_component_1, appService_1;
    var ToDoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (lists_component_1_1) {
                lists_component_1 = lists_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (appService_1_1) {
                appService_1 = appService_1_1;
            }],
        execute: function() {
            ToDoComponent = (function () {
                function ToDoComponent() {
                }
                ToDoComponent = __decorate([
                    core_1.Component({
                        selector: 'list-app',
                        templateUrl: 'app/toDo/components/toDo.html',
                        directives: [lists_component_1.ListComponent, tasks_component_1.TaskComponent, user_component_1.UserComponent],
                        providers: [appService_1.AppService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToDoComponent);
                return ToDoComponent;
            }());
            exports_1("ToDoComponent", ToDoComponent);
        }
    }
});
//# sourceMappingURL=toDo.component.js.map