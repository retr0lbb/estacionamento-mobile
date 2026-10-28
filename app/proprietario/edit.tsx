import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Proprietario } from ".";
import style from "./style";


export default function ProprietarioEdit(){
    const params = useLocalSearchParams<Proprietario>()
    const [proprietario, setProprietario] = useState<Proprietario>({
        id_proprietario: params.id_proprietario?? "",
        nome: params.nome ?? "",
        cpf: params.cpf ?? ""
    })

    const router = useRouter()

    const handleSubmit = async () => {
        try{
            await axios.put(`http://localhost:3333/proprietario/${proprietario.id_proprietario}`, proprietario)
            router.replace(`/proprietario?refresh=${Date.now()}`)
        }catch(err){
            console.log(err)
        }
    }


    return(
        <SafeAreaView style={style.container}>
            <View style={style.section}>
                <Text style={style.title}>Editar Proprietário</Text>

                <Text style={style.label}>Identificação</Text>
                <TextInput style={style.input} editable={false} value={String(proprietario.id_proprietario)} />

                <Text style={style.label}>Nome</Text>
                <TextInput style={style.input} value={proprietario.nome} onChangeText={(nome) => setProprietario((prev) => ({ ...prev, nome }))} />

                <Text style={style.label}>CPF</Text> 
                <TextInput style={style.input} value={proprietario.cpf} onChangeText={(cpf) => setProprietario((prev) => ({ ...prev, cpf }))} keyboardType="numeric" />

                <View style={{marginTop: 22}}>
                    <Pressable style={style.button} onPress={handleSubmit}>
                        <Text style={style.buttonText}> Alterar </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}