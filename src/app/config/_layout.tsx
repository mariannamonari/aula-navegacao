import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="app"
                options={{
                    title: "Aplicativos",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="bluetooth"
                options={{
                    title: "Bluetooth",
                    headerShown: false
                }}
            />

        </Tabs>
    );
}