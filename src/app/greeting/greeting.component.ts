import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GreetingService, Greeting } from '../greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  greeting?: Greeting

  constructor(private greetingService: GreetingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.greetingService.getGreeting(params.get("name")).subscribe(
        greeting => {
          this.greeting = greeting;
        }
      )
    })
  }
}
