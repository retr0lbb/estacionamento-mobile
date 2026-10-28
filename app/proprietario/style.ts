import { StyleSheet } from 'react-native';
export default StyleSheet.create({ 
    container: { flex: 1, backgroundColor: '#f7fafc' }, 
    title: { fontSize: 22, fontWeight: '800', color: '#111827' }, 
    section: { padding: 16 }, 
    card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginHorizontal: 16, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 2, }, 
    input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 12, width: '100%', padding: 12, fontSize: 16, }, 
    label: { marginTop: 18, marginBottom: 8, fontSize: 16, fontWeight: '700', color: '#111827' }, 
    button: { backgroundColor: '#1d75cd', paddingVertical: 14, paddingHorizontal: 18, borderRadius: 12, alignItems: 'center', justifyContent: 'center', }, 
    buttonDanger: { backgroundColor: '#dc2626' }, 
    buttonGhost: { backgroundColor: '#f97316' }, 
    buttonText: { color: '#fff', fontWeight: '700' }, 
    row: { flexDirection: 'row', gap: 10, marginTop: 12 }, 
});

