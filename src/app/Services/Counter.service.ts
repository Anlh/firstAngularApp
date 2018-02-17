export class CounterService {
    activeActions: number = 0;
    inactiveActions: number = 0;


    setActiveActions() {
        console.log('Active actions counter: ', ++this.activeActions);
    }

    setInactiveActions() {
        console.log('Inactive actions counter: ', ++this.inactiveActions);
    }
}