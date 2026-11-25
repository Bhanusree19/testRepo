import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { AuthField } from '../components/AuthField';
import { theme } from '../theme';
export function LoginScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 402;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  function login() {
    setMessage(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ? 'Please enter a valid email address.' : !password ? 'Please enter your password.' : 'Login is not connected to an authentication service yet.');
  }
  return <View testID="fid:1284:225" style={styles.screen}>
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView testID="fid:1284:226" contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View testID="fid:1284:227" style={styles.group}>
          {/* The extraction names a background image but supplies no image asset or URL. */}
          <View testID="fid:1284:228" style={styles.background}>
            <Text testID="fid:1284:229" style={[styles.title, compact && styles.compactTitle]}>welcome back !</Text>
            <Text testID="fid:1284:230" style={styles.subtitle}>Please verify your identity to proceed</Text>
            <View style={styles.form}>
              <AuthField nodeId="1284:234" fillId="I1284:234;68:273" labelId="I1284:234;51:152" placeholder="Email" accessibilityLabel="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoComplete="email" />
              <View style={styles.password}>
                <AuthField nodeId="1284:235" fillId="I1284:235;68:273" labelId="I1284:235;51:152" placeholder="Password" accessibilityLabel="Password" value={password} onChangeText={setPassword} secureTextEntry autoComplete="current-password" onSubmitEditing={login} returnKeyType="go" />
              </View>
              <Text testID="fid:1284:233" style={styles.forgot}>Forget your password ?</Text>
              <Pressable testID="fid:1284:231" accessibilityRole="button" accessibilityLabel="Login" onPress={login} style={styles.button}>
                <View testID="fid:I1284:231;31:101" style={styles.buttonFill}>
                  <Text testID="fid:I1284:231;31:104" style={styles.buttonText}>Login</Text>
                </View>
              </Pressable>
              <Text testID="fid:1284:232" style={styles.signup}>Dont have an account ?</Text>
              {!!message && <Text accessibilityLiveRegion="polite" style={styles.message}>{message}</Text>}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>;
}
const styles = StyleSheet.create({
  flex: { flex: 1 }, screen: { flex: 1, backgroundColor: theme.colors.background },
  content: { flexGrow: 1, alignItems: 'center' }, group: { width: '100%', maxWidth: 402, flexGrow: 1 },
  background: { minHeight: 877, flexGrow: 1, paddingTop: 221, backgroundColor: theme.colors.background },
  title: { display: 'flex', marginLeft: 41, maxWidth: 368, marginRight: 0, height: 62, fontFamily: theme.fontFamily, fontSize: 45, fontWeight: '700', lineHeight: 53.7, color: theme.colors.text },
  subtitle: { display: 'flex', marginTop: 5, marginLeft: 48, marginRight: 31, maxWidth: 323, height: 44, fontFamily: theme.fontFamily, fontSize: 24, fontWeight: 510, lineHeight: 28.64, color: theme.colors.text },
  compactTitle: { fontSize: 39, marginRight: 16 },
  form: { marginTop: 75, marginHorizontal: 47 }, password: { marginTop: 15, marginLeft: 1, marginRight: -1 },
  forgot: { display: 'flex', marginTop: 15, alignSelf: 'flex-end', marginRight: -3, width: 183, height: 23, fontFamily: theme.fontFamily, fontSize: 16, fontWeight: 510, lineHeight: 19.09, color: theme.colors.primary },
  button: { marginTop: 52, height: 56 }, buttonFill: { flex: 1, borderRadius: theme.radius, backgroundColor: theme.colors.primary, paddingTop: 11, paddingLeft: '38%' },
  buttonText: { display: 'flex', width: 107, height: 33, fontFamily: theme.fontFamily, fontSize: 24, fontWeight: 510, lineHeight: 28.64, color: '#ffffff' },
  signup: { display: 'flex', marginTop: 15, marginLeft: '21.104%', maxWidth: 216, width: '78.896%', height: 26, fontFamily: theme.fontFamily, fontSize: 16, fontWeight: 510, lineHeight: 19.09, color: theme.colors.text },
  message: { marginTop: 12, fontFamily: theme.fontFamily, fontSize: 14, color: theme.colors.text },
});
