import {Component, Output, EventEmitter, Input} from "@angular/core";
import {ListItem} from "../models";
import {ListService} from "../services/listService";

@Component({
	selector: 'lists',
	templateUrl: './list/components/lists.html',
})
export class Lists {
	constructor(private listService: ListService) {
	}
	
	@Output() clickEvent:EventEmitter<ListItem> = new EventEmitter(null);

	@Input() listItems:ListItem[];
	@Input() selectedList:ListItem;

	onListItemClick(listItem:ListItem):void {
		this.listService.setSelectedList(listItem);
		this.clickEvent.emit(listItem);
	}

	addNewList(newListElement:HTMLInputElement) {
		if (newListElement.value.replace(/\s/g, '') == "") {
			return;
		}
		let newId:number = this.getNextId();
		let newListItem:ListItem = new ListItem(newListElement.value, newId);
		this.listItems.push(newListItem);
		newListElement.value = "";
	}

	getNextId() {
		let maxId:number = 0;
		this.listItems.forEach((listItem) => {
			if (listItem.id > maxId) {
				maxId = listItem.id;
			}
		});
		return ++maxId;
	}

}