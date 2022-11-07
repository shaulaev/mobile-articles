import styled from 'styled-components/native';

const PostView = styled.View`
    flex-direction: row;
    border-radius: 10px;
    padding: 15px
    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    border-style: solid; 
    margin-bottom: 20px;
  `;

  const PostImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 12px;
  `;

  const PostTitle = styled.Text`
    font-size: 18px;
    font-weight: 700;
  `;

  const PostDate = styled.Text`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4)
  `;

  const PostContent = styled.View`
    flex: 1;
    justify-content: center;
  `;

export const Post = ({title, image, date}) => {
    return (
        <PostView>
            <PostImage
                source={{uri: image}}/>
            <PostContent>
                <PostTitle>{title}</PostTitle>
                <PostDate>{date}</PostDate>
            </PostContent>
        </PostView>
    )
}