import './ErrorContent.scss';
import chibi from "/images/chocked-umaki-anime.png"
import Button from "../../Components/Button/Button"

function ErrorContent() {
    return (
        <div>

            <img src={chibi} alt='chibi error umaki.tv' />
            <p className="text-center">Oops, something went wrong...</p>
            <Button
                onClick={() => {
                    setIsButtonEnabled(false);
                    dispatch(topanimeThunk())

                    setTimeout(() => {
                        setIsButtonEnabled(true);
                    }, 1200);
                }}
                disabled={!isButtonEnabled}
                text="Please, try again" />
        </div>

    )
}
export default ErrorContent