import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradesComponent } from './grades/grades.component';
import { GradepipePipe } from './gradepipe.pipe';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    GradepipePipe,
    FilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
