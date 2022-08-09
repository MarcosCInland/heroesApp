import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() : void {
    //Ir al backend
    //  Un usuario
    this.authService.login()
    .subscribe( (success:Auth) => { 
      if (success.id) {
        this.router.navigate(['./heroes']); 
      }
    }, 
    failure => {

    })
    //Navegar a la pantalla de heroes
    //this.router.navigate(['./heroes'])
  }

}
