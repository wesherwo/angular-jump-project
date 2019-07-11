import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinlobbyComponent } from './joinlobby.component';

describe('JoinlobbyComponent', () => {
  let component: JoinlobbyComponent;
  let fixture: ComponentFixture<JoinlobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinlobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinlobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
