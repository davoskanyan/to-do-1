import {Component, OnInit, OnChanges} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Tasks} from "./tasks.component";
import {Lists} from "./lists.component";
import {UserInfo} from "./userInfo.component";
import {ListItem} from "../models";
import {ListService} from "../services/listService";
import {HTTP_PROVIDERS} from "@angular/http";


@Component({
	selector: 'list-app',
	templateUrl: './list/components/app.html',
	directives: [Lists, Tasks, UserInfo],
	providers: [ListService, HTTP_PROVIDERS]
})
class ListApp implements OnInit, OnChanges {
	constructor(private listService: ListService) {
	}

	listItems:ListItem[] = [];
	selectedList:ListItem;

	ngOnInit():any {
		this.listService.getLists().subscribe((responseJson:string) => {
			this.listItems = ListItem.fromJson(responseJson);
			this.listService.setSelectedList(this.listItems[0]);
		});
		this.listService.selectedList.subscribe((listItem:ListItem) => {
			this.selectedList = listItem;
			this.ngOnChanges();
		});
	}

	ngOnChanges() {
		
	}

	listChanged(selectedList:ListItem) {
		this.listService.setSelectedList(selectedList);
	}

}

bootstrap(ListApp);