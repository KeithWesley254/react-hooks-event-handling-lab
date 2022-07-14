// Code EyesOnMe Component Here
function EyesOnMe(){
    function formSubmit(e){
        e.preventDefault();
    }
    function focusEvent(){
        console.log("Good!")
    }
    function blurEvent(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <form onSubmit={formSubmit}>
            <button 
            onFocus={focusEvent}
            onBlur={blurEvent}
            >
                Eyes on me

            </button>
        </form>
    )
}

export default EyesOnMe