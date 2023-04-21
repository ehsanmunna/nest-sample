import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  public async getMenus() {
    return [
      {
        menuId: 1,
        menuSortOrder: 1,
        menuname: 'Dashboard Selection',
        icon: null,
        urlName: null,
        isParent: false,
        parentId: null,
        isGroup: true,
        groupId: 0,
        rolePermission: null,
        menuPBIName: null,
        container: null,
      },
      {
        menuId: 2,
        menuSortOrder: 2,
        menuname: 'Management',
        icon: null,
        urlName: 'management',
        isParent: true,
        parentId: null,
        isGroup: false,
        groupId: 1,
        rolePermission: 'REDAS.MANAGEMENT',
        menuPBIName: 'Management',
        container: null,
      },
    ];
  }
}
