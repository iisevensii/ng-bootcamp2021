import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.less']
})
export class StatFiltersComponent implements OnInit {
  filterFormGroup: FormGroup;

  constructor(fb: FormBuilder, dashboardService: DashboardService) {
    this.filterFormGroup = dashboardService.statFiltersForm;
  }

  ngOnInit(): void {
  }

  onFormSubmitted(): void {
    console.log('Form Submitted', this.filterFormGroup.value);
  }
}
