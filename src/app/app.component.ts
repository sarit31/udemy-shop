import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature?:string ;
  constructor(public router: Router) {

  }
  title = 'udemy-shop';
  OnNavigate(path: string) {
    this.loadedFeature = path;
    console.log(this.loadedFeature )
   //this.router.navigate([path]);
  }
}
