import React from "react";
import { View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

type PersonIconProps = {
  type?: 1 | 2;
  size?: number;
  color?: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

const PersonIcon: React.FC<PersonIconProps> = ({
  type = 1,
  size = 16,
  color = "#111827",
  style,
  accessibilityLabel = "Ícone pessoa",
}) => {
  return (
    <View style={style} accessible accessibilityRole="image" accessibilityLabel={accessibilityLabel}>
      {type === 1 ? (
        <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          <Path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
            fill={color}
          />
        </Svg>
      ) : (
        <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
          <Path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            fill={color}
          />
        </Svg>
      )}
    </View>
  );
};

export default PersonIcon;
