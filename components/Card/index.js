import { View, Text, Image, Button } from 'react-native'
import style from './style';
import { Component } from 'react';
export default function Card({ navigation, titulo, imagemPequena, imagem, descricao, pagina }) {
    return (
        <>
            <View style={style.card}>
                <View style={style.row}>
                    <Image style={style.imagemPequena} source={imagemPequena}></Image>
                    <Text style={style.titulo}>
                        {titulo}
                    </Text>
                </View>
                <Text style={style.descricao}>{descricao}</Text>
                <View>
                    <Image style={[style.imagem, {backgroundColor: 'black'}]} source={imagem}></Image>
                </View>
                <View style={style.button}>
                    <Button 
                      title='Ver'
                      onPress={() => navigation.navigate(pagina)}
                      color='#00c16c'/>
                </View>
            </View>
        </>
    );
}


