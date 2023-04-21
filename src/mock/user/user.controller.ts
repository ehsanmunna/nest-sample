import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user-service/user.service';

@ApiTags('User')
@Controller('project-user-mapping')
export class UserController {
  constructor(private service: UserService) {}

  @Get('/org/:orgKey/project/:projectId')
  @ApiResponse({
    status: 200,
    description: 'get users mock data',
  })
  async index(): Promise<any> {
    const service = await this.service.getUsers();
    return service;
  }
}
