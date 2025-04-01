const Report = ()=>{
    return(
        <div className="form-container">
            <i className="fa-solid fa-x"></i>
            <form className="issue-form" action="#">
                <h3>Report Tree Issue</h3>
                <label htmlFor="issue-type">Issue Type</label>
                <select name="Issue-Type" id="issue-type">
                    <option value="Disease">Disease</option>
                    <option value="Damage">Damage</option>
                    <option value="Safety Hazard">Safety Hazaard</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
                <button type="submit" id="submit-issue">Submit Report</button>
            </form>
        </div>
    )
}
export default Report