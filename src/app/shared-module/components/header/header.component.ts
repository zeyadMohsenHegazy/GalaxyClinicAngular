import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserInfoService } from '../../services/currentUserInfo/user-info.service';
import { LanguageService } from 'src/services/LanguageService/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userName: string = '';
  isArabic: boolean = false;
  constructor(
    private translate: TranslateService,
    private userInfo: UserInfoService,
    private langService: LanguageService
  ) {
    this.getUserName();
  }
  transelateArabic() {
    this.translate.use('ar');
    this.isArabic = true;
    this.langService.isArabic = true;
  }
  transelateEnglish() {
    this.translate.use('en');
    this.isArabic = false;
  }
  private getUserName() {
    this.userName = this.userInfo.getUserInfo()?.userName;
  }
}
