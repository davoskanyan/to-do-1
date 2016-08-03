import {Component, Output, EventEmitter, Input, OnInit} from "@angular/core";
import {ListItem} from "../models";
import {ListService} from "../services/listService";

@Component({
	selector: 'lists',
	templateUrl: './list/components/lists.html',
})
export class Lists implements OnInit {
	constructor(private listService: ListService) {
	}
	
	listItems:ListItem[];
	selectedList:ListItem;

	onListItemClick(listItem:ListItem):void {
		this.listService.setSelectedList(listItem);
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

	ngOnInit() {
		this.listService.getListItems().subscribe((responseJson:string) => {
			this.listItems = ListItem.fromJson(responseJson);
			this.listService.setSelectedList(this.listItems[0]);
		});
		this.listService.selectedList.subscribe((listItem:ListItem) => {
			this.selectedList = listItem;
		});
	}

}