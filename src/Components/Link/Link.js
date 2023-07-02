import './LinkStyle.css';
import LeftArrow from '../../Assets/Arrows/LeftArrow.png'
import RightArrow from '../../Assets/Arrows/RightArrow.png'

function Link({ name, url, direction }) {

    return (

        <a className='link-container' href={url} >

            {direction == "left" ?
                <img src={LeftArrow} />
                :
                <img src={RightArrow} />
            }

            <div>{name}</div>
        </a>

    )
}

export default Link