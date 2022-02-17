import { Data } from './Data';
import { Support } from './Support';

export class User {
    data: Data;
    support: Support;

    constructor() {
        this.data = new Data();
        this.support = new Support();
    }
}