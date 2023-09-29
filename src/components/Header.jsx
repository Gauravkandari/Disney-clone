import styled from "styled-components"
import "/src/index.css"
import { auth, provider } from "../Firebase"
import { signInWithPopup,signOut,getAuth } from "firebase/auth"
import { useDispatch,useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import {selectUserName,selectUserPhoto,setSignOutState,setUserLoginDetails} from "../features/user/userSlice"
import { useEffect } from "react"
const Header = (props) => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName)
    const userPhoto=useSelector(selectUserPhoto)
    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
          if(user){
            setUser(user)
            navigate("/home")
          }
        })
    },[userName])
    const handleAuth=()=>{
        if(!userName){
        signInWithPopup(auth, provider)
        .then((result)=>{
            setUser(result.user)
            // console.log(result)
        }).catch((error)=>{
            alert(error.message)
        });}
        else if(userName){
            const auth = getAuth();
         signOut(auth).then(() => {
            dispatch(setSignOutState())
            navigate("/")
        }).catch((error) => {
        alert(error.message)
        });
        }
    }
    const setUser=(user)=>{
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            })
        );
    };
  return (
    <Nav>
        <Logo href="">
            <img src="/Images/logo.svg" alt="" />
        </Logo>
        {
            !userName ?
            <Login onClick={handleAuth}>login</Login> 
            :
          <>
        <NavMenu>
            <a href="/home">
                <img src="/Images/home-icon.svg" alt="home" />
                <span>HOME</span>
            </a>
            <a href="/home">
                <img src="/Images/search-icon.svg" alt="home" />
                <span>SEARCH</span>
            </a>
            <a href="/home">
                <img src="/Images/watchlist-icon.svg" alt="home" />
                <span>WATCHLIST</span>
            </a>
            <a href="/home">
                <img src="/Images/original-icon.svg" alt="home" />
                <span>ORIGINAL</span>
            </a>
            <a href="/home">
                <img src="/Images/movie-icon.svg" alt="home" />
                <span>MOVIES</span>
            </a>
            <a href="/home">
                <img src="/Images/series-icon.svg" alt="home" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <Signout>
        <UserImg src={userPhoto} alt={userName} />
        <Dropdown>
            <span onClick={handleAuth}>Sign Out</span>
        </Dropdown>
        </Signout>
        </>
        }  
       {/* <Login onClick={handleAuth}>login</Login> */}
    </Nav>
  )
}
const Nav=styled.nav`
  position:fixed ;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 3;
`;

const Logo=styled.a`
    padding: 0;
    width: 80px;
    max-height: 70px;
    display: inline-block;
    img{
        width: 100%;
        display: block;
    }
`;

const NavMenu=styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
position: relative;
margin-left: 40px;
margin-right: auto;
a{
    display: flex;
    align-items: center;
    padding:0 12px;
img{
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
}
span{
    font-size: 14px;
    color: rgb(249,249,249);
    letter-spacing: 1.42px;
    padding: 2px 0 0;
    white-space: nowrap;
    position: relative;
    line-height: 1.08   ;
     
    &:before{
        content: "";
        background-color:rgb(249,249,249);
        position: absolute;
        bottom: -6px;
        right: 0;
        left:0;
        height: 2px;
        border-radius: 0 0 4px 4px;
        transform-origin: left center;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25,0.46,0.46,0.94) 0s;
        visibility: hidden;
        width: auto;
    }
}
    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1;
        }
    }
}
@media screen and (max-width:768px) {
    display: none;
}
 `;

 const Login=styled.a`
 background-color: rgba(0, 0, 0, 0.6);
 padding: 8px 16px;
 text-transform: uppercase;
 cursor: pointer;
 letter-spacing: 1.5px;
 border: 1px solid #f9f9f9;
 border-radius: 4px;
 transition: all 0.2s ease 0s;
 &:hover{
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
 }
 `;

 const UserImg=styled.img`
 height: 100%;
 `;

 const Dropdown=styled.div`
 position: absolute;
 top:48px;
 right: -20px;
 cursor: pointer;
 background-color: rgb(19,19,19);
 border: 1px solid rgba(151,151,151,0.34);
 border-radius: 4px;
 box-shadow: rgb(0 0 0/50%) 0 0 18px 0;
 padding: 10px;
 font-size: 14px;
 letter-spacing: 2px;
 width: 100px;
 opacity: 0;
 `;

 const Signout=styled.div`
 position: relative;
 width: 48px;
 height: 48px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 ${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
 }
 &:hover{
    ${Dropdown}{
    opacity: 1;
    transition-duration: 1s;
    }
 }
 `;


export default Header;