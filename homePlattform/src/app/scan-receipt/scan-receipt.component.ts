import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';

@Component({
  selector: 'app-scan-receipt',
  templateUrl: './scan-receipt.component.html',
  styleUrls: ['./scan-receipt.component.scss']
})
export class ScanReceiptComponent implements OnInit, OnDestroy {

  private video: HTMLVideoElement;
  private stream: MediaStream;

  constructor(private readonly router: Router) {

  }

  ngOnInit() {
    // Grab elements, create settings, etc.
    const cameraPreview = document.getElementById('camera_preview') as HTMLDivElement;
    const canvas = document.getElementById('camera_preview_canvas') as HTMLCanvasElement;
    this.video = document.getElementById('camera') as HTMLVideoElement;

    // Put video listeners into place
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then((stream) => {
        // video.src = window.URL.createObjectURL(stream);
        this.video.srcObject = stream;
        this.stream = stream;
        this.video.play();
      });
    }

    // Trigger photo take
    document.getElementById('camera_shutter_button').addEventListener('click', () => {
      canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);
      cameraPreview.style.backgroundImage = 'url(\'' + canvas.toDataURL('image/jpeg') + '\')';
      document.getElementById('loading_overlay').classList.add('active');
      setTimeout(() => {
        console.log('pause');
        this.stream.getVideoTracks().forEach(track => track.stop());
        this.video.pause();
        this.router.navigateByUrl('/inventory/:fromScan');
      }, 500);
    });
  }

  ngOnDestroy() {
    this.stream.getVideoTracks().forEach(track => track.stop());
    this.video.pause();
  }

}
