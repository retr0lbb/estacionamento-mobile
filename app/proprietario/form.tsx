import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";



export default function ProprietarioForm() {
    const [nome, setNome] = useState(''); 
    const [cpf, setCPF] = useState(''); 
    const router = useRouter();

    const handleSubmit = async () => { 
        try { 
            await axios.post(`http://localhost:3333/proprietario`, { nome, cpf }); 
            router.replace(`/proprietario?refresh=${Date.now()}`);
        } catch (error) { 
            console.log(error); 
        } 
    };

    return <SafeAreaView style={style.container}>
        <View style={style.section}>
            <Text style={style.title}>Cadastrar Proprietário</Text>

            <Text style={style.label}>Nome</Text>
            <TextInput style={style.input} placeholder="Digite o nome" value={nome} onChangeText={setNome} />

            <Text style={style.label}>CPF</Text> 
            <TextInput style={style.input} placeholder="Digite o CPF" value={cpf} onChangeText={setCPF} keyboardType="numeric" />

            <View style={{ marginTop: 22 }}> 
                <Pressable style={style.button} onPress={handleSubmit}> 
                    <Text style={style.buttonText}>Salvar</Text> 
                </Pressable> 
            </View>
        </View>
    </SafeAreaView>
}

