import './CoolButton.css';

const CoolButton = (props) => {
    const { btnClass, title, abc } = props;
    console.log("test props", abc)
    return (
        <button className={btnClass}>{title}</button>
    )
}

export default CoolButton;