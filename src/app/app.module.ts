import {InjectionToken, Injector, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {OverviewModule} from './overview/overview.module';
import {HttpClientModule} from '@angular/common/http';
import {LoggerService} from './core/logger.service';
import {UploadLoggerService} from './core/upload-logger.service';
import {AuthorizationService} from './core/authorization.service';
import {Logger} from './core/logger';

export const loggerInjectionToken = new InjectionToken('logger');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    OverviewModule,
  ],
  providers: [
    {provide: 'APP_TITLE', useValue: 'angular advanced'},
    {
      provide: loggerInjectionToken,
      useFactory: (authorizationService: AuthorizationService, injector: Injector) => {
        return authorizationService.isAuthorized()
          ? injector.get<Logger>(UploadLoggerService)
          : injector.get<Logger>(LoggerService);
      },
      deps: [AuthorizationService, Injector]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
