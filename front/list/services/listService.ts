import {Injectable} from "@angular/core";
import {ListItem} from "../models";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {TaskItem} from "../models";

@Injectable()
export class ListService {
	constructor(private http:Http) {
	}

	private basePath:string = "http://localhost:8080";

	public selectedList:Subject<ListItem> = new BehaviorSubject<ListItem>(null);

	public setSelectedList(listItem:ListItem):void {
		this.selectedList.next(listItem);
	}

	public getListItems():Observable<String> {
		return this.http.get(this.basePath + "/getListItems").map((response:Response) => response.text());
	}

	public getTaskItems(selectedListId):Observable<String> {
		return this.http.get(this.basePath + "/getTaskItems/" + selectedListId).map((response:Response) => response.text());
	}

	public saveEditListItem(listItem:ListItem) {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		let data = JSON.stringify(listItem);

		return this.http.post(this.basePath + "/saveEditListItem", data, options).map((response:Response) => response.text());
	}

	public saveEditTaskItem(taskItem:TaskItem):Observable<String> {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		let data = JSON.stringify(taskItem);

		return this.http.post(this.basePath + "/saveEditTaskItem", data, options).map((response:Response) => response.text());
	}

	public removeListItem(listItemId:number) {
		this.http.delete(this.basePath + "/deleteListItem/" + listItemId).subscribe();
	}

	public removeTaskItem(taskItem:TaskItem) {
		this.http.delete(this.basePath + "/deleteTaskItem/" + taskItem.listItemId + "/" + taskItem.id).subscribe();
	}
}