import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});;

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>

      <Link href="/settings">
        <Text>Navegar até as Configurações</Text>
      </Link>

      <Link href="/ajuda">
        <Text>Navegar até a Ajuda</Text>
      </Link>
    </View>
  );
}