import { Test, TestingModule } from '@nestjs/testing';
import { RoleToMenuService } from './role-to-menu.service';

describe('RoleToMenuService', () => {
  let service: RoleToMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleToMenuService],
    }).compile();

    service = module.get<RoleToMenuService>(RoleToMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
