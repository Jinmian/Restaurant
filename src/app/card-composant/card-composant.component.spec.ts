import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComposantComponent } from './card-composant.component';

describe('MenuCardComponent', () => {
  let component: CardComposantComponent;
  let fixture: ComponentFixture<CardComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
