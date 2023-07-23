import { Animated } from 'react-native';
import React, { PropsWithChildren, useEffect, useRef } from 'react';

interface SkeletonProps extends PropsWithChildren {
  width: string | number;
  height: number;
  backgroundColor?: string;
}
export default function Skeleton({
  width,
  height,
  children,
  backgroundColor,
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.6,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        opacity: opacity.current,
        width,
        height,
      }}
    >
      {children}
    </Animated.View>
  );
}
