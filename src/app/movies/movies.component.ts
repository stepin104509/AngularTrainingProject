import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
//import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviedata:any=[]
  movieonid:any=[]
  
  cartdata:any=[]
  dataId:any;
  content:any;
  closeResult: any;
  public fromparent:any=[]
  public Cart:any=[]
  constructor(private authser:AuthserviceService, private modalSer: NgbModal) { }

  ngOnInit(): void {
    this.moviedata=this.authser.getmovies()
  }
  onclickImage(content:any){

    // imag(){ 
    // this.moviedata.forEach((element:any)=>{
    //   if(id==element.movieid){
    //     this.movieonid.splice(0,this.movieonid.length)
    //     this.movieonid.push(element)
    //   }
    // });
    this.openmodal(content);
  }
  openmodal(content:any){
    this.fromparent=content
    this.modalSer.open(this.fromparent, {
      centered: true,
      backdrop: 'static'
     }),(reason:any)=>{
      this.closeResult=`Dismissed ${this.getDismissReason(reason)}`;
    };


    // this.modalSer.open(content,{ariaLabelledBy:'modal-basic-title'}).result.then((result:any)=>{
    //   // result.data=this.movieonid;
    //  console.log(result);
    //   // this.closeResult=`Closed with : ${result}`;
    // },(reason:any)=>{
    //   this.closeResult=`Dismissed ${this.getDismissReason(reason)}`;
    // });

  }
  private getDismissReason(reason :any):string{
    if(reason===ModalDismissReasons.ESC){
      return 'by pressing ESC';
    } else if(reason=== ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    } else{
      return `with : ${reason}`;
    }
  }
  addmovie(id:any){
    this.moviedata.forEach((element:any) => {
      if(id==element.movieid){
        this.dataId=id
        this.cartdata.push(element)
      }
    });
    alert("Added successfully")
    this.moviedata=this.authser.getmovies();
    console.log(this.cartdata);
    
    }
    opencart(cartdetails:any){
      this.Cart=this.cartdata
      console.log(this.Cart)
      if(this.Cart.length==0){
        alert("No items in the cart");
      }
      else{
        
        this.modalSer.open(cartdetails, {
          centered: true,
          backdrop: 'static'
         });
      }
    }
    
  }

