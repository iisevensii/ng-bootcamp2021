import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.less']
})
export class StatFiltersComponent implements OnInit {
  filterFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.filterFormGroup = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onFormSubmitted(): void {
    console.log('Form Submitted', this.filterFormGroup.value);
  }
}
