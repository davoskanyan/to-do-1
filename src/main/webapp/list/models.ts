export class TaskItem {
	id:number;

	constructor(public name:string, public completed:boolean, id?:number) {
		// this.id = id || this.getNextId();
	}

	getNextId(listItems:ListItem[]) {
		let maxId:number = 0;
		listItems.forEach((listItem) => {
			if (listItem.id > maxId) {
				maxId = listItem.id;
			}
		});
		return ++maxId;
	}

	static fromJson(responseJson:string) {
		return JSON.parse(responseJson);
	}
}

export class ListItem {
	constructor(public name:string, public id:number) {
	}

	static fromJson(responseJson:string):ListItem[] {
		let listItems:ListItem[] = [];
		JSON.parse(responseJson).forEach(node => {
			listItems.push(new ListItem(node.name, node.id));
		});
		return listItems;
	}
}