import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChambreComponent } from './details-chambre.component';

describe('DetailsChambreComponent', () => {
  let component: DetailsChambreComponent;
  let fixture: ComponentFixture<DetailsChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
