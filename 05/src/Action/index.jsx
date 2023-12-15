import './style.css';
import Button from '../button';

function Action() {
    return (
        <div className="action">
            <Button className="scondaryButton" button_title="منصرف شدم" />
            <Button className="primaryButton" button_title="تایید" />

        </div>
    )
}


export default Action