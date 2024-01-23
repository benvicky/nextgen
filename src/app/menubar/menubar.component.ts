import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  constructor(private router: Router) {} 

  redirecttoRegister() {
    this.router.navigate(['/register']);
  }

  redirecttoLogin() {
    this.router.navigate(['/login']);
  }



}
