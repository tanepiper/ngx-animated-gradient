import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-animated-gradient');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('anthonynahas/ngx-animated-gradient/tree/master/demo');
  }
}
