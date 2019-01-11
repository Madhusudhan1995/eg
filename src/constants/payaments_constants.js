var paymentsData =  [
      {
            QRCodeScanning : {
                  ScanQRCode: "Scan QR Code.",
                  ScanQRCodeText: "Scan QR code to get pump number.",
                  data : [{
                    "cardNumber": "**** 0835",
                    "cardName": "Marnixstraat 250, 1016 TL Amsterdam",
                    "image": require('../assets/images/creditcard.png')
                  },
                  {
                    "cardName": "Shell Station, 1234 Main St. London, UK",
                    "cardNumber": "Pump 3",
                    "image": require('../assets/images/Pump.png')
                  }
                 ] 
            }
      }
   

];

export default paymentsData;