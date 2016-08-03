import {Component} from "@angular/core";

@Component({
	selector: 'user-info',
	templateUrl: './list/components/userInfo.html'
})
export class UserInfo {
	avatarImageUrl: string = "./list/images/avatar.jpg";
	name: string = "Voskanyan David";
}