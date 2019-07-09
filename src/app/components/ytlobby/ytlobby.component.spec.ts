import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtlobbyComponent } from './ytlobby.component';

describe('YtlobbyComponent', () => {
  let component: YtlobbyComponent;
  let fixture: ComponentFixture<YtlobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtlobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtlobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
