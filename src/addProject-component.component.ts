import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addProject-component',
  templateUrl: './addProject-component.component.html',
  styleUrls: ['./addProject-component.component.css']
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      // You can perform an HTTP request here to add the project to the database
      // Retrieve the form values using this.projectForm.value
      console.log('Form submitted successfully!', this.projectForm.value);
    } else {
      console.log('Invalid form data. Please check the fields.');
    }
  }
}
