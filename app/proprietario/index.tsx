import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";


export type Proprietario = { 
    id_proprietario?: string; 
    nome?: string; 
    cpf?: string 
}

export default function ProprietarioList(){
    const [items, setItems] = useState<Proprietario[]>([]);
    const router = useRouter(); 
    const { refresh } = useLocalSearchParams<{ refresh?: string }>();

    const fetchAll = useCallback(async () => { 
        try { 
            const response = await axios.get(`http://localhost:3333/proprietario`); 
            setItems(response.data); 
        } catch (error) { 
            console.log(error); 
        } 
    }, []);

    useEffect(() => {
        fetchAll()
    }, [fetchAll, refresh])

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3333/proprietario/${id}`);
            fetchAll()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.section}>
                <Text style={style.title}>Lista de Proprietários</Text>
            </View>
            <FlatList 
                data={items}
                keyExtractor={(item) => String(item.id_proprietario)}
                renderItem={({item}) => (
                    <View style={style.card}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>{item.nome}</Text>
                        <Text style={{ marginTop: 4, color: '#4b5563' }}>{item.cpf}</Text>

                        <View style={style.row}>
                            <Pressable
                                style={[style.button, style.buttonGhost, {flex: 1}]}
                                onPress={() => router.push({pathname: "/proprietario/edit", params: { id_proprietario: String(item.id_proprietario), nome: item.nome, cpf: item.cpf }})}
                            >
                                <Text style={style.buttonText}>Editar</Text>
                            </Pressable>

                            <Pressable 
                              style={[style.button, style.buttonDanger, { flex: 1 }]} 
                              onPress={() => handleDelete(item.id_proprietario ?? "")}
                            >
                                <Text style={style.buttonText}>Excluir</Text> 
                            </Pressable>
                        </View>
                    </View>
                )}
                ListEmptyComponent={<Text style={{textAlign: "center", color: "#6b7280", marginTop: 20}}>
                    Nenhum proprietário cadastrado.
                </Text>}
            />
            
            <View style={{ padding: 16 }}> 
                <Pressable 
                  style={style.button} 
                  onPress={() => router.push('/proprietario/form')}
                >
                    <Text style={style.buttonText}>Novo Proprietário</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
