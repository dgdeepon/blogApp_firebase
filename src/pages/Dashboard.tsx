import React from 'react';
import { Link } from 'react-router-dom';


export default function Dashboard(): JSX.Element{



    return <div>
         <Link to={'/dashboard/addBlog'}>
        <button>Add Blog</button>
         </Link>
    </div>
}