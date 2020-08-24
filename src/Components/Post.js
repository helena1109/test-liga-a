import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";


const Post = ({post, user}) => {
    return (
        <PostWrapper>

            <UserBlock>
                <i className="fa fa-user-circle" aria-hidden="true"/>
                <div> Name: {user.name}</div>
                <div> Nickname: {user.username}</div>
            </UserBlock>

            <PostBlock>
                <p className='post-title'>{post.title} </p>
                <p className='post-text'>{post.body} </p>
            </PostBlock>

        </PostWrapper>
    )
}

export default Post;

const PostWrapper = styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 70%;
    display: flex;
    align-items: center;
    min-height: 50px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.mainColor};
    margin-bottom: 10px;
    ${breakpoint("xs", "md")`
        width: 100%;
        padding: 5px;
    `}
`

const UserBlock = styled.div`
    font-size:  0.9rem;
    min-width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid black;
    margin-right: 10px;
    i{
        font-size: 30px;
        margin-bottom: 5px;
        
    }
    ${breakpoint("xs", "md")`
        font-size:  0.7rem;
    `}
    
`

const PostBlock = styled.div`
   .post-title{
      font-weight: 600;
      margin: 0;
   }
   ${breakpoint("xs", "md")`
        font-size:  0.8rem;
    `}
`

