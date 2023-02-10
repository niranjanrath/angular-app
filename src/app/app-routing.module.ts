import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPostListComponent} from "./components/blog-post-list/blog-post-list.component";
import {BlogPostDetailsComponent} from "./components/blog-post-details/blog-post-details.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  { path: '', component: BlogPostListComponent },
  { path: 'posts', component: BlogPostListComponent },
  { path: 'post-details', component: BlogPostDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
