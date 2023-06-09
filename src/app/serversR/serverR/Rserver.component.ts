import { Component, OnInit } from '@angular/core';

import { ServersService } from '../Rservers.service';

@Component({
  selector: 'app-rserver',
  templateUrl: './Rserver.component.html',
  styleUrls: ['./Rserver.component.css']
})
export class ServerRComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
