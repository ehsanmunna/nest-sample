import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public async getUsers() {
    return [
      {
        email: 'dummy@redaspilotorg.onmicrosoft.com',
        fullName: 'Dummy User',
        mobilePhone: 'dummy',
        projectName: 'dummy',
        projectUserId: 1,
        userId: 1,
        projectId: 1,
        entryBy: 'dummy',
        updatedBy: 'dummy',
        updatedTime: 'dummy',
        isActive: true,
      },
    ];
  }
}
