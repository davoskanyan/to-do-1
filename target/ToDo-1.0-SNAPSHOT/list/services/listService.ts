import {Injectable} from "@angular/core";
import {ListItem} from "../models";
import {Subject, BehaviorSubject, Observable} from "rxjs/Rx";
import {Response, Http} from "@angular/http";

@Injectable()
export class ListService {
	constructor(private http:Http) {
	}

	private listUrl = '/lists';
	private taskItemsUrl = './tasks';

	public selectedList:Subject<ListItem> = new BehaviorSubject<ListItem>(null);

	public setSelectedList(listItem:ListItem):void {
		this.selectedList.next(listItem);
	}


	public getLists():Observable<String> {
		return this.http.get(this.listUrl).map((response:Response) => response.text());
	}

	public getTaskItems(selectedListId):Observable<String> {
		return this.http.get(this.taskItemsUrl + "/" + selectedListId).map((response:Response) => response.text());
	}
}