import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  hotel = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getHotelDetails(this.route.snapshot.params['id']);
  }

  getHotelDetails(id) {
    this.api.getHotel(id)
      .subscribe(data => {
        console.log(data);
        this.hotel = data;
      });
  }

  deleteHotel(id) {
    this.api.deleteHotel(id)
      .subscribe(res => {
        alert("confirm Deleting");
          this.router.navigate(['/hotels']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
