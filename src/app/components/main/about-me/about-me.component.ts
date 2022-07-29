import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  user: User = new User()
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{this.user=data})
  }

}
