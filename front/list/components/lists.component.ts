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
		let newListItem:ListItem = new ListItem(newListElement.value, null);
		this.listService.saveEditListItem(newListItem).subscribe((newListId:string) => {
			newListItem.id = parseInt(newListId);
			this.listItems.push(newListItem);
			newListElement.value = "";
		});
	}

}