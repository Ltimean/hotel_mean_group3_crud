import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {

  hotelForm: FormGroup;
  id:string = '';
  hotelId:string = '';
  hotelName:string = '';
  description:string = '';
  city:string = '';
  hotelAddress:string = '';
  contact : string = '' ;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getHotel(this.route.snapshot.params['id']);
    this.hotelForm = this.formBuilder.group({
      'hotelId' : [null, Validators.required],
      'hotelName' : [null, Validators.required],
      'description' : [null, Validators.required],
      'city' : [null, Validators.required],
      'hotelAddress' : [null, Validators.required],
      'contact' : [null, Validators.required]
    });
  }

  getHotel(id) {
    this.api.getHotel(id).subscribe(data => {
      this.id = data._id;
      this.hotelForm.setValue({
        hotelId: data.hotelId,
        hotelName: data.hotelName,
        description: data.description,
        city: data.city,
        hotelAddress: data.hotelAddress,
        contact: data.contact
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateHotel(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/hotel-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  hotelDetails() {
    this.router.navigate(['/hotel-details', this.id]);
  }
}
