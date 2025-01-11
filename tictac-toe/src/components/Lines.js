import Styles from './Lines.module.css'

function Lines(){

    let playerX_time = true

    const tabuleiro = {
        supEsq: "", supMei: "", supDir: "",
        meiEsq: "", meiMei: "", meiDir: "",
        infEsq: "", infMei: "", infDir: ""
    }

    let h1_Player = null

    function addMark(caixaClick){
        let verificar = verificarVelhaOuVencedor()

        h1_Player = document.querySelector("#timePlayer")

        let caixa = document.getElementById(caixaClick)

        if(tabuleiro[caixaClick] !== "" && verificar === false){
            h1_Player.innerHTML = "Já foi escolhido!"
            return
        }

        if(verificar === false){
            if(playerX_time){
                caixa.innerHTML = "X"
                tabuleiro[caixaClick] = "X"
                caixa.classList.add(Styles.corX)
                h1_Player.innerHTML = "Vez do Jogador O"
                playerX_time = false
            } else{
                caixa.innerHTML = "O"
                tabuleiro[caixaClick] = "O"
                caixa.classList.add(Styles.corO)
                h1_Player.innerHTML = "Vez do Jogador X"
                playerX_time = true
            }
        } 
    }

    function verificarVelhaOuVencedor(){ 
        const vitorias = [
            ["supEsq","supMei","supDir"],
            ["meiEsq","meiMei","meiDir"],
            ["infEsq","infMei","infDir"],
            ["supEsq","meiEsq","infEsq"],
            ["supMei","meiMei","infMei"],
            ["supDir","meiDir","infDir"],
            ["supEsq","meiMei","infDir"],
            ["supDir","meiMei","infEsq"]
        ]

        for(const linha of vitorias){
            const [a,b,c] = linha;
            if(tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]){
                const vencedor = tabuleiro[a]
                h1_Player.innerHTML = `Vencedor: Jogador ${vencedor}`

                return true
            } 
        }

        if(Object.values(tabuleiro).every((valor)=> valor !== "")){
            h1_Player.innerHTML = "Deu velha!"

            return true
        }

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