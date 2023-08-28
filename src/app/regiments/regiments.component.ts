/*
 * File: c:\Users\tonyw\Desktop\PAARMY NG\ng-paarmy.com\src\app\regiments\regiments.component.ts
 * Project: c:\Users\tonyw\Desktop\PAARMY NG\ng-paarmy.com
 * Created Date: Wednesday May 31st 2023
 * Author: Tony Wiedman
 * -----
 * Last Modified: Mon August 28th 2023 7:05:32 
 * Modified By: Tony Wiedman
 * -----
 * Copyright (c) 2023 Tone Web Design, Molex
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-regiments',
  templateUrl: './regiments.component.html',
  styleUrls: ['./regiments.component.scss']
})
export class RegimentsComponent implements OnInit {

  id: number = 69;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = +idParam;
      } else {
        this.router.navigate(['/regiments', this.id]);
      }
    });

  }

}
