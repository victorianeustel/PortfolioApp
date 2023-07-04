import './Style.css'

const TechBadge = ({name}) => (
    <div className={`TechBadge` + ` badge-${name.replace(/[0-9.-\s]/g, '')}`}>
        {name}
    </div>
)
export default TechBadge