import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  selectedId: string | undefined;

  @Input() videoList: Video[] | undefined;
  @Output() videoSelectedEvent = new EventEmitter<Video>();

  ngOnInit(): void {
  }

  videoSelected(video: Video): void {
    this.selectedId = video.id;
    this.videoSelectedEvent.emit(video);
  }
}
