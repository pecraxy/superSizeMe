import { View, Text, Image, Button } from 'react-native'
import style from './style';
import { Component } from 'react';
export default function Card({ navigation, titulo, imagemPequena, imagem, descricao }) {
    if (imagemPequena === undefined) {
        return (
            <>
                <View style={style.card}>
                    <View style={style.row}>
                        <Text style={style.titulo}>
                            {titulo}
                        </Text>
                    </View>
                    <Text style={style.descricao}>{descricao}</Text>
                    <View>
                        <Image style={style.imagem} source={imagem}></Image>
                    </View>
                    <Button title='asdasd' onPress={() => navigation.navigate("Sinopse")}></Button>
                </View>
            </>
        );
    }
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
                    <Image style={style.imagem} source={imagem}></Image>
                </View>
            </View>
        </>
    );
}


