import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' }
    ])
  ],
  exports: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    HomeView,
  ],
})
export class AppModule {}
