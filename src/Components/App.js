import React, {useState, useEffect} from 'react';
import LigaAService from "../Services/ligaA-service";
import styled, {ThemeProvider} from 'styled-components';
import Post from "./Post";
import theme from "../styles/theme";
import breakpoint from "styled-components-breakpoint";
import Spinner from "./Spinner";



const App = () => {
  const [posts, setPosts] = useState({initialPosts: null, filterPosts: null});
  const [usersData, setUsersData] = useState(null);
  const [inputValue, setValue] = useState('');
  const ligaAService = new LigaAService();

  useEffect(() => {
    ligaAService.getPosts().then((res => {
      setPosts({initialPosts: res, filterPosts: res})
    }));

    ligaAService.getUsers().then((res) => {
      setUsersData(res)
    })
  }, []);

  useEffect(() => {
    posts.initialPosts && searchData()
  }, [inputValue])


  const searchData = () => {
    const filter = posts.initialPosts.filter(post => {
      return (post.body.toLowerCase().includes(inputValue) || post.title.toLowerCase().includes(inputValue));
    });

    setPosts((s) => {
      return {
        initialPosts: s.initialPosts,
        filterPosts: filter
      }
    })

  };

  const renderPosts= ()=>{
    if(posts.filterPosts.length>0){
      return posts.filterPosts.map((post) => {
            const user = usersData.find((user) => {
              return user.id === post.userId
            })

            return <Post key={post.id} post={post} user={user}/>
          }
      )
    }else{
      return <div><i className="fa fa-frown-o" aria-hidden="true"/> Nothing found </div>
    }

  }


  return (
      (posts.filterPosts && usersData) ?
          <ThemeProvider theme={theme}>
            <Wrapper>
              <Title> Posts: </Title>

              <SearchBarWrapper>
                <SearchBar>
                  <i className="fa fa-search" aria-hidden="true"/>
                  <input placeholder='Search something'
                         value={inputValue}
                         onChange={(e) => setValue(e.target.value)}
                  />
                  {inputValue && <i className="fa fa-times-circle" onClick={() => setValue('')}/>}
                </SearchBar>
              </SearchBarWrapper>


              {
                renderPosts()
              }
            </Wrapper>
          </ThemeProvider>
          :
          <Spinner/>

  );
}

export default App;


const SearchBarWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    ${breakpoint("xs", "md")`
        width: 100%;
    `}
`

const SearchBar = styled.div`
    margin-bottom: 20px;
    padding: 5px;
    width: 30%;
    height: 30px;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        border: none;
        outline: none;
        width: 100%;
    }
    .fa-search{
        margin-right: 5px;
    }
    .fa-times-circle{
        cursor: pointer
    }
     ${breakpoint("xs", "md")`
        width: 100%;
    `}
    
`

const Title = styled.h1`
     font-weight: 900;
`

const Wrapper = styled.div`
   font-family: ${props => props.theme.fonts.mainFont};
   display: flex;
   flex-direction: column;
   align-items: center;
`