export class TaskItem {

	constructor(public id:number, public listItemId:number, public name:string, public completed:boolean) {
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

	static fromJson(responseJson:string):TaskItem[] {
		let taskItems:TaskItem[] = [];
		JSON.parse(responseJson).forEach(node => {
			taskItems.push(new TaskItem(node.id, node.listItemId, node.name, node.completed));
		});
		return taskItems;
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