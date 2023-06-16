import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../../BrandCarosel/BrandCarosel';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Contexts/AuthProvider';

const RightSideNave = () => {
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSingIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login width Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login width Github</Button>
            </ButtonGroup>
            <div>
                <h5 className='mt-4'>Find US on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> FacBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> You Tub</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord></FaDiscord> Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNave;