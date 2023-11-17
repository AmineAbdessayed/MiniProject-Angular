import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChambreComponent } from './get-chambre.component';

describe('GetChambreComponent', () => {
  let component: GetChambreComponent;
  let fixture: ComponentFixture<GetChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
