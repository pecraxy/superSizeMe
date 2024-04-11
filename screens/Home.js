import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card/';
import TermoCard from '../components/TermoCard';
import { SafeAreaView, ScrollView } from '../node_modules/react-native-web';
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
        backgroundColor: '#f8f8f8f8',
        width: '100vw',
        marginTop: '-13vh',
        height: '160%',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        zIndex: '999',
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '2vh'
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
        <SafeAreaView>
          <ScrollView>
            <View style={[styles.navbar]}>
              <Text style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Super</Text><Text style={styles.sizeMe}>SIZE ME</Text>
            </View>
            <View style={styles.navbar} />
            <View style={styles.main}>
              <Card
                imagemPequena={require(imagePath + 'youtube-icon.png')}
                imagem={require(imagePath + 'video-thum.jpg')}
                titulo='Documentário Super Size Me'
                descricao={'O que é o documentário Super Size Me? O que ele fala?'}
                navigation={navigation}
              />
              <Card
                imagem={require(imagePath + 'video-thum.jpg')}
                titulo='Dieta do Spurlock'
                descricao={'Qual foi a dieta do Spurlock?'}
                navigation={navigation} />
              <View style={styles.row}>
                <Text style={styles.title}>Termos</Text>
                <Text style={styles.text}>
                  Tudo que você precisa saber sobre dieta, gordura corporal e muito mais!
                </Text>
              </View>
              <TermoCard
                imagem={require(imagePath + 'drop-icon.png')}
                titulo='O que são Gorduras?'
                texto='Entenda o que é gordura corporal.'
                navigation={navigation}
                pagina='Gorduras'
              ></TermoCard>
              <TermoCard
                imagem={require(imagePath + 'body-icon.png')}
                titulo='Tipos de Gordura:'
                texto='Tudo sobre as principais gorduras do corpo.'
              ></TermoCard>
              <TermoCard
                imagem={require(imagePath + 'hamburger-icon.png')}
                titulo='O que são Calorias?'
                texto='O que são calorias? E por que elas importam na alimentação diária?'
              ></TermoCard>
              <View style={styles.row}>
                <Text style={styles.title}>Personagens do Documentário</Text>
                <Text style={styles.text}>
                  Todas as pessoas que participaram do
                  documentário “Super Size Me: A Dieta do Palhaço”
                </Text>
              </View>
              <CardPersonagem />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }