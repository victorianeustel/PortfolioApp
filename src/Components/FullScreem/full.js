import './full.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function Full() {
    const [show, setShow] = useState(false);


    return (

        <div className='test-cont'>
            <button onClick={() => setShow((current) => !current)}>
                Show
            </button>
            <CSSTransition
                //1. state (enter/exit - boolean)
                in={show}
                //2. duration
                timeout={5000}
                //3. classname 
                classNames="test"
            >
                <div id='square'>
                    hi
                </div>
            </CSSTransition>
        </div>

    )
}

export default Full;