import { Link } from 'react-router-dom';
import errorImge from '../assets/images/errorImg.gif'

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <img src={errorImge} alt="errorimage" />
            <Link to='/'>
                <button className='recipe_add_item_btn '>BACK TO HOME</button>
            </Link>
        </div>
    );
};

export default ErrorPage;