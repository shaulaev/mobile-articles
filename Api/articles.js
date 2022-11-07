import axios from 'axios';
import { useEffect } from 'react/cjs/react.production.min';

export const fetchArticles = (setIsLoading, setValue, id) => {
    setIsLoading(true)
    axios
    .get(id ? 
        `https://6366ee2679b0914b75d94e74.mockapi.io/articles/articles/${id}` 
        : "https://6366ee2679b0914b75d94e74.mockapi.io/articles/articles")
    .then(({data}) => setValue(data))
        .catch((err) => {
        Alert.alert("Произошла ошибка при загрузке статей")
        }).finally(setIsLoading)
}