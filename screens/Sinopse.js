import {Text, View, Image, StyleSheet} from 'react-native';

export default function Sinopse({navigation}) {
    return (
      <View style={styles.body}>
        <View style={styles.navbar}>
          <Text style={{fontSize: '1.5rem', fontWeight:'bold'}}>Super</Text><Text style={styles.sizeMe}>SIZE ME</Text>
        </View>
        <View style={styles.navbar}>
  
        </View>
        <View style={styles.main}>
          <View style = {styles.topContent}>
            <Text style = {styles.titleText}>
              Título do Tópico
            </Text>
            <Text style = {styles.subtitleText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </View>
          <View style = {styles.cardImage}>
            <Image style = {styles.imageCardStyle} source = {require('../assets/image-card-desc.jpg')}>
            </Image>
          </View>
          <View style = {styles.cardText}>
            <Text style = {styles.textCardStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Text>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    body: {
  
    },
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
      backgroundColor: '#F8F8F8',
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
      padding: '15px',
      rowGap: '30px'
    },
  
    /* Container do Totpo do conteúdo */ 
    topContent: {
      width: '70vw',
      height: 'auto',
      rowGap: '15px',
    },
  
    titleText: {
      fontSize: '2.4em',
      fontWeight: 'bold',
    },
  
    subtitleText: {
      fontSize: '15px',
      fontWeight: '400',
      color: '#878787',
    },
    
    /* Card com Imagem */
    cardImage: {
      width: '70vw',
      height: '22vh',
      padding: '10px',
      borderRadius: '15px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)',
    },
  
    imageCardStyle: {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
    },
  
    cardText: {
      width: '70vw',
    },
  
    textCardStyle: {
      fontSize: '1.3em',
      textAlign: 'justify',
    }
  })