import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryWidgetComponent } from './blog-category-widget.component';

describe('BlogCategoryWidgetComponent', () => {
  let component: BlogCategoryWidgetComponent;
  let fixture: ComponentFixture<BlogCategoryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCategoryWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategoryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
