import { TestBed } from '@angular/core/testing';

import { ITask } from './itask';

describe('ITask', () => {
  let service: ITask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ITask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
