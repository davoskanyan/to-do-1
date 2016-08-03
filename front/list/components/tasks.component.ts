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
	taskItems:TaskItem[] = [];

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
			this.taskItems.push(newTaskItem);
			newTaskElement.value = "";
		});
	}

	onRemoveTaskItemClick(taskItem:TaskItem) {
		this.taskItems = this.taskItems.filter((t:TaskItem) => t.id != taskItem.id);
		this.listService.removeTaskItem(taskItem);
	}

	ngOnInit() {
		this.listService.selectedList.subscribe((listItem:ListItem) => {
			this.selectedList = listItem;
			if (listItem == null) {
				this.taskItems = [];
			}
			else {
				this.listService.getTaskItems(listItem.id).subscribe((taskItemsJson:string) => {
					this.taskItems = TaskItem.fromJson(taskItemsJson);
				});
			}
		});
	}
}