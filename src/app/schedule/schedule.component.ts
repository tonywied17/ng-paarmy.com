import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Eu } from 'src/app/models/eu.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {

  Eu: any;
  Us: any;

  constructor(
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit(): void {
    this.getEu();
    this.getUs();
  }
  getEu(): void {
    this.scheduleService.getEu()
      .subscribe({
        next: (data) => {
          this.Eu = data;

          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getUs(): void {
    this.scheduleService.getUs()
      .subscribe({
        next: (data) => {
          this.Us = data;

          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
