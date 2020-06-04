import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showOut = new EventEmitter<boolean>();
  constructor( private router: Router ) { }
  flag = true;
  ngOnInit() {
  }

  login() {
    console.log('lol');
    this.router.navigateByUrl('/login');
  }

  NomostrarOutlet( f = false ) {
    this.showOut.emit(f);
  }

}
