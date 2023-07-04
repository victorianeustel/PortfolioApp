import './Style.css'

const TechBadge = ({name}) => (
    <div className={`TechBadge` + ` badge-${name.replace(' ', '').replace('.', '').replace('-', '')}`}>
        {name}
    </div>
)
export default TechBadge