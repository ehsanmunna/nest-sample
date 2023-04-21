import { Test, TestingModule } from '@nestjs/testing';
import { UserToMenuController } from './user-to-menu.controller';

describe('UserToMenuController', () => {
  let controller: UserToMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserToMenuController],
    }).compile();

    controller = module.get<UserToMenuController>(UserToMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
