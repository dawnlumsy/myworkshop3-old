import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processForm(form: NgForm){
    console.info("processing form", form.value);
    form.reset();
  }
  

}
