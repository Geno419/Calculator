import {Display, Numbers, Operations} from './index'

const Calculator = (() => {

    let displayText = ""
    function updateDisplay(newText){
        displayText = newText
    }


    function pressNumber(event){
        const pressedNumber = event.target.id
        
        updateDisplay(pressNumber)
    }


    return(
        <section>
            <div className= 'box'>
            <Display displayText={displayText}/>
            <Numbers pressedNumber = {pressedNumber}/>
            <Operations/>
            </div>
        </section>
    )
})


export default Calculator