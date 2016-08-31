import {Component, Output, EventEmitter, Input, OnInit} from "@angular/core";
import {ListItem} from "../models";
import {AppService} from "../services/listService";

@Component({
	selector: 'lists',
	templateUrl: './app/components/lists.html',
})
export class ListComponent implements OnInit {
	constructor(private listService: AppService) {
	}

	listItems:ListItem[];
	selectedList:ListItem;

	onListItemClick(listItem:ListItem):void {
		this.listService.setSelectedList(listItem);
	}

	onRemoveListItemClick(listItemId:number):void {
		if(this.selectedList.id == listItemId) {
			this.listService.setSelectedList(null);
		}
		this.listItems = this.listItems.filter(listItem => listItem.id != listItemId);
		this.listService.removeListItem(listItemId);
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