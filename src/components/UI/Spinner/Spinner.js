const Spinner = (props) => {
    return ( 
        <div className="text-center text-secondary mb-5">
            <div className="spinner-border" role="status" style={{width: '3rem', height: '3rem'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
     );
}
 
export default Spinner;