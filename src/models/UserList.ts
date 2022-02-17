import { Data } from './Data';
import { Support } from './Support';

export class UserList {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data: Data[];
    support: Support;

    constructor() {
        this.data = [] as Data[];
        this.support = new Support();
    }
}