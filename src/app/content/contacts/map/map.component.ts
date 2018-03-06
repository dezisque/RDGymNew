import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map: any = { lat: 55.770783, lng: 37.396526, zoom: 16, mapTypeId: 'satellite' };
  constructor() { }

  ngOnInit() {
  }

}
