import { Component, Input } from '@angular/core';
import { ProductI } from 'src/app/models/interface';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() product!: any;
}
