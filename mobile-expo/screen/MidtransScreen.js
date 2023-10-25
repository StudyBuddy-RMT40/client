import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MidtransScreen({ route }) {
  const navigation = useNavigation()
  const { paymentGatewayURL } = route.params;

  const handlePaymentFinished = (data) => {
    console.log('Received data:', data);

    if (data && data.message === 'paymentFinished') {
      console.log('Payment Success:', data);
      navigation.navigate("Home")
    } else {
      console.log('Unknown message or failed payment:', data);

    }
  };

  // const callback = () => {
  //   console.log("a")
  //   navigation.navigate("Dashboard")
  // }

  console.log('Payment Gateway URL:', paymentGatewayURL);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: paymentGatewayURL }}
        // onMessage={event => {
        //   const data = JSON.parse(event.nativeEvent.data);

        //   console.log('Received message:', data);

        //   handlePaymentFinished(data);
        // }}
        onNavigationStateChange={(navState) => {
          const status = navState.url.split("/").includes("success")
          console.log(status, '-> ini status');
          console.log(navState)
          if (status == true) {
            // callback()
          }
        }}
      />
    </View>
  );
}
