import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, Label, Pin, fid } from '../components/Design';
import { Story } from '../components/Story';
export function TravelScreen(){return <ScrollView style={{backgroundColor:'#fff'}} contentContainerStyle={{flexGrow:1}}>
 <Box id={4} style={s.screen}>
  <View style={s.top}>
   <Box id={32} style={{height:60}}><Box id={33} style={{flexDirection:'row',gap:5}}><Label id={34}/><Label id={35}/></Box><Label id={36} style={{marginTop:13}}/></Box>
   <Box id={58} style={{marginTop:9,marginRight:14}}><Box id={59} style={{width:28,height:20,alignItems:'flex-end',justifyContent:'space-between'}}><Box id={62} style={[s.menu,{width:19}]}/><Box id={61} style={[s.menu,{width:28}]}/><Box id={60} style={[s.menu,{width:14}]}/></Box></Box>
  </View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexGrow:0,marginTop:25,height:88}} contentContainerStyle={{paddingLeft:25,gap:11}}>
   <Story ids={[54,55,56,57]}/><Box id={37} style={{flexDirection:'row',gap:9.7}}><Story ids={[42,43,44,45]}/><Story ids={[46,47,48,49]} red/><Story ids={[38,39,40,41]}/><Story ids={[50,51,52,53]}/></Box>
  </ScrollView>
  <Box id={63} style={{marginTop:32,marginLeft:30,marginRight:19}}><Box id={64} style={s.profile}>
   <Box id={72} style={{flex:1}}><Box id={73}><View style={{flexDirection:'row',alignItems:'flex-start'}}><Label id={74}/><Label id={75}/></View><Label id={76}/></Box></Box>
   <Box id={65}><Box id={66} style={s.arrowCircle}><Box id={67}><Box id={69} style={{width:16,height:11,justifyContent:'center'}}><Box id={70} style={{height:1.8,width:16,backgroundColor:'#fff'}}/><Box id={71} style={{width:8,height:8,borderTopWidth:1.8,borderRightWidth:1.8,borderColor:'#fff',transform:[{rotate:'45deg'}],position:'absolute',right:1}}/></Box></Box></Box></Box>
  </Box></Box>
  <Box id={5} style={{marginTop:39,flex:1}}><Box id={6} style={{backgroundColor:'#585df9',minHeight:440,flex:1}}>
   <Box id={26} style={{height:64,paddingLeft:27,flexDirection:'row',alignItems:'center',gap:9}}><Box id={28}><Pin id={29} size={15} color="#fff"/></Box><Label id={27}/></Box>
   <Box id={7} style={{backgroundColor:'#fff',flex:1,minHeight:376,shadowColor:'#000',shadowOffset:{width:0,height:-3},shadowOpacity:.19,shadowRadius:24}}>
    <Box id={11} style={{paddingTop:33}}><Box id={12} style={{flexDirection:'row',marginLeft:20,marginRight:35,gap:28}}>
     <Box id={13} style={{width:123,height:139,borderRadius:26.74}}/>
     <View style={{flex:1}}><Box id={22} style={{flexDirection:'row',alignItems:'center',gap:8,marginTop:5,height:9}}><Label id={24}/><Box id={23} style={{height:2,backgroundColor:'#f0f1fa',borderRadius:3.17,flex:1}}/></Box>
      <Box id={14} style={{marginTop:9}}><Label id={18} style={{height:49.4}}/><View style={{flexDirection:'row',gap:7,alignItems:'center',marginTop:7.6}}><Box id={20}><Pin id={21}/></Box><Label id={19}/></View>
       <Box id={15} style={{marginTop:16,width:116}}><LinearGradient testID={fid(16)} colors={['#585df9','#5885f9']} style={{height:31,borderRadius:4.716,justifyContent:'center',alignItems:'center'}}><Label id={17}/></LinearGradient></Box>
      </Box>
     </View>
    </Box></Box>
    <Box id={8} style={{marginTop:16,marginHorizontal:25}}><Label id={10}/><Label id={9} style={{marginTop:11,height:73,overflow:'hidden'}}/></Box>
    <LinearGradient testID={fid(25)} colors={['rgba(255,255,255,0)','#ffffff']} style={{height:62}}/>
    <Box id={30} style={{alignSelf:'center'}}><Box id={31} style={{width:107,height:4,borderRadius:3.17,backgroundColor:'#e4e6f2'}}/></Box>
   </Box>
  </Box></Box>
 </Box>
</ScrollView>}
const s=StyleSheet.create({screen:{width:'100%',minHeight:812,backgroundColor:'#fff',overflow:'hidden'},top:{marginTop:39,marginHorizontal:25,flexDirection:'row',justifyContent:'space-between'},menu:{height:3,backgroundColor:'#93a3b4'},profile:{height:89,borderRadius:20,backgroundColor:'#232539',paddingLeft:20,paddingRight:20,flexDirection:'row',alignItems:'center',gap:10},arrowCircle:{width:42,height:42,borderRadius:52,backgroundColor:'#585df9',alignItems:'center',justifyContent:'center'}});
