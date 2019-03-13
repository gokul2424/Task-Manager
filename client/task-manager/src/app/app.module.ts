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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddtaskComponent,
    UpdatetaskComponent
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
