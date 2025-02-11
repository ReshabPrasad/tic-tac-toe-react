import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isWinner from "../helpers/isWinner";



function isDraw(board){
    for(let i=0;i<9;i++){
        if(board[i]=="")return false;
    }
    return true;
}



function Grid({number}){
    const [turn,setturn]=useState(true);
    const [board,setboard]=useState(Array(number).fill(""));
    const [winner,setwinner]=useState(null);
    const [draw,setdraw] = useState(false);

    function play(index){
        console.log("move played",index);
        if(turn==true){
            board[index]="O";
        }else{
            board[index]="X";
        }
        const win = isWinner(board,(turn)? "O" : "X");
        if(win){
            setwinner(win);
            toast.success(`Congratulation ${win} win the game`);
        }
        else if(isDraw(board)){
            console.log(draw);
            setdraw(true);
            toast.warning(`The game is a draw`);
        }
        setturn(!turn);
        setboard([...board]);

    }

    function reset(){
        setboard(Array(number).fill(""));
        setwinner(null);
        setturn(true);
    }
    return (
        <div className="grid-wrapper">
            {winner && (<h1 className="h1">Winner : {winner}</h1>)}
            {!winner && draw && (<h1 className="h1">The game is a draw</h1>)}
            <div>
            <ToastContainer position="bottom-center"/>
            <h1 className="h1">TIC-TAC-TOE</h1>
            <h2 className="h2">Current Turn: {(turn) ? "O" : "X"} </h2>
            </div>
            <div className="grid">
                {board.map((value, idx) => {
                    return <Card  onPlay={play} gameend={(winner) ? true : false} player={value} key={idx} index={idx} />
                })}
            </div>
            <div className="container">
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Grid;