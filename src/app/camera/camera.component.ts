import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-articles',
	templateUrl: './camera.component.html',
	styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

	@ViewChild('videoElement') videoElement: any;
	@ViewChild("canvas") canvas: ElementRef;



	public captures: Array<any>;
	public video: any;
	public displayControls: any;
	public theStream: any;
	public cameraReady: boolean;

	public notSuported: boolean;

	constructor(public snackBar: MatSnackBar) {
		this.captures = [];

		this.status()
	}

	status() {
		var browser = <any>navigator;
		if (!browser.getUserMedia && !browser.webkitGetUserMedia &&
			!browser.mozGetUserMedia && !browser.msGetUserMedia) {
				this.snackBar.open("Seu navegador não suporta essa funcionalidade", "ok", { duration: 5000, verticalPosition:'bottom'}) 
				this.notSuported = true
		}
	}


	ngOnInit() { this.video = this.videoElement.nativeElement; }

	start() { this.initCamera({ video: true, audio: false }) }
	sound() { this.initCamera({ video: true, audio: true }) }

	resume() { this.video.play() }
	pause() {
		this.video.pause() 
	}

	initCamera(config: any) {
		var browser = <any>navigator;

		browser.getUserMedia = (browser.getUserMedia ||
			browser.webkitGetUserMedia ||
			browser.mozGetUserMedia ||
			browser.msGetUserMedia);

		browser.mediaDevices.getUserMedia(config).then(stream => {
			this.video.src = window.URL.createObjectURL(stream);
			this.video.play();

			this.theStream = stream;
			this.cameraReady = true;
		})
	}

	capture() {
		var context = this.canvas.nativeElement.getContext("2d").drawImage(this.videoElement.nativeElement, 0, 0, 640, 480);
		this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
	}






}
