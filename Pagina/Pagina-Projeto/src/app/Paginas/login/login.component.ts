import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  cpf="";
  senha="";
  errormsg="";
  
  constructor(){

  }

  ngOnInit(): void {
  }

  onSubmit(){

    if (this.cpf.trim().length === 0) {
      this.errormsg = "Username is required";
    } else if (this.senha.trim().length === 0) {
      this.errormsg = "Password is required";
    } else{ 
      this.errormsg = "";
}}
}
