import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAComponent } from './teste-a.component';

describe('TesteAComponent', () => {
  let component: TesteAComponent;
  let fixture: ComponentFixture<TesteAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
