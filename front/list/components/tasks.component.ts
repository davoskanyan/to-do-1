import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {ListItem, TaskItem} from "../models";
import {ListService} from "../services/listService";


@Component({
	selector: 'tasks',
	templateUrl: './list/components/tasks.html'
})
export class Tasks implements OnInit {
	constructor(private listService:ListService) {
	}

	selectedList:ListItem;
	allTaskItems:TaskItem[] = [];

	toggleCheck(taskItem:TaskItem) {
		taskItem.completed = !taskItem.completed;
		this.listService.saveEditTaskItem(taskItem).subscribe();
	}

	addNewTask(newTaskElement:HTMLInputElement) {
		if (newTaskElement.value.replace(/\s/g, '') == "") {
			return;
		}
		let newTaskItem:TaskItem = new TaskItem(null, this.selectedList.id, newTaskElement.value, false);
		this.listService.saveEditTaskItem(newTaskItem).subscribe((newTaskId:string) => {
			newTaskItem.id = parseInt(newTaskId);
			this.allTaskItems.push(newTaskItem);
			newTaskElement.value = "";
		});
	}

	ngOnInit() {
		this.listService.selectedList.subscribe((listItem:ListItem) => {
			this.selectedList = listItem;
			this.selectedList && this.listService.getTaskItems(listItem.id).subscribe((taskItemsJson:string) => {
				this.allTaskItems = TaskItem.fromJson(taskItemsJson);
			});
		});
	}
}