import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: MemberHomeComponent;
  let fixture: ComponentFixture<MemberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
