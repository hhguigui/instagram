
import './Stories.css';
export default function Perfils(props) {
    return (
        <div className='Perfils'>
            <div className='imagem-do-usuario'>
                <img src={props.foto} alt={props.nome}/>
            </div>

            <div className='nome-do-usuario'>
                <span>{props.nome}</span>
            </div>
        </div>
    );
}