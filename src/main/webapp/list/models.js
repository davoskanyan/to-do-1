System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TaskItem, ListItem;
    return {
        setters:[],
        execute: function() {
            TaskItem = (function () {
                function TaskItem(name, completed, id) {
                    this.name = name;
                    this.completed = completed;
                    // this.id = id || this.getNextId();
                }
                TaskItem.prototype.getNextId = function (listItems) {
                    var maxId = 0;
                    listItems.forEach(function (listItem) {
                        if (listItem.id > maxId) {
                            maxId = listItem.id;
                        }
                    });
                    return ++maxId;
                };
                TaskItem.fromJson = function (responseJson) {
                    return JSON.parse(responseJson);
                };
                return TaskItem;
            }());
            exports_1("TaskItem", TaskItem);
            ListItem = (function () {
                function ListItem(name, id) {
                    this.name = name;
                    this.id = id;
                }
                ListItem.fromJson = function (responseJson) {
                    var listItems = [];
                    JSON.parse(responseJson).forEach(function (node) {
                        listItems.push(new ListItem(node.name, node.id));
                    });
                    return listItems;
                };
                return ListItem;
            }());
            exports_1("ListItem", ListItem);
        }
    }
});
//# sourceMappingURL=models.js.map