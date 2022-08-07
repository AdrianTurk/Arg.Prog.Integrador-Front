import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/UserData.model';
import { TokenService } from 'src/app/service/token.service';
import { UserDataService } from 'src/app/service/userData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  user: UserData = new UserData('', '', '', '', '', '', '', '', '', '', '');

  constructor(private router: Router, private tokenService: TokenService, public userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe((data) => {
      this.user = data;
    });
    this.isLogged = this.tokenService.getToken() ? true : false;
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
