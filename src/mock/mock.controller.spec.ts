import { MockController } from "./mock.controller";
import { MockService } from "./mock.service";


describe('MockController', () => {
  let mockController: MockController;
  let mockService: MockService;

  beforeEach(() => {
    mockService = new MockService();
    mockController = new MockController(mockService);
  });

  describe('Say hello to developer', () => {
    it('should return a string value: Hello Developer', async () => {
      const result = 'Hello Developer';
      expect(await mockController.sayHello()).toBe(result);
    });
  });
});