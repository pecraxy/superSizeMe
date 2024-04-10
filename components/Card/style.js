import {StyleSheet} from 'react-native'
const style = StyleSheet.create({
    card:{
        width: '90vw', 
        minHeight: '20vh',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 2px 4px 0px gray',
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    titulo:{
        width: '100%',
        textAlign: 'center',
        fontSize: '1.6em',
        fontWeight: 'bold',
        margin: '10px'
    },
    descricao:{
        margin: '5px',
        fontSize: '1.2em'
    },
    imagemPequena:{
        width: '50px',
        height: '50px'
    },
    imagem: {
        width: '100%',
        height: '25vh',
        borderRadius: '15px'
    }
});

export default style;