
import React from "react"
import { View ,Text} from "react-native"

const ResultComponent = (props) => {
    return(
        <View style={{flex: 1}}>
            <Text style={{fontSize: 40, color: 'red'}}>{`Ket qua ${props.val}`} </Text>
        </View>
    )
}

export default ResultComponent