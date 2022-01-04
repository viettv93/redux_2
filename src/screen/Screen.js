import React, { useState } from "react"
import { View } from "react-native"
import AddComponent from "../components/AddComponent"
import ResultComponent from "../components/ResultComponent"
import SubComponent from "../components/SubComponent"


const Screen = () => {
    const increaseCount = () => {
        setValue(value + 1)
    }
    const decreaseCount = () => {
        setValue(value - 1)
    }
    const [value, setValue] = useState(0)
    return (

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 2 }}>
                <AddComponent onIncrease={increaseCount} />
                <SubComponent onDecrease={decreaseCount}/>
            </View>
            <View style={{ flex: 1 }}>
                <ResultComponent val={value} />
            </View>
        </View>

    )
}

export default Screen