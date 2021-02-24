import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleVideoComponent } from './single-video/single-video.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';


const dashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, SingleVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    HttpClientModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
