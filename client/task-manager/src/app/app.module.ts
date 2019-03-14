import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';


import { FormsModule }    from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { TaskService } from './services/task.service';
import { SearchTaskPipe } from './pipes/search-task.pipe';
import { SearchEndDatePipe } from './pipes/search-end-date.pipe';
import { SearchParentPipe } from './pipes/search-parent.pipe';
import { SearchPriorityPipe } from './pipes/search-priority.pipe';
import { SearchStartDatePipe } from './pipes/search-start-date.pipe';
import { SearchPriorityFromPipe } from './pipes/search-priority-from.pipe';
import { SearchPriorityToPipe } from './pipes/search-priority-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    SearchTaskPipe,
    SearchEndDatePipe,
    SearchParentPipe,
    SearchPriorityPipe,
    SearchStartDatePipe,
    SearchPriorityFromPipe,
    SearchPriorityToPipe
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
