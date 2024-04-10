import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card:{
        width: '90vw',
        minHeight: '15vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 2px 4px 0px gray',
        margin: '1.5rem',
    },
    image:{
        width: '27vw',
        height: '27vw',
        backgroundColor: '#00c16c',
        borderRadius: '15px',

    },
    textRow:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        maxWidth: '40vw'
    },
    button:{
        width: '10vw',
        height: '100%',
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent:'center',
        
    },
    buttonText: {
        fontSize: '4em',
        height: '10vh',
        margin: '0',
        padding: '0'
    },
    title: {
        fontSize:'1.2em',
        fontWeight: 'bold',
    },
    text: {
        fontSize: '1em',
    }
});

export default style;