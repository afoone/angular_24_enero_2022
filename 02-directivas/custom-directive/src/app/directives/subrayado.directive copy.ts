import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});


@Directive({
  selector: '[imaginaLorem]'
})
export class LoremDirective implements OnInit {

  private _el: ElementRef;

  constructor(_el: ElementRef) {
    this._el = _el
  }

  ngOnInit(): void {
    this._el.nativeElement.innerText =  lorem.generateParagraphs(1)
  }

}
