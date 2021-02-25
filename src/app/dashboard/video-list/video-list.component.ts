import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../dashboard.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  constructor(private router: Router) { }

  selectedId: string | undefined;

  @Input() videoList: Video[] | undefined;
  @Output() videoSelectedEvent = new EventEmitter<Video>();

  ngOnInit(): void {
  }

  videoSelected(video: Video): void {
    this.selectedId = video.id;
    this.router.navigate(['dashboard'], { queryParams: {video: `${ video.id }`}});
    this.videoSelectedEvent.emit(video);
  }
}
