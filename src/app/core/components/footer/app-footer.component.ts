import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

    ownerApplication: string;
    yearCurrent: number;

    constructor() {
        this.ownerApplication = `Silva's Technology`;
        this.yearCurrent = new Date().getFullYear();
    }
}
