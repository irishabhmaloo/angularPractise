import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onClickBtn(id: number) {
    // some calculations
    this.route.navigate(["/servers", id, 'edit'], {queryParams: {allowEdit:1}, fragment: 'loading'});
  }

  onLogIn() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }
}
