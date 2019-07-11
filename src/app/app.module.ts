import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { PostsComponent } from './posts/posts.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'container' },
  { path: 'container', component: ContainerComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'dataSharing', component: DataSharingComponent },
  {path:'a',component:AComponent},
  {path : 'b',component : BComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PostsComponent,
    DataSharingComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  exports: [RouterModule,HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
