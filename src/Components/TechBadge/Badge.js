/*==================== 
Keyword Tech Badge 
==================== */
import './Style.css'

//characters in regular expression to be removed
const removeChar = /[0-9.-\s]/g;

const TechBadge = ({name}) => (

    //custom classname for customization based on keyword name
    <div className={`TechBadge badge-${name.replace(removeChar, '')}`}>
        {name}
    </div>
)
export default TechBadge