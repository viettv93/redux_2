import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const SubComponent = (props) => {
    const sub=()=>{
        props.onDecrease()
    }
    return (
        <View>
            <TouchableOpacity
                onPress={sub}
                style={{ backgroundColor: 'red', borderRadius: 5, alignItems: 'center', justifyContent: 'center', width: 100, height: 100 }}>
                <Text style={{ fontSize: 40, color: 'white' }}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubComponent