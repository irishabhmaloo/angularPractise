import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounr.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingServices: LoggingService, private accountService: AccountService) {}
  
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingServices.LogStatusChange(status);
  }
}
