import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {routing} from "../app.routing";
import {ToDoComponent} from "./components/toDo.component";
import {AppService} from "./services/appService";
import {TaskComponent} from "./components/tasks.component";
import {ListComponent} from "./components/lists.component";

@NgModule({
		imports: [BrowserModule, HttpModule, routing],
		declarations: [ToDoComponent, ListComponent, TaskComponent],
		providers: [AppService]
	}
)
export class ToDoModule {
}