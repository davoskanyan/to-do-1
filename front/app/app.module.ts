import {TaskComponent} from "./components/tasks.component";
import {ListComponent} from "./components/lists.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppService} from "./services/listService";
import {AppComponent} from "./components/app.component";
import {HttpModule} from "@angular/http";


@NgModule({
		imports: [BrowserModule, HttpModule],
		declarations: [AppComponent, ListComponent, TaskComponent],
		providers: [AppService],
		bootstrap: [AppComponent]

	}
)
export class AppModule {
}