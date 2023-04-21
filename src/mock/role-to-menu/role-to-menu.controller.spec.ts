import { Test, TestingModule } from '@nestjs/testing';
import { RoleToMenuController } from './role-to-menu.controller';

describe('RoleToMenuController', () => {
  let controller: RoleToMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleToMenuController],
    }).compile();

    controller = module.get<RoleToMenuController>(RoleToMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
