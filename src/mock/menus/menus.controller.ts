import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { MenuService } from './menu/menu.service';

@Controller('menus')
export class MenusController {
  constructor(private service: MenuService) {}
  @Get('/org/:orgKey')
  @ApiResponse({
    status: 200,
    description: 'get users mock data',
  })
  async index(): Promise<any> {
    const service = await this.service.getMenus();
    return service;
  }
}
