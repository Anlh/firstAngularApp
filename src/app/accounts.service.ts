import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

// We need to attach some metadata to use our LoggingService directive
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    // Provide an event that can be trigger in one component and listened in another component, creating
    // a comunication between them
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {
    }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}