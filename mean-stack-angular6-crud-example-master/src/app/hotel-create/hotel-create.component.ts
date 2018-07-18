import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent implements OnInit {

  hotelForm: FormGroup;
  hotelId:string='';
  hotelName:string='';
  city:string='';
  description:string='';
  hotelAddress:string='';
  contact:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.hotelForm = this.formBuilder.group({
      'hotelId' : [null, Validators.required],
      'hotelName' : [null, Validators.required],
      'city' : [null, Validators.required],
      'description':[null,Validators.required],
      'hotelAddress' : [null, Validators.required],
      'contact' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postHotel(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/hotel-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
