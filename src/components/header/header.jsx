import logo from '../../assets/global_image/logo.jpg'

function Header() {

    return (<nav className="navbar navbar-expand-md navbar-light w-100">
        <div className="container px-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start offcanvas-nav" tabIndex="-1" id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel" style={{width: '20rem'}}>
                <div className="offcanvas-header">

                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body pt-0 align-items-center">
                    <ul className="navbar-nav mx-auto align-items-md-center">
                        <li className="nav-link">Тестовое Задние</li>
                        <li className="nav-link">Рыскаль Никита</li>
                        <li className="nav-link">Позиция Backend</li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>)
}
export default Header