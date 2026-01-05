import { Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';

interface IGalleryImage {
  src: string;
}

@Component({
  selector: 'app-detail-gallery',
  imports: [ImageModule, Dialog],
  templateUrl: './detail-gallery.html',
  styleUrl: './detail-gallery.scss',
})
export class DetailGalleryComponent {
  protected readonly galleryDialogKey = signal(0);
  protected showGalleryDialog = signal(false);

  protected readonly signalGalleryImages = signal<IGalleryImage[]>([
    { src: 'https://picsum.photos/seed/construction1/800/600' },
    { src: 'https://picsum.photos/seed/construction2/800/600' },
    { src: 'https://picsum.photos/seed/construction3/800/600' },
    { src: 'https://picsum.photos/seed/construction4/800/600' },
    { src: 'https://picsum.photos/seed/construction5/800/600' },
  ]);

  protected abrirDialogGallery(): void {
    this.galleryDialogKey.set(this.galleryDialogKey() + 1);
    this.showGalleryDialog.set(true);
  }

  protected onDialogClose(): void {
    this.showGalleryDialog.set(false);
    this.galleryDialogKey.set(this.galleryDialogKey() - 1);
  }
}
