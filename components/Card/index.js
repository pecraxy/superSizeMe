import {View, Text, Image} from 'react-native'
import style from './style';
export default function Card({titulo, imagemPequena, imagem}){

    let aImagemPequena = imagemPequena;
    console.log(aImagemPequena)
    return(
        <>
            <View style={style.card}>
               <View style={style.row}>
                   <Image style={style.imagemPequena} source={require(`../../assets/youtube-icon.png`)}></Image>
                   <Text style={style.titulo}>
                        {titulo}
                    </Text>
                </View>
                <View>
                    <Image style={style.imagem} source={require(`../../assets/video-thum.jpg`)}></Image>
                </View> 
            </View>
        </>
    );
}

