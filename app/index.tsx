// app/index.tsx
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App Legal</Text>
      
      {/* Link para ir para a tela de proprietário */}
      <Link href="/proprietario" style={styles.link}>
        Ir para Proprietário
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  link: { color: 'blue', fontSize: 18 }
});