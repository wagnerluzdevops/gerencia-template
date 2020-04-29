import { Directive, ElementRef, AfterViewInit, Input, Renderer2 } from '@angular/core'

@Directive({
    selector: '[loading]'
})
export class LoadingDirective  {

    @Input() set appLoading(loading:boolean){
        if (loading) {
            const div1 = this.renderer.createElement('div')
            const div2 = this.renderer.createElement('div')
            const div3 = this.renderer.createElement('div')
            
            this.renderer.appendChild(this.el.nativeElement, div1)
            this.renderer.appendChild(div1, div2)
            this.renderer.appendChild(div1, div3)

            this.renderer.addClass(div1, 'sk-spinner')
            this.renderer.addClass(div1, 'sk-spinner-double-bounce')

            this.renderer.addClass(div2, 'sk-double-bounce1')

            this.renderer.addClass(div3, 'sk-double-bounce2')
            
            this.renderer.addClass(this.el.nativeElement, 'sk-loading')
        }else {
            this.renderer.removeClass(this.el.nativeElement, 'sk-loading')
        }
    }


    constructor(private el: ElementRef, private renderer: Renderer2) { }
}
