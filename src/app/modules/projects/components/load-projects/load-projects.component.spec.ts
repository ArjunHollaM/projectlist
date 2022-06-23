import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProjectsComponent } from './load-projects.component';

describe('LoadProjectsComponent', () => {
  let component: LoadProjectsComponent;
  let fixture: ComponentFixture<LoadProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
