import { Injectable } from '@nestjs/common';

@Injectable()
export class MockService {
    /**
     * getPeople
     */
    public sayHello() {
        return 'Hello Developer';
    }
    public sayHelloTo(name: string) {
        return `Hello ${name}, you are working as a developer`;
    }
}
