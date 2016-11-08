import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'requirements',
  styleUrls: [ './requirements.component.sass' ],
  templateUrl: './requirements.component.pug'
})
  
export class RequirementsComponent {

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
