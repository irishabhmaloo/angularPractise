import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assign2Component } from './assign2/assign2.component';
import { AppServerElementComponent } from './app-server-element/app-server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { NewDirectDirective } from './basic-highlight/new-direct.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './accounr.service';
import { LoggingService } from './logging.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServersRComponent } from './serversR/Rservers.component';
import { ServerRComponent } from './serversR/serverR/Rserver.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './serversR/edit-server/edit-server.component';
import { ServersService } from './serversR/Rservers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { canDeactivateGuard } from './serversR/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { serverResolver } from './serversR/serverR/server-resolver.service';
import { HomeOComponent } from './homeO/homeO.component';
import { UserOComponent } from './userO/userO.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { HttpFormComponent } from './http-form/http-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assign2Component,
    AppServerElementComponent,
    BasicHighlightDirective,
    NewDirectDirective,
    AccountComponent,
    NewAccountComponent,
    UserComponent,
    UsersComponent,
    HomeComponent,
    ServersRComponent,
    ServerRComponent,
    EditServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    HomeOComponent,
    UserOComponent,
    ReactFormComponent,
    HttpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService, LoggingService, ServersService, AuthGuard, AuthService, canDeactivateGuard, serverResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
