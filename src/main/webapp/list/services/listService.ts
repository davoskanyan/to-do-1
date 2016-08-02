import {Injectable} from "@angular/core";
import {ListItem} from "../models";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import {Response, Http} from "@angular/http";

@Injectable()
export class ListService {
	constructor(private http:Http) {
	}

	private listUrl = './list/repository/lists.json';
	private taskItemsUrl = './list/repository/taskItems.json';
	
	public selectedList:Subject<ListItem> = new BehaviorSubject<ListItem>(null);

	public setSelectedList(listItem:ListItem):void {
		this.selectedList.next(listItem);
	}


	public getLists():Observable<String> {
		return this.http.get(this.listUrl).map((response:Response) => response.text());
	}
	
	public getTaskItems():Observable<String> {
		return this.http.get(this.taskItemsUrl).map((response:Response) => response.text());
	}
}