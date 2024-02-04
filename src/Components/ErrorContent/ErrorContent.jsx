import './ErrorContent.scss';
import chibi from "/images/chocked-umaki-anime.png"
import Button from "../../Components/Button/Button"


//type "add adnime, 404, 500
function ErrorContent({ type }) {

    const refreshErrorTxt =
        <div>

            <img src={chibi} alt='chibi error umaki.tv' style={{
                maxWidth: '20rem',
                display: 'block',
                margin: '0 auto'
            }} />
            <p className="text-center">Oops, something went wrong...</p>
        </div>

    const LogStatusErrorTxt = <div>
        <img src={chibi} alt='chibi error umaki.tv' style={{
            maxWidth: '20rem',
            display: 'block',
            margin: '0 auto'
        }} />
        <p className="text-center">It looked like you are not logged</p>

    </div>

    return (
        <>
            {refreshErrorTxt}
            {LogStatusErrorTxt}

        </>

    )
}
export default ErrorContent