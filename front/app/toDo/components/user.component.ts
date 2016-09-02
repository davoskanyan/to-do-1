import {Component} from "@angular/core";

@Component({
	selector: 'user-info',
	templateUrl: 'app/toDo/components/userInfo.html'
})
export class UserComponent {
	avatarImageUrl:string = "./app/images/avatar.jpg";
	name:string = "Voskanyan David";
}