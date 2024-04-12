import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function TiposGordura({ navigation }) {
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
              <Text style={styles.textCardStyle}>
                Existem três tipos de gordura, sendo elas:
              </Text>
              <Text style={styles.textCardStyle}><Text style={{fontWeight: 'bold'}}>Gorduras saturadas</Text>: geralmente encontradas em alimentos de origem animal, como carnes, laticínios e certos óleos vegetais, como o óleo de coco e o óleo de palma. O consumo excessivo de gorduras saturadas pode aumentar os níveis de colesterol LDL (colesterol ruim) no sangue e aumentar o risco de doenças cardíacas.</Text>
              <Text style={styles.textCardStyle}><Text style={{fontWeight: 'bold'}}>Gorduras trans</Text>: são criadas através de um processo de hidrogenação de óleos vegetais líquidos para torná-los sólidos à temperatura ambiente. Elas são frequentemente encontradas em alimentos processados, como margarina, alimentos fritos e lanches embalados. As gorduras trans também são associadas a um aumento do risco de doenças cardíacas e outros problemas de saúde.</Text>
              <Text style={styles.textCardStyle}><Text style={{fontWeight: 'bold'}}>Gorduras insaturadas</Text>: são consideradas gorduras mais saudáveis e incluem tanto as gorduras monoinsaturadas quanto as poli-insaturadas. Elas são encontradas em alimentos como abacates, nozes, sementes e óleos vegetais, como o azeite de oliva e o óleo de canola. As gorduras insaturadas são benéficas para a saúde do coração quando consumidas em moderação e em substituição às gorduras saturadas e trans.</Text>
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
    marginBottom: '5px',
  }
})