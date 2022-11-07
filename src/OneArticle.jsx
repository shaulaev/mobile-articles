import styled from "styled-components/native"
import { View } from "react-native"
import { useState, useEffect } from "react"
import { fetchArticles } from "../Api/articles"

const PostImage = styled.Image`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
`

const PostText = styled.Text`
    font-size: 18px;
    color: #000000;
`

export const OneArticle = ({ route, navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(false)

    const {id, title} = route.params;

    useEffect(() => {
        navigation.setOptions({
            title
        })
        fetchArticles(setIsLoading, setData, id)
    }, []);

  return (
    <View style={{padding: 10}}>
        <PostImage source={{uri: data.imageUrl}}></PostImage>
        <PostText>{data.text}</PostText>
    </View>
  )
}
