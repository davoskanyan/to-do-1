import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {ListItem, TaskItem} from "../models";
import {ListService} from "../services/listService";


@Component({
	selector: 'tasks',
	templateUrl: './list/components/tasks.html'
})
export class Tasks implements OnInit {
	constructor(private listService: ListService) {}

	selectedList:ListItem;

	completedTaskItems:Array<TaskItem> = [];
	notCompletedTaskItems:Array<TaskItem> = [];

	allTaskItems:any = {};

	initTaskItems() {
		this.completedTaskItems = [];
		this.notCompletedTaskItems = [];
		if (!this.allTaskItems[this.selectedList.id]) {
			this.allTaskItems[this.selectedList.id] = {
				name: this.selectedList.name,
				tasks: []
			};
		}
		else {
			for (let taskItem of this.allTaskItems[this.selectedList.id].tasks) {
				if (taskItem.completed == true) {
					this.completedTaskItems.push(taskItem);
				}
				else(this.notCompletedTaskItems.push(taskItem));
			}
		}
	}

	toggleCheck(taskItem:TaskItem) {
		taskItem.completed = !taskItem.completed;
		this.initTaskItems();
	}

	addNewTask(newTaskElement:HTMLInputElement) {
		if (newTaskElement.value.replace(/\s/g, '') == "") {
			return;
		}
		let currentTaskItems:TaskItem[] = this.allTaskItems[this.selectedList.id].tasks;
		let nextId:number = this.getNextId(currentTaskItems);
		let newTaskItem:TaskItem = new TaskItem(newTaskElement.value, false, nextId);
		currentTaskItems.push(newTaskItem);
		newTaskElement.value = "";
		this.initTaskItems();
	}

	getNextId(taskItems:TaskItem[]) {
		let maxId:number = 0;
		taskItems.forEach((taskItem) => {
			if (taskItem.id > maxId) {
				maxId = taskItem.id;
			}
		});
		return ++maxId;
	}

	ngOnInit() {
		this.listService.selectedList.subscribe((listItem:ListItem) => {
			this.selectedList = listItem;
			this.selectedList && this.listService.getTaskItems().subscribe((taskItemsJson: string) => {
				this.allTaskItems = TaskItem.fromJson(taskItemsJson);
				this.initTaskItems();
			});
		});
	}
}