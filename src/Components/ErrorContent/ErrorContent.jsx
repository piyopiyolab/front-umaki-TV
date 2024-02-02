import './ErrorContent.scss';
import chibi from "/images/chocked-umaki-anime.png"
import Button from "../../Components/Button/Button"

function ErrorContent({ type }) {

    const refreshErrorTxt = <div>

        <img src={chibi} alt='chibi error umaki.tv' style={{
            maxWidth: '20rem',
            display: 'block',
            margin: '0 auto'
        }} />
        <p className="text-center">Oops, something went wrong...</p>
        {/* <Button
onClick={() => {
setIsButtonEnabled(false);
dispatch(topanimeThunk())

setTimeout(() => {
    setIsButtonEnabled(true);
}, 1200);
}}
disabled={!isButtonEnabled}
text="Please, try again" /> */}
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