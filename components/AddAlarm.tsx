import React, { forwardRef } from "react";
import { Pressable, View, PressableProps } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

export const AddAlarmButton = forwardRef<View, PressableProps>(
  ({ style, ...rest }, ref) => {
    return (
      <Pressable style={style} {...rest} ref={ref}>
        <View
          style={{
            backgroundColor: "#d40202",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <IconSymbol size={32} name="plus.app.fill" color={"white"} />
        </View>
      </Pressable>
    );
  }
);

AddAlarmButton.displayName = "AddAlarmButton";
