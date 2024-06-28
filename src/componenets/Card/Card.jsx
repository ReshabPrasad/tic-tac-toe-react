import Icon from "../Icon/Icon"
import './Card.css'

function Card({onPlay,player,index,gameend}){
    let icon=<Icon/>
    if(player=="O"){
        icon= <Icon type={"circle"}/>
    }else if(player=="X"){
        icon= <Icon type={"cross"}/>
    }
    return (
        <div className="card" onClick={()=> player=="" && !gameend && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;