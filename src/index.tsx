import React from 'react';
import {
  Image,
  ImageResizeMode,
  Platform,
  requireNativeComponent,
} from 'react-native';

type GifProps = {
  source: string;
  style: any;
  resizeMode: ImageResizeMode;
  paused: boolean;
};

export const GifViewManager = requireNativeComponent<GifProps>('GifImage');

const GifImage = (props: {
  source: { uri: string };
  style: any;
  resizeMode: ImageResizeMode;
  paused?: boolean;
}) => {
  const { style, source, resizeMode, paused = false } = props;
  const relovedSource = Image.resolveAssetSource(source);
  return Platform.OS === 'ios' ? (
    <GifViewManager
      style={style}
      source={relovedSource.uri}
      resizeMode={resizeMode}
      paused={paused}
    />
  ) : (
    <Image {...props} />
  );
};

export default GifImage;
