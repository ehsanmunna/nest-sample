import { Module } from '@nestjs/common';
import { MockController } from './mock.controller';
import { MockService } from './mock.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user-service/user.service';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role/role.service';
import { MenusController } from './menus/menus.controller';
import { MenuService } from './menus/menu/menu.service';
import { RoleToMenuController } from './role-to-menu/role-to-menu.controller';
import { RoleToMenuService } from './role-to-menu/role-to-menu/role-to-menu.service';
import { UserToMenuController } from './user-to-menu/user-to-menu.controller';
import { UserToMenuService } from './user-to-menu/user-to-menu/user-to-menu.service';

@Module({
  controllers: [
    MockController,
    UserController,
    RoleController,
    MenusController,
    RoleToMenuController,
    UserToMenuController,
  ],
  providers: [
    MockService,
    UserService,
    RoleService,
    MenuService,
    RoleToMenuService,
    UserToMenuService
  ],
})
export class MockModule {}
