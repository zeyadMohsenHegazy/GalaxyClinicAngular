import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { LanguageService } from 'src/services/LanguageService/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'GalaxyClinic';
  isArabic: boolean = false;

  constructor(
    private translate: TranslateService,
    private langService: LanguageService
  ) {
    translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      if (translate.currentLang === 'ar') {
        this.isArabic = this.langService.isArabic;
        console.log(this.isArabic);
      } else if (translate.currentLang === 'en') {
        this.isArabic = false;
        console.log(this.isArabic);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isArabic = this.langService.isArabic;
    console.log(this.isArabic);
  }
  ngOnInit(): void {
    this.isArabic = this.langService.isArabic;
    console.log(this.isArabic);
  }
}
