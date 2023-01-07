import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-regiments',
  templateUrl: './regiments.component.html',
  styleUrls: ['./regiments.component.scss']
})
export class RegimentsComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get){
        this.id = +params.get('id')
      }
    })

  }

}
