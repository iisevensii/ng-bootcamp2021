import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.less']
})
export class StatFiltersComponent implements OnInit {
  filterFormGroup: FormGroup;
  private filterSub: Subscription;

  constructor(fb: FormBuilder, dashboardService: DashboardService) {
    this.filterFormGroup = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });

    this.filterSub = this.filterFormGroup.valueChanges.subscribe(
      filterCriteria => dashboardService.filter.next(filterCriteria)
    );
  }

  ngOnInit(): void {
  }

  onFormSubmitted(): void {
    console.log('Form Submitted', this.filterFormGroup.value);
  }
}
