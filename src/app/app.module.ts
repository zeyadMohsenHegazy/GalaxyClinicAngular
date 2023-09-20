import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { PagesModule } from './pages/pages.module';
import { DemoModuleModule } from './demo-module/demo-module.module';
import { ToastrModule } from 'ngx-toastr';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { SpinnerComponent } from './shared-module/components/spinner/spinner.component';
import { HttpInterceptInterceptor } from 'src/interceptors/http-intercept.interceptor';
import { CommonModule } from '@angular/common';
import { AuthModuleModule } from './pages/auth-module/auth-module.module';
import { ForgetPasswordModule } from './pages/auth-module/forget-password/forget-password.module';

export function createtranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    PagesModule,
    ToastrModule.forRoot(),
    SharedModuleModule,
    DemoModuleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createtranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {}
