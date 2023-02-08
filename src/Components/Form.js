const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleFormSubmit}>
                <label htmlFor="minifig">Enter MiniFigure Name or Type:  </label>
                <input 
                    className='input'
                    placeholder='eg. Policeman, Yoda'
                    type="text"
                    id="minifig"
                    onChange={props.handleInputChange}
                    value={props.minifigs} 
                    /><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;