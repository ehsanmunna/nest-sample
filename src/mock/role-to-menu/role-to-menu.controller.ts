import { Controller, Get } from '@nestjs/common';
import { RoleToMenuService } from './role-to-menu/role-to-menu.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('role-to-menu-list')
export class RoleToMenuController {
  constructor(private service: RoleToMenuService) {}

  @Get('/org/{orgKey}/project/{projectId}/roleid/{roleId}')
  @ApiResponse({
    status: 200,
    description: 'get role to menu mock data',
  })
  async index(): Promise<any> {
    const service = await this.service.getRoleToMenus();
    return service;
  }
}
