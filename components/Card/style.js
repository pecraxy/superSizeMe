import {StyleSheet} from 'react-native'
const style = StyleSheet.create({
    card:{
        maxWidth: '100vw', 
        minHeight: '20vh',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 1px 2px 0.07px gray',
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
        fontSize: '1.5em',
        margin: '8px'
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