import myKey from './khaltiKey';
import axios from 'axios'
let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: '123456',
  productName: 'ECommerce',
  productUrl: 'http://localhost:3000',
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      axios
        .get(
          `https://a.khalti.com/api/v2/${data.token}/${data.amount}/${myKey.secretKey}`
        )
        .then((response) => {
          console.log(response.data);
          alert('Transaction Success');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log('widget is closing');
    },
  },
  paymentPreference: [
    'KHALTI',
    'EBANKING',
    'MOBILE_BANKING',
    'CONNECT_IPS',
    'SCT',
  ],
};

export default config;
