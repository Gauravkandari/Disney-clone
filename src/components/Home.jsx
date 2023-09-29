import  styled from "styled-components"
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney"
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { setMovies } from "../features/movies/MoviesSlice";
import db from "../Firebase"
import { collection, getDocs} from "firebase/firestore"; 
import { selectUserName } from "../features/user/userSlice";
const Home = () => {
  const dispatch=useDispatch();
  const userName=useSelector(selectUserName);
  let recommends=[];
  let newDisneys=[];
  let originals=[];
  let trendings=[];
  useEffect(()=>{
getDocs(collection(db, "movies"))
.then((querySnapshot)=>{
  // console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    // console.log(recommends);
    switch(doc.data().type){
        case "recommend" :
          recommends=[...recommends,{id:doc.id,...doc.data()}]
          break;
        case "new" :
          newDisneys=[...newDisneys,{id:doc.id,...doc.data()}]
          break; 
        case "original" :
          originals=[...originals,{id:doc.id,...doc.data()}]
          break; 
        case "trending" :
          trendings=[...trendings,{id:doc.id,...doc.data()}]
          break; 
      }
  });
        dispatch(
          setMovies({
            recommend:recommends,
            newDisney:newDisneys,
            original:originals,
            trending:trendings,
          })
        )
      });
  },[userName])
  return (
    <Container>
      <ImageSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trending/>
    </Container>
  )
}
const Container=styled.main`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw +5px);

 &:after{
    content: "";
    background: url(/Images/home-background.png) center center/cover no-repeat fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
 }
`;
export default Home