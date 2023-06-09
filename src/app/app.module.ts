import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
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
import { EditServerComponent } from './serversR/edit-server/edit-server.component';

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
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
