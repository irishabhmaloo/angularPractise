import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounr.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingServices: LoggingService, private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    
    this.accountService.addAccount(accountName, accountStatus);

    // const service = new LoggingService();
    // service.LogStatusChange(accountStatus);
    this.loggingServices.LogStatusChange(accountStatus);
  }
}
