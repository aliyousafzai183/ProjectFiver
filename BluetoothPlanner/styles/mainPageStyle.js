import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

const styles =StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#3D49C7',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    },

    wrapper1:{
        width: horizontalScale(300),
        height: verticalScale(200),
        display:'flex',
        justifyContent:'flex-start'
    },
    
    wrapper2:{
        width: horizontalScale(320),
        height:verticalScale(450),
        marginTop:verticalScale(15),
        backgroundColor:'#436AC8',
        borderWidth:1,
        borderColor:'#295740',
        display:'flex',
        justifyContent:'flex-start'
    },
    
    wrapper3:{
        marginTop:verticalScale(15),
        width:horizontalScale(250)
    },

    heading1:{
        fontSize:moderateScale(68),
        textAlign:'center',
        color:'#ffff'
    },

    button:{
        fontSize:moderateScale(65),
        textAlign:'center',
        color:'#ffff',
    },
})

export default styles;