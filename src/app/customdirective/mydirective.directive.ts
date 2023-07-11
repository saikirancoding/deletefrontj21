import { Directive,Input,OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective implements OnInit{

 @Input() appMydirective:string|undefined
  constructor(private ref:ElementRef) { }



  ngOnInit():void{
      this.ref.nativeElement.classList.add(this.appMydirective);
  }
}
