import { Component, OnInit } from '@angular/core'
import { Users } from '../repositories/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  user: Users[];

  findUser(value) {
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
    this.findUser('Bintadam');
  }

}
