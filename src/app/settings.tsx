import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Página de Configurações</Text>

            <Link href="/">
                <Text>Navegar até a Home</Text>
            </Link>

            <Link href="/ajuda">
                <Text>Navegar até a Ajuda</Text>
            </Link>
        </View>
    );
}