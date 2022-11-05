import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Post } from './src/Post';
import { View, FlatList } from "react-native"

export default function App() {
  
  const [value, setValue] = useState(false)

  const data = useEffect(() => {
    fetch("https://6366ee2679b0914b75d94e74.mockapi.io/articles/articles").then(data => data.json()).then(articles => setValue(articles))
  });

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
