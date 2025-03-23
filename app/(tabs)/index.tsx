import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { ContainerView } from "@/components/ContainerView";
import { AddAlarmButton } from "@/components/AddAlarm";
import { AlarmList } from "@/components/AlarmList";
import { IconSymbol } from "@/components/ui/IconSymbol";
const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();
  return (
    <ContainerView
      style={[
        styles.topContainer,
        {
          paddingBottom: tabBarHeight + insets.bottom,
        },
      ]}
    >
      <ThemedView style={styles.stepContainer}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Welcome! </ThemedText>
          <HelloWave />
        </View>
        <ScrollView style={styles.scrollView}>
          <ThemedView
            style={{ height: height * 0.24, justifyContent: "center" }}
          >
            <ThemedText type="title">Upcoming Alarm</ThemedText>
          </ThemedView>

          {/* Alaram list */}
          <AlarmList />
          {/* for spacing in last alarm */}
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </ThemedView>
      <Link href="/createAlarm" asChild>
        <Pressable
          style={{
            position: "absolute",
            bottom: 32,
            right: 20,
            width: 56,
            height: 56,
          }}
        >
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
        {/* <AddAlarmButton
          style={{
            position: "absolute",
            bottom: 32,
            right: 20,
            width: 56,
            height: 56,
          }}
        /> */}
      </Link>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    margin: 8,
  },
  topContainer: {
    position: "relative",
  },
  stepContainer: {
    color: "white",
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});
