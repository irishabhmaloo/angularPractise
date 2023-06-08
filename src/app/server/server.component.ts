import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    admNum: number = 6;
    admStatus: string = 'working';

    constructor() {
        this.admStatus = Math.random() > 0.5 ? 'working' : 'not working';
    }

    getColor() {
        return this.admStatus === 'working' ? 'green' : 'red';
    }

    getStatus() {
        return this.admStatus;
    }

}