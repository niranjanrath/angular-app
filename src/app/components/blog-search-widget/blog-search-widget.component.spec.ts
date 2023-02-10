import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchWidgetComponent } from './blog-search-widget.component';

describe('BlogSearchWidgetComponent', () => {
  let component: BlogSearchWidgetComponent;
  let fixture: ComponentFixture<BlogSearchWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSearchWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
