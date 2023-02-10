import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideWidgetComponent } from './blog-side-widget.component';

describe('BlogSideWidgetComponent', () => {
  let component: BlogSideWidgetComponent;
  let fixture: ComponentFixture<BlogSideWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSideWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSideWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
