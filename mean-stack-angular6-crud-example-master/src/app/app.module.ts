import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'hotels',
    component: HotelComponent,
    data: { title: 'Hotel List' }
  },
  {
    path: 'hotel-details/:id',
    component: HotelDetailComponent,
    data: { title: 'Hotel Details' }
  },
  {
    path: 'hotel-create',
    component: HotelCreateComponent,
    data: { title: 'Create Hotel' }
  },
  {
    path: 'hotel-edit/:id',
    component: HotelEditComponent,
    data: { title: 'Edit Hotel' }
  },
  { path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelDetailComponent,
    HotelCreateComponent,
    HotelEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
