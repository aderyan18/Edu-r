import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from '../../Styles/color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Home() {
  const api = 'https://stunting.fihaa-app.com/stunting?limit=5';

  const [data, setData] = useState([]);
  const getStunting = () => {
    fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setData(res.data));
  };

  useEffect(() => {
    getStunting();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: COLOR.BLACK}}>Nama</Text>
          <Text style={{color: COLOR.BLACK}}>Umur</Text>
          <Text style={{color: COLOR.BLACK}}>Berat</Text>
          <Text style={{color: COLOR.BLACK}}>Tinggi</Text>
        </View>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <View
                key={index}
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                <Text style={{color: COLOR.BLACK}}>{item.username}</Text>
                <Text style={{color: COLOR.BLACK}}>{item.umur}</Text>
                <Text style={{color: COLOR.BLACK}}>{item.berat_badan}</Text>
                <Text style={{color: COLOR.BLACK}}>{item.tinggi_badan}</Text>
              </View>
            );
          })
        ) : (
          <View>
            <Text style={{color: COLOR.BLACK}}>Data Kosong</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
