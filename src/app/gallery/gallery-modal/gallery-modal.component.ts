import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-gallery-modal',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>gallery-modal works!</p>`,
    styleUrls: ['./gallery-modal.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryModalComponent { }
