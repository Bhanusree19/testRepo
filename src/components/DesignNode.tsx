import React from 'react';
import { Linking, Text, View, type TextStyle, type ViewStyle } from 'react-native';
import { tokens } from '../theme/tokens';
import design from '../design/welcome.json';

type DesignElement = (typeof design.elements)[number];
const byParent = new Map<string, DesignElement[]>();
for (const element of design.elements) {
  byParent.set(element.parentId, [...(byParent.get(element.parentId) ?? []), element]);
}

/** Preserve Figma's auto-layout tree and node identifiers without fixed coordinates. */
export function DesignNode({ node, compact = false }: { node: DesignElement; compact?: boolean }) {
  if (node.type === 'text') {
    const isLink = node.text?.startsWith('https://');
    const style: TextStyle = {
      fontFamily: tokens.fontFamily,
      fontSize: node.fontSize,
      fontWeight: String(node.fontWeight) as TextStyle['fontWeight'],
      lineHeight: node.lineHeightPx,
      letterSpacing: node.letterSpacing,
      color: node.colors?.[0] ?? tokens.text,
      // Figma's HEIGHT text fills the column; hugging labels keep their
      // measured width. Allow either to wrap on narrower screens.
      width: node.textAutoResize === 'HEIGHT' ? '100%' : node.width,
      maxWidth: '100%',
      alignSelf: node.textAutoResize === 'HEIGHT' ? 'stretch' : 'flex-start',
      minHeight: node.height,
      flexShrink: 0,
    };
    return <Text testID={`fid:${node.id}`} style={style}
      accessibilityRole={isLink ? 'link' : node.fontSize === 22 || node.fontSize === 34 ? 'header' : undefined}
      onPress={isLink ? () => { void Linking.openURL(node.text!); } : undefined}
    >{node.text}</Text>;
  }
  if (node.isImage) {
    // The extraction contains no image references. Keep the exact avatar geometry;
    // do not substitute an unrelated person's photograph.
    return <View testID={`fid:${node.id}`} accessibilityLabel="Avatar image unavailable"
      style={{ width: node.width, height: node.height, borderRadius: node.radius, backgroundColor: '#e5e5ea' }} />;
  }
  const layout = node.layout;
  const horizontal = layout?.mode === 'HORIZONTAL';
  const style: ViewStyle = {
    flexDirection: horizontal ? 'row' : 'column',
    gap: layout?.itemSpacing ?? 0,
    alignItems: horizontal && layout?.counterAxisAlign === 'CENTER' ? 'center' : undefined,
    alignSelf: horizontal ? 'flex-start' : 'stretch',
    paddingTop: layout?.paddingTop,
    paddingBottom: layout?.paddingBottom,
    paddingLeft: layout?.paddingLeft ? compact ? 24 : layout.paddingLeft : undefined,
    paddingRight: layout?.paddingRight ? compact ? 24 : layout.paddingRight : undefined,
    minHeight: node.height,
  };
  return <View testID={`fid:${node.id}`} style={style}>
    {(byParent.get(node.id) ?? []).map(child => <DesignNode key={child.id} node={child} compact={compact} />)}
  </View>;
}

export const welcomeInstance = design.elements[0];
