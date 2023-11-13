import {React} from 'react'
const ButtonComponent = ({buttons})=> {
    return (
        <a key = {buttons.id} href={buttons.href} target="_blank">
            <button id={button.id}>{button.text}</button>
            </a>  
    )
}