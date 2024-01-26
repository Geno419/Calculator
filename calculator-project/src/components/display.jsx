
const Display = ((props) => {
    console.log(props)

    return(
        <section>
            <div className = 'features'>
                <h1 id= "calculatorScreen">{props.displayText}</h1>
            </div>
        </section>
    )
})


export default Display

