import React from 'react';
import { Text, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { typography } from '../theme/typography';
export const fid = (id:number) => `fid:1277:${id}`;
const fonts:Record<string,string>={Roboto400:'Roboto_400Regular',Roboto900:'Roboto_900Black',Montserrat500:'Montserrat_500Medium',Montserrat600:'Montserrat_600SemiBold',Montserrat700:'Montserrat_700Bold',Inter500:'Inter_500Medium',Inter600:'Inter_600SemiBold',Lato600:'Lato_700Bold'};
export function Label({id,style}:{id:number;style?:StyleProp<TextStyle>}) {
 const t=typography[String(id) as keyof typeof typography];
 return <Text testID={fid(id)} style={[{fontFamily:fonts[t.fontFamily+t.fontWeight],fontSize:t.fontSize,lineHeight:t.lineHeightPx,letterSpacing:t.letterSpacing,color:t.colors[0]},style]}>{t.text}</Text>;
}
export function Box({id,style,children}:{id:number;style?:StyleProp<ViewStyle>;children?:React.ReactNode}){return <View testID={fid(id)} style={style}>{children}</View>}
export function Pin({id,size=11,color='#585df9'}:{id:number;size?:number;color?:string}) {
 return <Box id={id} style={{width:size*.8,height:size,alignItems:'center'}}><View style={{width:size*.7,height:size*.7,borderRadius:size,borderWidth:2,borderColor:color}}/><View style={{width:4,height:4,backgroundColor:color,transform:[{rotate:'45deg'}],marginTop:-3}}/></Box>
}
