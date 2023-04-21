import { Test, TestingModule } from '@nestjs/testing';
import { UserToMenuService } from './user-to-menu.service';

describe('UserToMenuService', () => {
  let service: UserToMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserToMenuService],
    }).compile();

    service = module.get<UserToMenuService>(UserToMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
