import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSquadComponent } from './create-squad.component';

describe('CreateSquadComponent', () => {
  let component: CreateSquadComponent;
  let fixture: ComponentFixture<CreateSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSquadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
