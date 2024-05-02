const Navbar = () => {
    return(
           <div className="navbar-container">
               <div><img src={require('../asset/logo/mehrashop-logo.png')}/></div>
               <div className="navbar-center">
                   <span className="menu-item">خانه</span>
                   <span className="menu-item">وبلاگ</span>
                   <span className="menu-item">داستان ما</span>
                   <span className="menu-item">تماس با ما</span>
               </div>
               <div className="navbar-left">
                   <img className="menu-icon" src={require('../asset/icons/Account icon 2.png')}/>
                   <img className="menu-icon" src={require('../asset/icons/Heart icon.png')}/>
                   <img className="menu-icon" src={require('../asset/icons/Cart icon 2.png')}/>
               </div>
           </div>
    )
}
export default Navbar