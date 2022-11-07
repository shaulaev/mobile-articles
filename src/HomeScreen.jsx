import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Post } from './Post';
import { View, FlatList, TouchableOpacity, RefreshControl} from "react-native"
import { fetchArticles } from '../Api/articles';
import { Loading } from './Loading';

export const HomeScreen = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(false)

  useEffect(() => fetchArticles(setIsLoading, setValue), []);

  if(isLoading) {
    return  (
        <Loading />
      )
  }

  return (
    <View>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => fetchArticles(setIsLoading, setValue)} />}
        data={value}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Article", {id: item.id, title: item.title})}>
              <Post
                title={item.title}
                image={item.imageUrl}
                date={new Date(item.date).toLocaleDateString()}/>
            </TouchableOpacity>
          )
        }}
        />
    </View>
  );
}
