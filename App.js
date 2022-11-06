import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Post } from './src/Post';
import { View, Text, FlatList, Alert, ActivityIndicator } from "react-native"
import axios from 'axios';

export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(false)

  const fetchArticles = () => {
    setIsLoading(true)
    axios
      .get("https://6366ee2679b0914b75d94e74.mockapi.io/articles/articles")
      .then(({data}) => setValue(data))
        .catch((err) => {
          Alert.alert("Произошла ошибка при загрузке статей")
        }).finally(setIsLoading)
  }

  useEffect(fetchArticles, []);

  if(isLoading) {
    return  (
        <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
          <ActivityIndicator /> 
          <Text>Загрузка...</Text>
        </View>
      )
  }

  return (
    <View>
      <FlatList 
        data={value}
        renderItem={({item}) => {
          return (
            <Post
              title={item.title}
              image={item.imageUrl}
              date={item.createdAt}/>
          )
        }}
        />
      <StatusBar hidden={true} />
    </View>
  );
}
