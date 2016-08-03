import {Injectable} from "@angular/core";
import {ListItem} from "../models";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import {Response, Http} from "@angular/http";
import {TaskItem} from "../models";

@Injectable()
export class ListService {
	constructor(private http:Http) {
	}

	private basePath:string = "http://localhost:8080";

	private listUrl = '/lists';
	private taskItemsUrl = '/tasks';

	public selectedList:Subject<ListItem> = new BehaviorSubject<ListItem>(null);

	public setSelectedList(listItem:ListItem):void {
		this.selectedList.next(listItem);
	}

	public getLists():Observable<String> {
		return this.http.get(this.basePath + this.listUrl).map((response:Response) => response.text());
	}

	public saveList(listItemId:number, taskItems:TaskItem[]) {
		let data = {
			listItemId: listItemId,
			taskItems: taskItems
		};
		this.http.post(this.basePath + "/saveList", JSON.stringify(data)).subscribe(data => {
			console.log(data)
		});
	}

	public saveEditTaskItem(listItemId:number, taskItem:TaskItem) {
		let data = {
			listItemId: listItemId,
			taskItem: taskItem
		};
		return this.http.post(this.basePath + "/saveEditTaskItem", JSON.stringify(data)).map((response:Response) => {
			response.text()
		});
	}

	public getTaskItems(selectedListId):Observable<String> {
		return this.http.get(this.basePath + this.taskItemsUrl + "/" + selectedListId).map((response:Response) => response.text());
	}
}