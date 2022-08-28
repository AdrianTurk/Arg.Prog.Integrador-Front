import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/UserData.model';
import { TokenService } from 'src/app/service/token.service';
import { UserDataService } from 'src/app/service/userData.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  user: UserData = new UserData('', '', '', '', '', '', '', '', '', '', '');

  constructor(
    public userDataService: UserDataService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe((data) => {
      this.user = data;
    });
  }

  public isLogged(): boolean {
    return this.tokenService.getToken() ? true : false;
  }

  public updateAbout() {
    if (this.user.userName) {
      this.userDataService.update(this.user.userName, this.user).subscribe();
    }
  }

  public getAbout() {
    this.ngOnInit();
  }
}
