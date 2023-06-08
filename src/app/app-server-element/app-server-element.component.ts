import { 
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, 
  Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-app-server-element',
  templateUrl: './app-server-element.component.html',
  styleUrls: ['./app-server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input() element: {type:string, name:string, content:string};

  constructor() {
    console.log("Constrcutor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContent called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterChecked called");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
  }
}
