import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/currentUserInfo/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements AfterViewInit {
  constructor(private userInfo: UserInfoService, private router: Router) {}
  ngAfterViewInit(): void {
  }

  signOut() {
    this.userInfo.signOut();
  }
}
