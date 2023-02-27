import { Injectable } from '@nestjs/common';

@Injectable()
export class MockService {
    /**
     * getPeople
     */
    public getPeople() {
        return 'Hello people';
    }
}
