import React from "react";
import { View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

type HomeIconProps = {
  type?: 1 | 2 | 3;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const HomeIcon: React.FC<HomeIconProps> = ({
  type = 1,
  size = 18,
  color = "#111827",
  style,
}) => {
  return (
    <View style={style} accessible accessibilityRole="image">
      {type === 1 && (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          accessibilityLabel="Ícone porta de casa (outline)"
        >
          <Path
            d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"
            fill={color}
          />
        </Svg>
      )}

      {type === 2 && (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          accessibilityLabel="Ícone casa (outline)"
        >
          <Path
            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
            fill={color}
          />
        </Svg>
      )}

      {type === 3 && (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          accessibilityLabel="Ícone casa preenchida"
        >
          <Path
            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
            fill={color}
          />
        </Svg>
      )}
    </View>
  );
};

export default HomeIcon;
