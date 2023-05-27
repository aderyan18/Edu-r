import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from '../../Styles/color';

export default function Home() {
  return (
    <SafeAreaView>
      <Text style={{color: COLOR.BLACK}}>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
