import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]' //camelcase
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = "yellow";
        this.elementRef.nativeElement.style.color = "red";
    }
}