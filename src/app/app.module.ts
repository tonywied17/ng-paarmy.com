import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegimentsComponent } from './regiments/regiments.component';
import { MaterialModule } from './material-module'
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './resource-pages/orders/orders.component';
import { EventsComponent } from './resource-pages/events/events.component';
import { MarksmanshipComponent } from './resource-pages/marksmanship/marksmanship.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'regiments', component: RegimentsComponent },
  { path: 'regiments/:id', component: RegimentsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'marksmanship', component: MarksmanshipComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ScheduleComponent,
    RegimentsComponent,
    OrdersComponent,
    EventsComponent,
    MarksmanshipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
