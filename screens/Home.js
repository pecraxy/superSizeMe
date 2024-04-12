import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Card from '../components/Card/index.js';
import TermoCard from '../components/TermoCard';
import { SafeAreaView, ScrollView } from 'react-native-web';
import CardPersonagem from '../components/CardPersonagem';

export default function Home({navigation}) {
    const imagePath = '../assets/';
    const styles = StyleSheet.create({
      navbar: {
          backgroundColor: '#00c16c',
          width: '100vw',
          height: '13vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: '-1px'
        },
        sizeMe: {
          color: 'white',
          fontSize: '2rem',
          fontWeight: '700',
          margin: '0'
        },
        main: {
          backgroundColor: '#F8F8F8',
          marginTop: '-13vh',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
          zIndex: '999',
          display: 'flex',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '15px',
          rowGap: '30px'
        },
      row: {
        margin: '1.5rem',
      },
      title: {
        padding: '5px',
        fontSize: '2.4rem',
        fontWeight: 'bold'
      },
      text: {
        color: '#808080',
        fontSize: '1.2em'
      }
    });
    return (
      <>
            <View style={styles.navbar}>
              <Text style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Super</Text><Text style={styles.sizeMe}>SIZE ME</Text>
            </View>
            <View style={styles.navbar}></View>
            <View style={styles.main}>
              <Card
                imagemPequena={require('../assets/youtube-icon.png')}
                imagem={require('../assets/video-thum.jpg')}
                titulo='Documentário Super Size Me'
                descricao={'O que é o documentário Super Size Me? O que ele fala?'}
                navigation={navigation}
                pagina='Sinopse'
              />
              <Card
                imagemPequena={require('../assets/diet-top-icon.png')}
                imagem={require('../assets/diet-icon.png')}
                titulo='Dieta do Spurlock'
                descricao={'Qual foi a dieta do Spurlock?'}
                navigation={navigation}
                pagina='Dieta'
              />
              <View style={styles.row}>
                <Text style={styles.title}>Termos</Text>
                <Text style={styles.text}>
                  Tudo que você precisa saber sobre dieta, gordura corporal e muito mais!
                </Text>
              </View>
              <TermoCard
                imagem={require('../assets/drop-icon.png')}
                titulo='O que são Gorduras?'
                texto='Entenda o que é gordura corporal.'
                navigation={navigation}
                pagina='Gorduras'
              ></TermoCard>
              <TermoCard
                imagem={require('../assets/body-icon.png')}
                titulo='Tipos de Gordura:'
                texto='Tudo sobre as principais gorduras do corpo.'
                navigation={navigation}
                pagina='TiposGordura'
              ></TermoCard>
              <TermoCard
                imagem={require('../assets/hamburger-icon.png')}
                titulo='O que são Calorias?'
                texto='O que são calorias? E por que elas importam na alimentação diária?'
                navigation={navigation}
                pagina='Calorias'
              ></TermoCard>
              <View style={styles.row}>
                <Text style={styles.title}>Personagens do Documentário</Text>
                <Text style={styles.text}>
                  Todas as pessoas que participaram do
                  documentário “Super Size Me: A Dieta do Palhaço”
                </Text>
              </View>
              <CardPersonagem
                navigation={navigation}
                pagina='Personagens'/>
            </View>
      </>
    );
  }