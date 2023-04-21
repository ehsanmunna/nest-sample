import { Controller, Get, Req } from '@nestjs/common';
import { RoleService } from './role/role.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('role-list')
export class RoleController {
  constructor(private service: RoleService) {}

  @Get('/org/:orgKey')
  @ApiResponse({
    status: 200,
    description: 'get role list data',
  })
  async list(@Req() req: Request | any): Promise<any> {
    const service = await this.service.getRoles();
    return service;
  }
}
