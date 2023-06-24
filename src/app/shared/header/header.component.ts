import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  url?:string;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd) {
        console.log(val.url);
        this.url = val.url;
      }
  });
  }
}
