import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-receipt',
  templateUrl: './scan-receipt.component.html',
  styleUrls: ['./scan-receipt.component.scss']
})
export class ScanReceiptComponent implements OnInit {

  video;

  constructor() { }

  ngOnInit() {
    // Grab elements, create settings, etc.
    const camera_preview = document.getElementById('camera_preview') as HTMLDivElement;
    const canvas = document.getElementById('camera_preview_canvas') as HTMLCanvasElement;
    this.video = document.getElementById('camera') as HTMLVideoElement;

    // Put video listeners into place
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        //video.src = window.URL.createObjectURL(stream);
        this.video.srcObject = stream;
        this.video.play();
      });
    }

    // Trigger photo take
    document.getElementById('camera_shutter_button').addEventListener('click', () => {
      canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);
      camera_preview.style.backgroundImage = 'url(\'' + canvas.toDataURL('image/jpeg') + '\')';
      document.getElementById('loading_overlay').classList.add('active')
    });
  }

  ngOnDestroy() {
    this.video.pause()
  }

}
