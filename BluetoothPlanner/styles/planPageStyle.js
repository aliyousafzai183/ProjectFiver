import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

const style = StyleSheet.create({
    wrapper1:{
        padding:10,
        width:horizontalScale(300),
        height:verticalScale(300),
        backgroundColor:'#436AC8',
        borderWidth:1,
        borderColor:'#295740',
        display:'flex',
    },

    wrapper2:{
        width:horizontalScale(230),
        height:verticalScale(60),
        backgroundColor:'#436AC8',
    },

    heading1:{
        fontSize:moderateScale(35),
        textAlign:'center',
        color:'#ffff',
        padding:moderateScale(5),
        fontStyle:'italic'
    },

    tag:{
        fontSize:moderateScale(20),
        color:'#ffff',
    },

    checkBoxWrapper: {
        flexDirection: 'row',
        width:horizontalScale(100),
        marginTop:moderateScale(2)
    },

    checkBoxMainWrapper:{
        alignItems:'center',
        flexWrap:'wrap',
        marginLeft:horizontalScale(70),
        width:horizontalScale(200),
    },

    checkBoxText:{
        fontSize:moderateScale(20),
        fontStyle:'italic',
        padding:moderateScale(1)
    }

})

export default style;