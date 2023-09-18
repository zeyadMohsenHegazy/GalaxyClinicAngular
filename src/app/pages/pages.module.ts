import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PagesRoutingModule } from './pages-routing.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { ConfigModuleModule } from './config-module/config-module.module';
import { TransactionModuleModule } from './transaction-module/transaction-module.module';
import { createtranslateLoader } from '../app.module';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpInterceptInterceptor } from 'src/interceptors/http-intercept.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModuleModule,
    ConfigModuleModule,
    TransactionModuleModule,
    PagesRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createtranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
})
export class PagesModule {}
