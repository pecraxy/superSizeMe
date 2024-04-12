import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function Sinopse({ navigation }) {
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
                Super Size Me: A Dieta do Palhaço
              </Text>
              <Text style={styles.subtitleText}>
                Do que fala o documentário Super Size Me? Quais são as motivações do protagonista ao fazer o documentário?
              </Text>
            </View>
            <View style={styles.cardImage}>
              <Image style={styles.imageCardStyle} source={require('../assets/image-card-desc.jpg')}>
              </Image>
            </View>
            <View style={styles.cardText}>
              <Text style={styles.textCardStyle}><Text style={{fontWeight: 'bold'}}>Super Size Me </Text>(no Brasil, Super Size Me: A Dieta do Palhaço) é um documentário estadunidense de 2004 escrito, produzido, dirigido e protagonizado por Morgan Spurlock, um cineasta independente norte-americano. No filme, Spurlock seguiu uma experiência de 30 dias, de 1º de fevereiro a 2 de março de 2003, durante o qual ele comeu apenas comida em restaurantes McDonald’s.</Text>
              <Text style={styles.textCardStyle}>O documentário documenta o efeito drástico deste estilo de vida no bem-estar físico e psicológico de Spurlock e explora a influência corporativa da indústria de fast food, incluindo como ela encoraja a má nutrição para seu próprio lucro. Spurlock comia nos restaurantes McDonald’s três vezes por dia, comendo todos os itens do cardápio pelo menos uma vez. Durante o experimento, ele consumiu uma média de 5.000 kcal (equivalente a 9,26 Big Macs) por dia. Essa ingestão calórica é significativamente maior do que a quantidade recomendada para um homem manter seu peso dentro de uma dieta saudável e balanceada, que geralmente é em torno de 2.500 kcal.</Text>
              <Text style={styles.textCardStyle}>Como resultado, Spurlock, então com 32 anos, ganhou 11,1 kg, um aumento de 13% na massa corporal, aumento do colesterol para 230 mg/dL e alterações de humor, disfunção sexual e acúmulo de gordura em seu fígado. Ele precisou de catorze meses para perder todo o peso ganho com sua experiência, usando uma dieta vegetariana supervisionada por sua então namorada, uma chef especializada em culinária vegetariana.</Text>
              <Text style={styles.textCardStyle}>O motivo da investigação de Spurlock foi o crescente aumento da obesidade em toda a sociedade norte-americana, considerada uma “epidemia” pelo Departamento de Saúde e Serviços Humanos dos Estados Unidos. Além disso, houve um processo movido contra o McDonald’s em nome de duas meninas obesas que, alegadamente, ficaram obesas como resultado de comer comida do McDonald’s. Spurlock argumentou que muitas das mesmas críticas levantadas contra as empresas de tabaco se aplicam a franquias de fast food cujo produto é fisiologicamente viciante e fisicamente prejudicial.</Text>
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
    width: '80vw',
  },

  textCardStyle: {
    fontSize: '1.3em',
    marginBottom: '0.5em',
  }
})