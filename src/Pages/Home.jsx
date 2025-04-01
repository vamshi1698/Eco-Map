import '../Styles/Home.css'
import Tree from '../Components/Tree.jsx'
import Street from '../Components/Street.jsx'
const Home = ()=>{
    return(
        <div className="home">
            <header className='header'>
                <div className="logo">
                    <i className="fa-solid fa-tree"></i>
                    <h2>EcoMap</h2>
                </div>
                <nav className='nav'>
                    <li>
                        <ul><a href="/notification"><i className="fa-regular fa-bell"></i></a></ul>
                        <ul><a href="/profile"><i className="fa-regular fa-user"></i></a></ul>
                    </li>
                </nav>
            </header>
            <main className='main'>
                <div className="search">
                    <input type="text" placeholder='Search for trees...' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <Street />
                <Street />
                <Street />
                <Street />
            </main>
        </div>
    )   
}

export default Home