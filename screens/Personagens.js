import { StyleSheet, Text, View, Image} from 'react-native';

export default function Personagens() {
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={{fontSize: '1.5rem', fontWeight:'500'}}>Super</Text><Text style={styles.sizeMe}>SIZE ME</Text>
      </View>
      <View style={styles.navbar}></View>

      <View style={styles.main}>
        <View style={styles.cardTextTop}>
          <Text style={styles.titleTextTop}>
            Personagens do Vídeo
          </Text>
          <Text style={styles.subTitleTextTop}>
            Todas as pessoas que participaram do
            documentário : “A Dieta do Palhaço”
          </Text>
        </View>
        <View style = {styles.mainCardContent}>
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Morgan Spurlock.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
                Morgan Spurlock 
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Protagonista
              </Text>
            </View>
          </View>
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Alexandra Jamieson.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
               Alexandra Jamieson
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Nutricionista 
              </Text>
            </View>
          </View>          
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Stephen Siegel.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
                Stephen Siegel
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Médico I 
              </Text>
            </View>
          </View>          
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Lisa Ganjhu.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
               Lisa Ganjhu
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Médica II
              </Text>
            </View>
          </View>          
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Daryl Isaacs.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
                Daryl Isaacs
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Médico III 
              </Text>
            </View>
          </View>          
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Eric Rowley.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
               Eric Rowley
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Preparador físico 
              </Text>
            </View>
          </View>
          <View style = {styles.card}>
            <View  style = {styles.imageBox}>
              <Image style = {styles.icon} source={require('../assets/Mark Fenton.jpg')}></Image> 
            </View>
            <View style={styles.textBox}>
              <Text style={styles.nameCharacter}>
               Mark Fenton
              </Text>
              <Text style={styles.functionCharacter}>
                Função: Especialista em saúde 
              </Text>
            </View>
          </View>
        </View>

      </View>
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
    backgroundColor: '#f8f8f8',
    marginTop: '-13vh',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    zIndex: '999',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '30px'
  },

  cardTextTop: {
    display: 'flex',
    alignItems:'flex-start',
    width: '80%',
    height: 'auto',
    rowGap: '8px',
    marginTop: '15px',
  },

  titleTextTop:{
    fontSize: '25px',
    fontWeight: '700',
  },

  subTitleTextTop:{
    fontSize: '14px',
    color: '#808080',
  },

  mainCardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100vw',
    rowGap: '30px',
    columnGap: '20px',
    marginBottom: '20px'
  },

  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
    rowGap: '10px',
    width: '150px',
    height: '210px',
    borderRadius: '15px',
    backgroundColor: '#FFFFFF',
    boxShadow:  '2px 2px 4px 4px rgba(0, 0, 0, 0.05)',
  },

  imageBox: {
    width: '115px',
    height: '115px',
  },

  icon: {
    width: '100%',
    height: '100%',
    borderRadius:'50%',
  },

  textBox:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    rowGap: '10px',
    width:'100%',
    
  },

  nameCharacter:{
    fontSize: '0.90rem',
    fontWeight: '700',
  },

  functionCharacter: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#808080',
    textAlign: 'center'
  }

});