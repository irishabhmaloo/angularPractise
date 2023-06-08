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
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
