import { Component, OnInit } from '@angular/core'
import { User } from '../user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User[] = [];
  findUser(value: string) {
    this.userService.findUser(value).then(
      (success) => {
        this.user = this.userService.user;
        console.log(this.user);
      },
      (error) => {
        console.log(this.user);
      }
    );
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.findUser('bintadam');
  }

}
