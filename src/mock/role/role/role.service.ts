import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  public async getRoles() {
    return [
      {
        roleId: 5,
        roleName: 'Admin',
        roleShortName: 'ad',
        menuIdFk: 'string',
        isActive: true,
        entryBy: null,
        updatedBy: null,
        updatedDate: '2023-04-10T11:07:29.203',
      },
    ];
    // return [
    //   {
    //     userFullName: 'Hafizah AZENI (REDAS)',
    //     roleName: 'admin',
    //     roleId: 1,
    //   },
    //   { roleName: 'admin - 1', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student', roleId: 3 },
    //   { roleName: 'admin', roleId: 1 },
    //   { roleName: 'Stuff', roleId: 2 },
    //   { roleName: 'Student - 3', roleId: 3 },
    // ];
  }
}
