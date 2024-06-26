import './ErrorContent.scss';
import chibi from "/images/chocked-umaki-anime.png"
import sadChibi from "/images/nolist-sad-anime.png"
import waitChibi from "/images/chibi_wait.png"

//type "add adnime, 404, 500
function ErrorContent({ type }) {

    let content;

    switch (type) {
        case 'log-out':

            content = (
                <>


                    <div className='errorContentBody'>
                        <h2 className='text-center'>It looked like you are not logged !</h2>
                        <img src={chibi} alt='chibi error not logged umaki.tv' />
                    </div>

                </>)
            break;

        case 'error':

            content =

                (
                    <>

                        <h2 className='text-center'>It looked like an error has occured...</h2>
                        <div className='errorContentBody'>

                            <img src={chibi} alt='chibi error umaki.tv' />
                        </div>

                    </>)
            break;

        case 'addAnime':

            content = (
                <>
                    <div className='errorContentBody'>
                        <h2 className='text-center'>It looked like you have no animes in your list</h2>
                        <img src={sadChibi} alt='chibi error umaki.tv' />
                    </div>

                </>)
            break;

        case 'failedLog':

            content = (
                <>
                    <div className='errorContentBody'>
                        <p className='text-center'>Authentification failed</p>
                        <img src={sadChibi} alt='chibi error umaki.tv' />
                    </div>

                </>)
            break;


        case 'errorMDP':
            content = (
                <>
                    <div className='errorContentBody'>
                        <p className='text-center'>Your passwords must be the same </p>
                        <img src={sadChibi} alt='chibi error umaki.tv' />
                    </div>

                </>


            )
            break;

        case '404':
            content = (
                <>
                    <div className='errorContentBody'>
                        <p className='text-center'>The page that you're looking for doesn't exist </p>
                        <img src={chibi} alt='chibi error umaki.tv' />
                    </div>

                </>


            )
            break;


        case 'dev':
            content = (
                <>
                    <div className='errorContentBody'>
                        <h1 className='text-center'>It's not ready yet... </h1>
                        <img src={waitChibi} alt='chibi error umaki.tv' />
                    </div>

                </>


            )
            break;

    }

    return (
        <>

            {content}

        </>

    )
}
export default ErrorContent