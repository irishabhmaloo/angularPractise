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
import { ServersRComponent } from './serversR/Rservers.component';
import { ServerRComponent } from './serversR/serverR/Rserver.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './serversR/edit-server/edit-server.component';
import { ServersService } from './serversR/Rservers.service';


// ROUTER
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent }, //localhost:4200/users
  { path: 'servers', component: ServersRComponent },

  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers/:id/edit', component: EditServerComponent }
]

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
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountService, LoggingService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
