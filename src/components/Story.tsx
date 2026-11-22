import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, Label, fid } from './Design';
export function Story({ids,red=false}:{ids:[number,number,number,number];red?:boolean}) {
 return <Box id={ids[0]} style={{width:68,height:88,alignItems:'center'}}>
  <LinearGradient testID={fid(ids[1])} colors={[red?'#ff4641':'#585df9','#ff908d','#ffdbda']} style={{width:68,height:68,borderRadius:100,padding:2}}>
   <View style={{flex:1,borderRadius:100,backgroundColor:'#fff',padding:5}}><Box id={ids[2]} style={{width:54,height:54,borderRadius:100}}/></View>
  </LinearGradient>
  <Label id={ids[3]} style={{marginTop:6}}/>
 </Box>;
}
