import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id',
    }),
    AppModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class BrowserAppModule {}
