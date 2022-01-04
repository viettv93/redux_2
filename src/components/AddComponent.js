import React from "react"
import { View , Text, TouchableOpacity} from "react-native"

const AddComponent = (props) => {
    
    const add=()=>{
        props.onIncrease()
    }
    return (
        <View>
            <TouchableOpacity
                onPress={add}
                style={{ backgroundColor: 'yellow', borderRadius: 5, alignItems: 'center', justifyContent: 'center', width: 100, height: 100 }}>
                <Text style={{ fontSize: 40, color: 'black' }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddComponent