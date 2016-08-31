System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TaskItem, ListItem;
    return {
        setters:[],
        execute: function() {
            TaskItem = (function () {
                function TaskItem(id, listItemId, name, completed) {
                    this.id = id;
                    this.listItemId = listItemId;
                    this.name = name;
                    this.completed = completed;
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
                    var taskItems = [];
                    JSON.parse(responseJson).forEach(function (node) {
                        taskItems.push(new TaskItem(node.id, node.listItemId, node.name, node.completed));
                    });
                    return taskItems;
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