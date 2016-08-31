import {Component} from "@angular/core";
import {TaskComponent} from "./tasks.component";
import {ListComponent} from "./lists.component";
import {UserInfo} from "./userInfo.component";
import {AppService} from "../services/listService";


@Component({
	selector: 'list-app',
	templateUrl: './app/components/app.html',
	directives: [ListComponent, TaskComponent, UserInfo],
	providers: [AppService]
})
export class AppComponent {
	constructor() {
	}
}