import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user:any;
  username:any;
  password:any;
  Cart:any=[]
  constructor(private httpService: HttpClient,private modalSer: NgbModal) { }
    movie:any= [
      {"movieid":101, "moviename":"Roohi", "productionname":"Jio Studios","movieType":"Horror - Comedy", "director":"Hardik Mehta", "cast1":"Rajkumar Rao", "cast2":"Jahnvi Kapoor","language":"Hindi","poster":"/assests/images/roohi.jfif"},
      {"movieid":102, "moviename":"Mumbai Saga", "productionname":"T-Series","movieType":"Action", "director":"Sanjay Gupta", "cast1":"John Abraham", "cast2":"Kajal Aggarwal","language":"Hindi","poster":"src/assests/images/mumbaisaga.jfif"},
      {"movieid":201, "moviename":"Krack", "productionname":"Saraswathi film Divison","movieType":"Action", "director":"Gopichand", "cast1":"Ravi Teja", "cast2":"Shruti Haasan","language":"Telugu","poster":"src/assests/images/krack.jpeg"},
      {"movieid":202, "moviename":"Uppena", "productionname":"Mythiri Movie Makers","movieType":"Romance", "director":"Bucci Babu", "cast1":"Panja Vaishnav Tej", "cast2":"Kriti Shetty","language":"Telugu","poster":"src/assests/images/uppenna.jfif"}
      ]
  getItems(){
    this.user=[{
      username:"Keerthana",
      password:"kittu123"
    }];
    return this.user;
  }
  getmovies(){
    return [
      {"movieid":101, "moviename":"Roohi", "productionname":"Jio Studios","movieType":"Horror - Comedy", "director":"Hardik Mehta", "cast1":"Rajkumar Rao", "cast2":"Jahnvi Kapoor","language":"Hindi","poster":"/assests/images/roohi.jfif"},
      {"movieid":102, "moviename":"Mumbai Saga", "productionname":"T-Series","movieType":"Action", "director":"Sanjay Gupta", "cast1":"John Abraham", "cast2":"Kajal Aggarwal","language":"Hindi","poster":"src/assests/images/mumbaisaga.jfif"},
      {"movieid":201, "moviename":"Krack", "productionname":"Saraswathi film Divison","movieType":"Action", "director":"Gopichand", "cast1":"Ravi Teja", "cast2":"Shruti Haasan","language":"Telugu","poster":"src/assests/images/krack.jpeg"},
      {"movieid":202, "moviename":"Uppena", "productionname":"Mythiri Movie Makers","movieType":"Romance", "director":"Bucci Babu", "cast1":"Panja Vaishnav Tej", "cast2":"Kriti Shetty","language":"Telugu","poster":"src/assests/images/uppenna.jfif"}
      ]
  }
  
}
