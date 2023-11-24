import Register from "./Register";
import {useContext, useEffect} from 'react';
import {UserContext} from './UserContext.jsx';

export default function Routes(){
   const {username, id} = useContext(UserContext);

   if(username){
    return 'logged in!';
   }
    return(
    <Register />
   ); 
}