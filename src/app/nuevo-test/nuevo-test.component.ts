import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-test',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>nuevo-test works!</p>`,
  styleUrl: './nuevo-test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuevoTestComponent { }
