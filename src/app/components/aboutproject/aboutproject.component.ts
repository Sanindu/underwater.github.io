import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var welcomejs :any;
@Component({
  selector: 'app-aboutproject',
  templateUrl: './aboutproject.component.html',
  styleUrls: ['./aboutproject.component.scss']
})
export class AboutprojectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // welcomejs();
  }

}
