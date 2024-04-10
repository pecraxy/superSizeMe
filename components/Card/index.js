import {View, Text, Image, Pressable} from 'react-native'
import style from './style';
export default function Card({titulo, imagemPequena, imagem, descricao}){
    if (imagemPequena===undefined){
        return(
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
                </View>
            </>
        );
    }
    return(
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

