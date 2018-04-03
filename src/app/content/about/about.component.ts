import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { 
    PageScrollConfig.defaultDuration = 600;
    PageScrollConfig.defaultScrollOffset = 0;
  }
  fragment;
  route;
  ngOnInit() {

   }

}
