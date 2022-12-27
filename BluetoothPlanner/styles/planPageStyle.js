import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    wrapper1:{
        padding:10,
        width:'75%',
        height:'40%',
        marginTop:'3%',
        backgroundColor:'#436AC8',
        borderWidth:1,
        borderColor:'#295740',
    },

    wrapper2:{
        width:'65%',
        height:'8%',
        marginTop:'6%',
        backgroundColor:'#436AC8',
    },

    heading1:{
        fontSize:35,
        textAlign:'center',
        color:'#ffff',
        padding:9,
        fontStyle:'italic'
    },

    tag:{
        fontSize:20,
        color:'#ffff',
    },

    checkBoxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: 5,
        width:"50%",
        marginTop:5
    },

    checkBoxMainWrapper:{
        alignItems:'center'
    },

    checkBoxText:{
        fontSize:20,
        fontStyle:'italic'
    }

})

export default style;