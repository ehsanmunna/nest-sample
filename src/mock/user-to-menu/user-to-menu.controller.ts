import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserToMenuService } from './user-to-menu/user-to-menu.service';

@Controller('user-to-menu-list')
export class UserToMenuController {
  constructor(private service: UserToMenuService) {}

  @Get('/org/{orgKey}/project/{projectId}/roleid/{roleId}')
  @ApiResponse({
    status: 200,
    description: 'get role to menu mock data',
  })
  async index(): Promise<any> {
    const service = await this.service.getUserToMenus();
    return service;
  }
}
