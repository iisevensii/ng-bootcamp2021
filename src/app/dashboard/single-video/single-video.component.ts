import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.less']
})
export class SingleVideoComponent implements OnInit {

  constructor() { }

  @Input() video: Video;
  @Input() selected: boolean;

  ngOnInit(): void {
  }

}
