import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userN:any;
  pasS:any;
  formName:any;
  details:any;
  sample:any;
  constructor(
    private au: AuthserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {   }

  // details=this.au.getItems();
  
  ngOnInit() {
    this.formName=this.fb.group({
      Uname:'',
      pwd:''
    });
  }

  onSubmit(){
    this.userN=this.formName.value;
    this.pasS=this.formName.value;
    console.log(this.userN);
    this.sample=this.userN;
    this.details=this.au.getItems();
    console.log(this.details[0]);
    for(const i in this.details){
        // console.log(this.details);
        if(this.sample.Uname==this.details[i].username && this.sample.pwd==this.details[i].password){
          console.log("Success");
          this.router.navigate(['/home']);
        }
        else{
          alert("Invalid Credentials");
        
      }
    }
  }


}
