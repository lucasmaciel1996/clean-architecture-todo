import { testFunc } from './server';

describe('Test',()=>{
  it('test result',()=>{
    expect(testFunc()).toBe('test OK');
  });
});