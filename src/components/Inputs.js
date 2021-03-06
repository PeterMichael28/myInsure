
const Inputs = ({label, labelFor, type, placeholder, onChange, value, name }) => {
    return ( 
        <div className="mb-3">
        <label htmlFor={labelFor} className="form-label m-0 mb-1">{label}</label>
        <input 
            type={type} 
            className="form-control" 
            id={labelFor} 
            placeholder={placeholder} 
            required 
            onChange = {onChange}
            value = {value}
            name={name}
            />
        </div>
     );
}
 
export default Inputs;