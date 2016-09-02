import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {routing, appRoutingProviders} from "./app.routing";
import {Welcome} from "./welcome";
import {ToDoModule} from "./toDo/toDo.module";
import {PageNotFoundModule} from "./common/pageNotFound.module";


@NgModule({
		imports: [BrowserModule, HttpModule, routing, ToDoModule, PageNotFoundModule],
		declarations: [Welcome],
		providers: [appRoutingProviders],
		bootstrap: [Welcome]

	}
)
export class AppModule {
}