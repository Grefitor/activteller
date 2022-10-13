import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Directive({
  selector: '[appRippleAnimation]'
})
export class RippleAnimationDirective implements OnInit{
  private _colors = new Array<string>(200).fill('#').map((e) =>  e.concat(Math.floor(Math.random()*16777215).toString(16)))
  constructor(private _ElementRef: ElementRef, private _Render: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    fromEvent(this._ElementRef.nativeElement, 'click').pipe(debounceTime(100),map(eve => eve as MouseEvent)).subscribe(e => {
      this.clickEffect(e)
    })
  }
  clickEffect(e: MouseEvent){

    if ((e.target as HTMLElement).classList.contains('modal')) {
      return;
    }

    let rippleColor = Math.floor(Math.random() * this._colors.length);
    // let ripple = document.createElement('div');
    const ripple  = this._Render.createElement('div');
    this._Render.addClass(ripple, 'click-ripple');
    // ripple.className = ('clickRipple');
    this._Render.setStyle(ripple, 'top', `${e.clientY}px`)
    // ripple.style.top = `${e.clientY}px`;
    this._Render.setStyle(ripple, 'left', `${e.clientX}px`)
    // ripple.style.left = `${e.clientX}px`;
    this._Render.setStyle(ripple, 'border-color', this._colors[rippleColor])
    // ripple.style.borderColor = this._colors[rippleColor];
    // console.log(e.target);
    this._Render.appendChild(this.document.body, ripple)
    
    this._Render.listen(ripple, 'animationend', () => {
      this._Render.removeChild(this.document.body, ripple)
    })
    // ripple.addEventListener('animationend',()=>{
    //   ripple?.parentElement?.removeChild(ripple);
    // })
  }
}
