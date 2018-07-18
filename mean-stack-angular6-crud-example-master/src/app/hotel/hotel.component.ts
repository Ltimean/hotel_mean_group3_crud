import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: any;
  displayedColumns = ['hotelId', 'hotelName', 'city'];
  dataSource = new HotelDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getHotels()
      .subscribe(res => {
        console.log(res);
        this.hotels = res;
      }, err => {
        console.log(err);
      });
  }
}

export class HotelDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getHotels();
  }

  disconnect() {

  }
}
