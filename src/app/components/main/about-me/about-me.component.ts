import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/UserData.model';
import { UserDataService } from 'src/app/service/userData.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  user: UserData = new UserData('', '', '', '', '', '', '', '', '', '', '');

  constructor(public userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe((data) => {
      this.user = data;
    });
  }
}
