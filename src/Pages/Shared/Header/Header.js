import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNave from '../LeftSideNav/LeftSideNave';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'><Navbar.Brand>Dragon News</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >All News</Nav.Link>
                        <Nav.Link >Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Action</NavDropdown.Item>
                            <NavDropdown.Item >
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {user?.displayName}
                                        <Button onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Nav className="me-auto">
                                            <Nav.Link><Link to='/login'>Log In</Link></Nav.Link>
                                            <Nav.Link><Link to='/register'>Register</Link> </Nav.Link>
                                        </Nav>

                                    </>
                            }
                        </>
                        <Link to='/profile'>
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '35px' }}
                                    roundedCircle
                                    src={user.photoURL}
                                ></Image>
                                :
                                <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNave></LeftSideNave>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;