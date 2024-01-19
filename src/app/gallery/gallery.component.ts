import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
/**
 * TODO: Lightbox/pop-up modal for images, maybe a carousel, also side not upload gettysburg images
 */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery:any;
  temp: any;
  p: number = 1;
  selected:any;

  constructor(private service:GalleryService) {}
   
  ngOnInit() {
      this.service.getGallery()
        .subscribe(response => {
          this.temp = response;
          this.gallery = this.temp.reverse()
        });

  }

  selectImage(url: any){
    
  alert(url)

  }

  open(url: any, title: any, w: any, h: any){
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }

}
