import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Ajuda() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página de Ajuda</Text>

      <Link href="/">
        <Text>Navegar até a Home</Text>
      </Link>

      <Link href="/settings">
        <Text>Navegar até as Configurações</Text>
      </Link>
    </View>
  );
}