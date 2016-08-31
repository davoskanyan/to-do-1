import {Injectable} from "@angular/core";
import {ListItem, TaskItem} from "../models";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import {Response, Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class AppService {
	constructor(private http:Http) {
	}
	
	public selectedList:Subject<ListItem> = new BehaviorSubject<ListItem>(null);

	public setSelectedList(listItem:ListItem):void {
		this.selectedList.next(listItem);
	}

	public getListItems():Observable<String> {
		return this.http.get(AppService.getUrl("/getListItems")).map((response:Response) => response.text());
	}

	public getTaskItems(selectedListId):Observable<String> {
		return this.http.get(AppService.getUrl("/getTaskItems", selectedListId)).map((response:Response) => response.text());
	}

	public saveEditListItem(listItem:ListItem) {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		let data = JSON.stringify(listItem);

		return this.http.post(AppService.getUrl("/saveEditListItem"), data, options).map((response:Response) => response.text());
	}

	public saveEditTaskItem(taskItem:TaskItem):Observable<String> {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		let data = JSON.stringify(taskItem);

		return this.http.post(AppService.getUrl("/saveEditTaskItem"), data, options).map((response:Response) => response.text());
	}

	public removeListItem(listItemId:number) {
		this.http.delete(AppService.getUrl("/deleteListItem/", listItemId)).subscribe();
	}

	public removeTaskItem(taskItem:TaskItem) {
		this.http.delete(AppService.getUrl("/deleteTaskItem/", taskItem.listItemId, taskItem.id)).subscribe();
	}

	public static getUrl(absolute:string, ...queryParams:Array<string|number>) {
		let basePath:string = "http://localhost:8080";
		let url = basePath + absolute;
		for (let queryParam of queryParams) {
			url += "/" + queryParam;
		}
		return url;
	}
}