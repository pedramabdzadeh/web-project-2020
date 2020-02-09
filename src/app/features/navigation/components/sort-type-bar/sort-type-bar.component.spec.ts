import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTypeBarComponent } from './sort-type-bar.component';

describe('SortTypeBarComponent', () => {
  let component: SortTypeBarComponent;
  let fixture: ComponentFixture<SortTypeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortTypeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTypeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
