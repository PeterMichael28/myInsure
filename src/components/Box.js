const Box = ({topText, BotText, lastText }) => {
    return ( 
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>{topText}</h1>
            <h1>{BotText}</h1>
            <h1>{lastText}</h1>
        </div>
     );
}
 
export default Box;