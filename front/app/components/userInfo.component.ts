import {Component} from "@angular/core";

@Component({
	selector: 'user-info',
	templateUrl: './app/components/userInfo.html'
})
export class UserInfo {
	avatarImageUrl: string = "./app/images/avatar.jpg";
	name: string = "Voskanyan David";
}