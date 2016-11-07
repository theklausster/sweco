import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'about',
  styleUrls: [ './about.component.sass' ],
  templateUrl: './about.component.pug'
})
  
export class AboutComponent {

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
