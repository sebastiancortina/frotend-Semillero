import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSemilleroComponent } from './list-semillero.component';

describe('ListSemilleroComponent', () => {
  let component: ListSemilleroComponent;
  let fixture: ComponentFixture<ListSemilleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSemilleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
