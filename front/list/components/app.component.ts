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
class ListApp {
	constructor() {
	}
}

bootstrap(ListApp);