import './ListItem.css';    

export default function ListItem(props){
    return (
        <li>
            <span>{props.icone}</span> 
            <span className="texto-do-menu">{props.texto}</span>
        </li>
    )
}

//export default ListItem;