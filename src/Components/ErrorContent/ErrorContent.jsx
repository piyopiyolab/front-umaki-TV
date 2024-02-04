import './ErrorContent.scss';
import chibi from "/images/chocked-umaki-anime.png"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import sadChibi from "/images/nolist-sad-anime.png"

//type "add adnime, 404, 500
function ErrorContent({ type }) {

    let content;

    switch (type) {
        case 'log-out':

            content = (
                <>
                    <Header />
                    <h1 className='text-center'>It looked like you are not logged !</h1>
                    <div className='errorContentBody'>
                        <img src={chibi} alt='chibi error umaki.tv' />

                        <div className="errorContentBody__btn">
                            <a href='./connexion/log-in'>Log-In</a>
                            <a href='./connexion/sign-up'>Sign-up</a>
                        </div>

                    </div>
                    <Footer />
                </>)
            break;

        case 'error':

            content =

                (
                    <>
                        <div className='errorContentBody'>

                            <img src={chibi} alt='chibi error umaki.tv' />
                            <p className="text-center">Oops, something went wrong...</p>
                            <a href='./'>Home</a>
                        </div>
                    </>
                );
            break;

        case 'addAnime':

            content = (
                <>
                    <Header />
                    <h1 className='text-center'>It looked like you are not logged !</h1>
                    <div className='errorContentBody'>
                        <img src={sadChibi} alt='chibi error umaki.tv' />

                        <div className="errorContentBody__btn">
                            <a href='./connexion/log-in'>Add an Anime</a>

                        </div>

                    </div>
                    <Footer />

                </>
            )


    }

    return (
        <>

            {content}

        </>

    )
}
export default ErrorContent