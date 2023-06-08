import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //property
  // selector: '[app-servers]', //attribute
  // selector: '.app-servers', //class
  templateUrl:'./servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  servers = ["rishabh" , "lucky"];
  serverStatus = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);  }

  onClickServer() {
    this.serverStatus = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "SERVER CREATED! Named as " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
