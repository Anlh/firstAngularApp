import {Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    // providers: [LoggingService]
})
export class NewAccountComponent {
    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
        // Subscribe to the event emitted from the account component through the accounts.service event emitted declared there
        this.accountsService.statusUpdated.subscribe(
            (status: string) => alert('New status for: ' + status)
        )
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountsService.addAccount(accountName, accountStatus);
        // this.loggingService.logStatusChange(accountStatus);
    }
}
