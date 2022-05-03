import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Greeting, GreetingService } from '../greeting.service';

@Component({
  selector: 'app-greeting-post',
  templateUrl: './greeting-post.component.html',
  styleUrls: ['./greeting-post.component.css']
})
export class GreetingPostComponent implements OnInit {

  greeting? : Greeting

  uploadForm = this.formBuilder.group({
    IdField: ['', [Validators.pattern('[0-9]+'), Validators.required]],
    ContentField: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private greetingService: GreetingService) { }

  ngOnInit(): void {
  }

  submit(){
    let greeting : Greeting = {
      id : this.uploadForm.value["IdField"],
      content : this.uploadForm.value["ContentField"]
    }
    this.greetingService.sendGreeting(
      greeting
      ).subscribe((response) => this.greeting = response)
  }
}
