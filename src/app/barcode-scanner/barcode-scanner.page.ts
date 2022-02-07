import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {

  encodedData: any;
  scannedBarcode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private scanner: BarcodeScanner, private alertController: AlertController) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    }
   }

  ngOnInit() {
    console.log(this.scannedBarcode);
  }

  /**
   * Scan barcode.
   */
  scanBarcode()
  {
    this.scanner.scan().then(res => {
      this.scannedBarcode = res;
      console.log(this.scannedBarcode["text"]);
    }).catch(err => {
      alert(err);
    });
  }
}
