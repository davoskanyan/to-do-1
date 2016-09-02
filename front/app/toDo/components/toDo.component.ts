import {Component} from "@angular/core";
import {TaskComponent} from "./tasks.component";
import {ListComponent} from "./lists.component";
import {UserComponent} from "./user.component";
import {AppService} from "../services/appService";

@Component({
	selector: 'list-app',
	templateUrl: 'app/toDo/components/toDo.html',
	directives: [ListComponent, TaskComponent, UserComponent],
	providers: [AppService]
})
export class ToDoComponent {
	constructor() {
	}
}