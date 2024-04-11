import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers = [
    { image: "assets/images/team1.png" },
    { image: "assets/images/team5.png" },
    {  image: "assets/images/team2.png" },
    { image: "assets/images/team3.png" },
    {  image: "assets/images/team4.png" },
    {  image: "assets/images/team6.png" },
    {  image: "assets/images/team7.png" },
  ];

  constructor() { }


  ngOnInit(): void {
  }


}
