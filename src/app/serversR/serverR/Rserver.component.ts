import { Component, OnInit } from '@angular/core';

import { ServersService } from '../Rservers.service';
import { ActivatedRoute, Data, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-rserver',
  templateUrl: './Rserver.component.html',
  styleUrls: ['./Rserver.component.css']
})
export class ServerRComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

  //   const id = +this.route.snapshot.params['id'];
  //   this.server = this.serversService.getServer(id);

  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.server = this.serversService.getServer(+params['id']);
  //     }
  //   )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling:'preserve'});
  }

}
