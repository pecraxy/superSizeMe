import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function Dieta({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.navbar}>
            <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Super</Text><Text style={styles.sizeMe}>SIZE ME</Text>
          </View>
          <View style={styles.navbar}>
          </View>
          <View style={styles.main}>
            <View style={styles.topContent}>
              <Text style={styles.titleText}>
                Gordura
              </Text>
              <Text style={styles.subtitleText}>
                O que são as gorduras do nosso corpo?
              </Text>
            </View>
            <View style={styles.cardImage}>
              <Image style={styles.imageCardStyle} source={require('../assets/image-card-desc.jpg')}>
              </Image>
            </View>
            <View style={styles.cardText}>
              <Text style={styles.textCardStyle}>
                Gordura é uma parte essencial da nossa dieta e desempenha várias funções vitais no corpo humano. No entanto, nem todas as gorduras são iguais, e entender as diferenças entre elas é fundamental para uma alimentação saudável.
              </Text>
              <Text style={styles.textCardStyle}>As gorduras são compostas por moléculas chamadas triglicerídeos, que consistem em três ácidos graxos ligados a uma molécula de glicerol. Esses triglicerídeos são encontrados em alimentos como óleos vegetais, gorduras animais e produtos processados. Quando consumidos, os triglicerídeos fornecem uma fonte concentrada de energia para o corpo.</Text>

                <Text style={styles.textCardStyle}>
                  Os triglicerídeos desempenham um papel crucial no armazenamento de energia. Quando você consome mais calorias do que queima, o excesso é convertido em triglicerídeos e armazenado nas células adiposas para uso posterior. Durante períodos de jejum ou atividade física, essas reservas de triglicerídeos são mobilizadas para fornecer energia ao corpo.
                </Text>

                <Text style={styles.textCardStyle}>
                  No entanto, níveis elevados de triglicerídeos no sangue podem ser prejudiciais à saúde. O consumo excessivo de gorduras saturadas e trans, juntamente com uma dieta rica em carboidratos refinados e açúcares, pode aumentar os níveis de triglicerídeos no sangue, aumentando o risco de doenças cardíacas, acidente vascular cerebral e outras condições médicas.
                </Text>

                <Text style={styles.textCardStyle}>
                  Além disso, os triglicerídeos são um importante marcador de saúde cardiovascular. Níveis elevados de triglicerídeos no sangue estão frequentemente associados a outros fatores de risco, como obesidade, resistência à insulina e níveis elevados de colesterol LDL (colesterol ruim).
                </Text>

                <Text style={styles.textCardStyle}>
                  Uma abordagem equilibrada para a dieta é essencial para manter os níveis de triglicerídeos dentro de uma faixa saudável. Isso inclui limitar o consumo de gorduras saturadas e trans, optando por gorduras insaturadas saudáveis, como aquelas encontradas em peixes gordurosos, abacates, nozes e óleos vegetais. Além disso, é importante manter um estilo de vida ativo, praticar exercícios regularmente e manter um peso saudável para ajudar a controlar os níveis de triglicerídeos e promover a saúde cardiovascular.
                </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  body: {

  },
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
    height: '30vh',
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
    marginBottom: '0.5em',
  }
})