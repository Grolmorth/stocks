import { ChangePipe } from './../../pipes/change.pipe';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-300%) rotateY(180deg) rotateZ(90deg)' }),
        animate(1000)
      ])
    ])
  ]

})
export class SummaryComponent {

  @Input() stock: any;



}
