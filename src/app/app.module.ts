import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogNavigationComponent } from './components/blog-navigation/blog-navigation.component';
import { BlogFooterComponent } from './components/blog-footer/blog-footer.component';
import { BlogSideWidgetComponent } from './components/blog-side-widget/blog-side-widget.component';
import { BlogSearchWidgetComponent } from './components/blog-search-widget/blog-search-widget.component';
import { BlogCategoryWidgetComponent } from './components/blog-category-widget/blog-category-widget.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogNavigationComponent,
    BlogFooterComponent,
    BlogSideWidgetComponent,
    BlogSearchWidgetComponent,
    BlogCategoryWidgetComponent,
    BlogPostListComponent,
    BlogPostDetailsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
