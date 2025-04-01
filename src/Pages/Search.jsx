import '../Styles/Search.css'
import Tree from '../Components/Tree'
const Search = ()=>{
    return(
        <div className="search-page">
            <div className="search">
                <input type="text" name="search" placeholder='Place Name' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <Tree />
            <Tree />
            <Tree />
        </div>
    )
}

export default Search