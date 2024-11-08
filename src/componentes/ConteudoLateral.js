import logo from '../imagens/Instagram-Wordmark-Logo.wine.svg';
import ListItem from './ListItem';
import Story from './Story';

import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { IoAtSharp } from "react-icons/io5";
export default function ConteudoLateral() {
  return (
    <div className='ConteudoLateral'>
      <img src={logo} className='logo' alt='Logo' />

      <div>
        <ul className='menuLateral'>
          <ListItem texto='Home' icone={
            <GoHomeFill style={{ fontSize:"24px", margin:"8px"}} />
          } 
          />
          <ListItem texto= "pesquisa" icone={<IoIosSearch style={{ fontSize:"24px", margin:"8px", top:"-10px"}} />}/>
          
          <ListItem icone={<MdOutlineExplore style={{ fontSize:"24px", margin:"8px"}}/>} texto="Explorar" />
          <ListItem texto= "mensagem" icone={< FaRegComment style={{ fontSize:"24px", margin:"8px", alignItems: "center"}} />} />
          <ListItem icone={<CiHeart style={{ fontSize:"24px", margin:"8px"}}/>} texto="Notificações" />
          <ListItem texto="perfil" icone={ <IoPersonCircleOutline style={{ fontSize:"24px", margin:"8px"}}/>} />
          <ListItem texto="  criar" icone= { <  CgAddR style={{ fontSize:"24px", margin:"8px",borderRadius:"10px"}} />}/>
          
        </ul>
      </div>


      <div>
        <ul className='menuLateral'>
     
          
          
          <ListItem texto="  Threads" icone= { <  IoAtSharp style={{ fontSize:"24px", margin:"8px"}} />}/>
          <ListItem texto="  Mais" icone= { < FaBars style={{ fontSize:"24px", margin:"8px"}} />}/>
        </ul>
      </div>
      
    </div>
    
    
  );
}