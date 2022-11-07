import React from 'react'
import { View, ActivityIndicator, Text } from "react-native"

export const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
        <ActivityIndicator /> 
        <Text>Загрузка...</Text>
    </View>
  )
}
