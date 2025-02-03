import React from 'react';
import { Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { postIcon } from '../../svg/svg-xml-list';
import { styles } from './styles';
import { useTheme } from 'react-native-paper';
import { MyMD3Theme } from '~/providers/amity-ui-kit-provider';

interface IBackBtn {
  onPress: () => any;
  isGlobalFeed?: boolean;
}
export default function FloatingButton({
  onPress,
  isGlobalFeed = true,
}: IBackBtn) {
  const theme = useTheme() as MyMD3Theme;

  return (
    <View style={!isGlobalFeed ? styles.otherFeedContainer : styles.container}>
      <Pressable
        onPress={() => {
          onPress && onPress();
        }}
        style={{ ...styles.button, backgroundColor: theme.colors.primary }}
      >
        <SvgXml xml={postIcon('#FFFFFF')} width="30" height="30" />
      </Pressable>
    </View>
  );
}
