import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user : any;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('userObj');
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToAdmin() {
    this.router.navigate(['admin-home']);
  }

  goToMatches() {
    this.router.navigate(['matches']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
    window.location.reload();
  }


}
