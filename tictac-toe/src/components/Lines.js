import Styles from './Lines.module.css'

function Lines(){

    let playerX_time = true
    let playerO_time = false

    const tabuleiro = {
        supEsq: "", supMei: "", supDir: "",
        meiEsq: "", meiMei: "", meiDir: "",
        infEsq: "", infMei: "", infDir: ""
    }

    function addMark(caixaClick){
        let verificar = verificarVelhaOuVencedor(tabuleiro)

        let caixa = document.getElementById(caixaClick)
        let h1_Player = document.querySelector("#timePlayer")

        if(verificar === false && tabuleiro[caixaClick] === ""){
            tabuleiro[caixaClick] = "."
            if(playerX_time){
                caixa.innerHTML = "X"
                caixa.classList.add(Styles.corX)
                h1_Player.innerHTML = "Vez do Jogador O"
                playerO_time = true
                playerX_time = false
            } else{
                caixa.innerHTML = "O"
                caixa.classList.add(Styles.corO)
                h1_Player.innerHTML = "Vez do Jogador X"
                playerO_time = false
                playerX_time = true
            }
        } else{
            h1_Player.innerHTML = "Já foi escolhido."
        } 
    }

    function verificarVelhaOuVencedor(tabuleiro){ // parei aqui
        
        return false
    }

    return(
        <div className={Styles.container_lines}>
            <h1 id="timePlayer">Vez do Jogador X</h1>
            <div className={Styles.lines}>
                <div className={Styles.column} id="supEsq" onClick={(evt)=>addMark(evt.target.id)}></div>

                <div className={Styles.column} id="supMei" onClick={(evt)=>addMark(evt.target.id)}></div>

                <div className={Styles.column} id="supDir" onClick={(evt)=>addMark(evt.target.id)}></div>
            </div>
            <div className={Styles.lines}> 
                <div className={Styles.column} id="meiEsq" onClick={(evt)=>addMark(evt.target.id)}></div>

                <div className={Styles.column} id="meiMei" onClick={(evt)=>addMark(evt.target.id)}></div>

                <div className={Styles.column} id="meiDir" onClick={(evt)=>addMark(evt.target.id)}></div>
            </div>
            <div className={Styles.lines}>
                <div className={Styles.column} id="infEsq" onClick={(evt)=>addMark(evt.target.id)}></div>

                <div className={Styles.column} id="infMei" onClick={(evt)=>addMark(evt.target.id)}></div>

                <div className={Styles.column} id="infDir" onClick={(evt)=>addMark(evt.target.id)}></div>
            </div>
        </div>
    )   

}

export default Lines