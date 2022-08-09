import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() : void {
    //Ir al backend
    //  Un usuario

    //Navegar a la pantalla de heroes
    this.router.navigate(['./heroes'])
  }

}
