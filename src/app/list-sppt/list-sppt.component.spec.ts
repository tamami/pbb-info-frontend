import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpptComponent } from './list-sppt.component';

describe('ListSpptComponent', () => {
  let component: ListSpptComponent;
  let fixture: ComponentFixture<ListSpptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
