import './style.scss'
import { Link } from 'react-router-dom'


export default function HeaderBar(){
    const isLogin = false;
    const userCurrent = {
        name: "Oggy",
        id: 1,
        image: " "
    };

    //let history = useHistory();
    const handleOrdersOfUser = (userId) => {
        //history.push(`/orders/${userId}`);
    }

    const handleLogOut = () => {
        window.location.href = "/"
    }     

    return(
        <div className="header-bar row-hh">
            <div className="col-4 logo-page">
                {/* <span><img src="/assets/images/icon_logo_page.png"></img></span> */}
            </div>

            <div className="col-4 list-page">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sale">Sale</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="col-4 icon-tool-page">
                <Link to="/cart"><span className="icon-cart-2"><i class='bx bx-shopping-bag icon-2'></i></span></Link> 

                {
                    isLogin && userCurrent.name !==" "  ?
                        <span className="icon-cart-2" onClick={()=>handleOrdersOfUser(userCurrent.id)}><i class='bx bx-detail icon-2'></i></span>
                    : ''
                }

                {
                    isLogin && userCurrent.name !==" "  ?
                        <div className="info-user-current"> 
                            <span className="icon-logout-2" onClick={()=>handleLogOut()}><i class='bx bx-log-out-circle icon-2' ></i></span>  
                            {
                                userCurrent.image && !(userCurrent.image===" ") ? <img alt="" src = {process.env.REACT_APP_API_IMG + userCurrent.image}></img> :
                                <img alt="" src = "/assets/images/cat.png"></img>
                            }  
                             <span className="iuc-name">{userCurrent.name}</span>
                        </div> 
                    : <Link to="/login"><span className="icon-login-2"><i class='bx bx-log-in-circle icon-2' ></i></span></Link>
                } 

            </div> 
        </div>
    )
}