import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GreetingPostComponent } from './greeting-post/greeting-post.component';
import { GreetingComponent } from './greeting/greeting.component';

const routes: Routes = [
  { path: 'upload', component: FileUploadComponent },
  { path: 'greeting/:name', component: GreetingComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: 'greeting-post', component: GreetingPostComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
