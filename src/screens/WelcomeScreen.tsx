import React from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { DesignNode, welcomeInstance } from '../components/DesignNode';
import { tokens } from '../theme/tokens';

export function WelcomeScreen() {
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: tokens.background }} contentContainerStyle={{ alignItems: 'center' }}>
      <View testID="fid:1283:51" style={{ width: '100%', maxWidth: tokens.frameWidth, minHeight: tokens.frameHeight, backgroundColor: tokens.background }}>
        <DesignNode node={welcomeInstance} compact={width < 600} />
      </View>
    </ScrollView>
  );
}
