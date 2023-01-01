import { StyleSheet} from "react-native";
import { moderateScale, verticalScale } from './Metrics'; 

const styles = StyleSheet.create({
    mainWrapper:{
        display:'flex',
        flexDirection:'row',
        height:verticalScale(50),
        marginBottom:verticalScale(15),
        backgroundColor:'#3D49C7',
        padding:moderateScale(10),
        justifyContent:'space-between'
    },

    cancel:{
        fontSize:moderateScale(20),
    },

    list:{
        fontSize:moderateScale(20),
    }
})

export default styles;