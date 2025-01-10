import Styles from './Lines.module.css'

function Lines(){

    let playerX_time = true
    let playerO_time = false

    function addMark(caixaClick){
        let caixa = document.getElementById(caixaClick)

        if(playerX_time === true){
            caixa.innerHTML = "X"
            playerO_time = true
            playerX_time = false
        } else{
            caixa.innerHTML = "O"
            playerO_time = false
            playerX_time = true
        }

    }

    return(
        <div className={Styles.container_lines}>
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