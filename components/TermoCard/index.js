import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import style from './style';


export default function TermoCard({imagem, titulo, texto, navigation, pagina}){
    return(
        <>
            <View style={style.card}>
                <Image style={style.image} source={imagem}></Image>
                <View style={style.textRow}>
                    <Text style={style.title}>{titulo}</Text>
                    <Text style={style.text}>{texto}</Text>
                </View>
                <Pressable style={({pressed}) => [
                    {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}
                ]} onPressIn={() => navigation.navigate(pagina)}><Text style={style.buttonText}>{'>'}</Text></Pressable>
            </View>
        </>
    );
}