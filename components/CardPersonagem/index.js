import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import style from './style';


export default function CardPersonagem({navigation, pagina}){
    return(
        <>
            <View style={style.card}>
                <View style={style.textRow}>
                    <Text style={style.title}>Personagens do Documentário:</Text>
                    <Pressable style={({pressed}) => [
                      {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}]
                      } onPressIn={() => navigation.navigate(pagina)}>
                      <Text style={style.buttonText}>{'>'}</Text>
                    </Pressable>
                </View>
                <View style={style.textRow}>
                    <Image style={style.image} source={require('../../assets/Morgan Spurlock.jpg')}></Image>
                    <Image style={style.image} source={require('../../assets/Eric Rowley.jpg')}></Image>
                    <Image style={style.image} source={require('../../assets/Stephen Siegel.jpg')}></Image>
                </View>
            </View>
        </>
    );
}