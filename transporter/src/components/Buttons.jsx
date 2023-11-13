import {React} from 'react'
function Buttons() {
    return (
        <div>
        {buttons.map(button => (
            <ButtonComponent>id = {button.id} buttons={button}</ButtonComponent>
        ))}
        </div>
    );
}
export default buttonList;