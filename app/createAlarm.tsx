import { ContainerView } from "@/components/ContainerView";
import { ThemedView } from "@/components/ThemedView";
import { ScreenHeader } from "@/components/ScreenHeader";
import { AlarmCreationForm } from "@/components/AlarmCreationForm";

export default function Page() {
  return (
    <ContainerView>
      <ThemedView style={{ padding: 10, flex: 1, gap: 20 }}>
        <ScreenHeader headerText="Ring in less than a minute" />
        <AlarmCreationForm />
      </ThemedView>
    </ContainerView>
  );
}
