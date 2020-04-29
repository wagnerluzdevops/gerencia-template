import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPerPageComponent } from './select-per-page.component';

xdescribe('SelectPerPageComponent', () => {
  let component: SelectPerPageComponent;
  let fixture: ComponentFixture<SelectPerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
