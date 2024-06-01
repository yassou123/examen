import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsShowsComponent } from './lists-shows.component';

describe('ListsShowsComponent', () => {
  let component: ListsShowsComponent;
  let fixture: ComponentFixture<ListsShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
