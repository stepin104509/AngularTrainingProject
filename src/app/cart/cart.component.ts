import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Cart:any=[]
  constructor(private cartdata:AuthserviceService) { }

  ngOnInit(): void {
    this.moviedata=this.cartdata.getmovies();
  }
  moviedata:any;
  

}
