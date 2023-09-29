import { styled } from "styled-components"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import db from "../Firebase"
import { doc,onSnapshot} from "firebase/firestore"; 
const Detail = () => {
  const {id}=useParams();
  const [detailData,setDetailData]=useState({});
  useEffect(()=>{

    const unsub = onSnapshot(doc(db, "movies", `${id}`), (doc) => {
      // console.log("Current data: ", doc.data());
      setDetailData(doc.data());
  });
  },[id])
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
        </Background>
        <ImageTitle>
          <img src={detailData.titleImg} alt={detailData.title} />
        </ImageTitle>
        <ContentMeta>
          <Controls>
            <Player>
             <img src="/Images/play-icon-black.png" alt="" />
             <span>PLAY</span>
            </Player>
            <Trailer>
             <img src="/Images/play-icon-white.png" alt="" />
             <span>TRAILER</span>
            </Trailer>
            <AddList>
              <span></span>
              <span></span>
            </AddList>
            <GroupWatch>
              <div>
                <img src="/Images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </Controls>
          <SubTitle>{detailData.subTitle}</SubTitle>
          <Description>{detailData.description}</Description>
        </ContentMeta>
    </Container>
  )
}
const Container=styled.div`
position: relative;
min-height: calc(100vh-250px);
display: block;
overflow-x: hidden;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`;

const Background=styled.div`
left: 0;
right: 0;
position: fixed;
opacity: 0.8;
top: 0;
z-index: -1;
img{
  width: 100vw;
  height: 100vh;
  @media (max-width:768px){
    width: initial;
  }
}
`;

const ImageTitle=styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-start;
margin: 0 auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;

img{
  max-width: 600px;
  min-width: 200px;
  width: 35vw;
}
`;

const ContentMeta=styled.div`
max-width: 874px;
`;

const Controls=styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
margin: 24px 0;
min-height: 56px;
`;

const Player=styled.button`
font-size: 15px;
margin: 0 22px 0 0;
padding: 0 24px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1.8px;
text-align: center;
background-color: rgb(249,249,249);
border: none;
color: #000;
  img{
    width: 32px;
  }
  &:hover{
    background-color: rgb(198,198,198);
  }
  @media (max-width:768px){
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img{
      width: 25px;
    }
  }
`;
const Trailer=styled(Player)`
background-color: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249) ;
&:hover{
    background-color: rgb(198,198,198);
    color: #000;
  }
`;

const AddList=styled.div`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
margin-right: 22px;
align-items: center;
background-color: rgba(0,0,0,0.6);
border-radius: 50%;
border: 2px solid #fff;
cursor: pointer;
span{
  display: inline-block;
  background-color: rgb(249,249,249);

  &:first-child{
    height: 2px;
    width: 16px;
    transform: translate(1px,0px) rotate(0deg);
  }
  &:nth-child(2){
    height: 16px;
    width: 2px;
    transform: translateX(-8px) rotate(0deg);
  }
}
`;

const GroupWatch=styled.div`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border-radius: 50%;
cursor: pointer;
border: 2px solid #fff;
div{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
  text-align: center;
  img{
    width: 100%;
  }
}
`;

const SubTitle=styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
@media (max-width:768px){
  font-size: 12px;
}
`;
const Description=styled.div`
font-size: 20px;
line-height: 1.4;
color: rgb(249,249,249);
padding: 16px 0;
@media (max-width:768px){
  font-size: 14px;
}
`;

export default Detail