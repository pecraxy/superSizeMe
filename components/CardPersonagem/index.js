import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import style from './style';


export default function CardPersonagem(){
    return(
        <>
            <View style={style.card}>
                <View style={style.textRow}>
                    <Text style={style.title}>Personagens do Documentário:</Text>
                </View>
                <View style={style.textRow}>
                    <Image style={style.image}></Image>
                    <Image style={style.image}></Image>
                    <Image style={style.image}></Image>
                </View>
            </View>
        </>
    );
}