import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPostComponent } from './greeting-post.component';

describe('GreetingPostComponent', () => {
  let component: GreetingPostComponent;
  let fixture: ComponentFixture<GreetingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
