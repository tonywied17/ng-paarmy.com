import { OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScoreService } from 'src/app/services/score.service';
import { DiscordService } from 'src/app/services/discord.service';
import { Eu } from 'src/app/models/eu.model';


const date = new Date();
const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() + 1)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
[x: string]: any;
  EuToday: any;
  EuTomorrow: any;
  UsToday: any;
  UsTomorrow: any;
  score: any;
  online: any;
  reg72 = [];
  reg69 = [];
  reg116 = [];
  springfield= [];
  enfield= [];
  lorenz= [];
  mississippi= [];
  @ViewChild(MatMenuTrigger, { static: false }) matMenuTrigger: MatMenuTrigger;

  recheckIfInMenu: boolean;
  
 bounce: any;
  title = 'paarmycom';
  rc:any;
  rkState = true;
  intervalID: any;
  currentRoute: string;
  menuOpen = false;

  todayName = date.toLocaleString('en-US', {
    weekday: 'long',
  });

  tomorrowName = tomorrow.toLocaleString('en-US', {
    weekday: 'long',
  });

  

  constructor(private router: Router, private scheduleService: ScheduleService, private scoreService: ScoreService, private discordService: DiscordService,) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            console.log('Route change detected');
            
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;          
            console.log(this.currentRoute);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });

}

euByToday(day: string): void {
  // console.log(day)
  this.scheduleService.euByDay(day)
    .subscribe({
      next: (data) => {
        this.EuToday = data;
      },
      error: (e) => console.error(e)
    });
}



euByTomorrow(day: string): void {
  // console.log(day)
  this.scheduleService.euByDay(day)
    .subscribe({
      next: (data) => {
        this.EuTomorrow = data;
      },
      error: (e) => console.error(e)
    });
}

usByToday(day: string): void {
  // console.log(day)
  this.scheduleService.usByDay(day)
    .subscribe({
      next: (data) => {
        this.UsToday = data;
      },
      error: (e) => console.error(e)
    });
}

usByTomorrow(day: string): void {
  // console.log(day)
  this.scheduleService.usByDay(day)
    .subscribe({
      next: (data) => {
        this.UsTomorrow = data;
      },
      error: (e) => console.error(e)
    });
}

  toggle() {
    this.menuOpen = !this.menuOpen
  }

  scroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scores(){
    this.scoreService.getScores()
    .subscribe(response => {
      this.score = response;

      this.score.forEach(rifle => {
        if(rifle.rifle == 'springfield'){
          this.springfield.push(rifle);

        }

        if(rifle.rifle == 'enfield'){
          this.enfield.push(rifle);

        }

        if(rifle.rifle == 'lorenz'){
          this.lorenz.push(rifle);

        }

        if(rifle.rifle == 'mississippi'){
          this.mississippi.push(rifle);

        }
      });


    });
  }

  openMaps() {
    window.open('https://app.paarmy.com/maps', '_blank');
  }

  onlineUsers(){
    this.discordService.getOnline()
    .subscribe(response => {
      this.online = response;

      this.online.members.forEach(user => {

        if(user.username.includes("PA")){
          
          if(user.username.includes("69")){
            this.reg69.push(user)
          }

          if(user.username.includes("72")){
            this.reg72.push(user)
          }

          if(user.username.includes("116")){
            this.reg116.push(user)
          }

          

        }
      });

      console.log(this.reg69)
          console.log(this.reg72)
          console.log(this.reg116)
    });
  }
  ngOnInit(): void {
    this.recheckIfInMenu = false;
    this.rebelKiller()
    this.euByToday(this.todayName)
    this.euByTomorrow(this.tomorrowName)
    this.usByToday(this.todayName)
    this.usByTomorrow(this.tomorrowName)
    this.scores()
    this.onlineUsers()
    
  }


  closeMenus() {
        this.matMenuTrigger.closeMenu();
  }

  rebelKiller() {

         const d = new Date();
         const d1 = new Date(2020, 2, 24, 5, 20, 23);
         const d2 = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
         const diffMs = +d2 - +d1;
         const diffMins = Math.floor((diffMs / 1000) / 60);
   
         if(this.rkState){
          this.rc = `Rebels Killed: ${diffMins.toLocaleString('en-US')}`
          console.log(this.rc)
         }else{
          this.rc = "February 24th 2020, 5:20:23";
          console.log(this.rc)
         }
         
   

   }
   paApp(){
    window.open(
      'https://app.paarmy.com',
      '_blank'
    )
   }
   joinDiscord(){
    window.open(
      'https://discord.com/invite/YKVV2ZdXKp',
      '_blank'
    )
   }
   
   toggleRK() {
   
     this.rkState = !this.rkState

     console.log(this.rkState)

     this.rebelKiller();
   
   }






}


