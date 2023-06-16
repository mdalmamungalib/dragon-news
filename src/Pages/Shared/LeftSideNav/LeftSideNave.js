import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNave = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('https://class-60-61-62-server.vercel.app/newsCatagories')
            .then(res => res.json())
            .then(data => setCatagories(data));
    }, []);


    return (
        <div>
            <h4>All Catagories:{catagories.length}</h4>
            <div>
                {
                    catagories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNave;