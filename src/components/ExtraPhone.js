const ExtraPhone = ({ handleClick }) => {

    return ( 
        <div className="mt-5">
             <div className="phone d-flex align-items-center justify-content-between">
                    <p>Phone #2</p>
                    <p onClick={handleClick} className='remove-btn'>REMOVE</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Make</label>
                        <select className="form-select form-control"  id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Model</label>
                        <select className="form-select form-control" defaultValue='Open this' id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Date of purchase</label>
                        <select className="form-select form-control" defaultValue='Open this' id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Lorem Ipsum</label>
                        <select className="form-select form-control" defaultValue='Open this' id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
        </div>
     );
}
 
export default ExtraPhone;