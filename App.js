import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card/';

export default function App() {
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={{fontSize: '1.5rem', fontWeight:'600'}}>Super</Text><Text style={styles.sizeMe}>SIZE ME</Text>
      </View>
      <View style={styles.navbar}></View>

      <View style={styles.main}>
      <Card 
          imagemPequena='youtube-icon.png' 
          imagem='video-thum.png'
          titulo='Documentário Super Size Me'></Card>
      </View>
      <View>
        <Text>Termos</Text>
        <Text>
          Tudo que você precisa saber sobre dieta, gordura corporal e muito mais!
        </Text>
      </View>
      <TermoCard>
    </View>

  );
}

const styles = StyleSheet.create({
  navbar:{
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
    backgroundColor: 'white',
    width: '100%',
    marginTop: '-13vh',
    height: '100vh',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    zIndex: '999',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '2vh'
  }

});