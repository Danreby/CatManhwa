import React from "react";
import { View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

type SearchIconProps = {
  type?: 1;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const SearchIcon: React.FC<SearchIconProps> = ({
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
          accessibilityLabel="Ícone pesquisar"
        >
          <Path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            fill={color}
          />
        </Svg>
      )}
    </View>
  );
};

export default SearchIcon;
