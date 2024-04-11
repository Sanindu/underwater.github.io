import { Component, OnInit } from '@angular/core';
declare var spect: any;

@Component({
  selector: 'app-spectrogram',
  templateUrl: './spectrogram.component.html',
  styleUrls: ['./spectrogram.component.scss']
})
export class SpectrogramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    spect();
  }

}
