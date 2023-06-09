import { Component, OnInit } from '@angular/core';
import { ServersService } from './Rservers.service';

@Component({
  selector: 'app-rservers',
  templateUrl: './Rservers.component.html',
  styleUrls: ['./Rservers.component.css']
})
export class ServersRComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
