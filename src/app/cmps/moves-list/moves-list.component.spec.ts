import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesListComponent } from './moves-list.component';

describe('MovesListComponent', () => {
  let component: MovesListComponent;
  let fixture: ComponentFixture<MovesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
