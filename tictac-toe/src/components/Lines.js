import Styles from './Lines.module.css'

function Lines(){

    let column = document.querySelectorAll(".column") // add evento para adição dos símbolos
    column = [...column]

    column.addEventListener("click",(evt)=>{
        console.log(evt.target)
    })

    return(
        <div className={Styles.container_lines}>
            <div className={Styles.lines}>
                <div className={Styles.column}></div>

                <div className={Styles.column}></div>

                <div className={Styles.column}></div>
            </div>
            <div className={Styles.lines}> 
                <div className={Styles.column}></div>

                <div className={Styles.column}></div>

                <div className={Styles.column}></div>
            </div>
            <div className={Styles.lines}>
                <div className={Styles.column}></div>

                <div className={Styles.column}></div>

                <div className={Styles.column}></div>
            </div>
        </div>
    )   

}

export default Lines