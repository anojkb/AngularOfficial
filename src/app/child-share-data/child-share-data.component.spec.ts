import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildShareDataComponent } from './child-share-data.component';

describe('ChildShareDataComponent', () => {
  let component: ChildShareDataComponent;
  let fixture: ComponentFixture<ChildShareDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildShareDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildShareDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
