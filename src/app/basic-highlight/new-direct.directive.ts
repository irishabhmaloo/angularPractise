import { Directive , OnInit , Renderer2, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNewDirect]'
})
export class NewDirectDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  constructor(private elRef: ElementRef,  private renderer: Renderer2) { 
    
  }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color' , 'green');
  }
  
  @HostListener('mouseenter') mouseover(evenData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , this.highlightColor);
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , this.defaultColor);
  }
}
