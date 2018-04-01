import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
    toast:{
        position: absolute,
        right: "0",
        padding: "15px",
        backgroundColor:'#000000b8',
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: "300",
        animationName: {
            from:{
                top:"15%",
                opacity:0,
            },
            to:{
                top:0,
                opacity:1,
            }
        },
        animationDuration: "1s",
    }
});