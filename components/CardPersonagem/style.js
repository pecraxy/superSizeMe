import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card:{
        width: '90vw',
        minHeight: '15vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
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
        borderRadius: '100%',

    },
    textRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap'
    },
    button:{
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent:'center',
        
    },
    buttonText: {
        fontSize: '2em',
        margin: '0',
        padding: '0'
    },
    title: {
        fontSize:'1.4em',
        fontWeight: 'bold',
        margin: '5px'
    },
    text: {
        fontSize: '1em',
    }
});

export default style;