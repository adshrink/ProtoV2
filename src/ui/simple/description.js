export function CutDescriptionAndAppendLastPiece({ description, maxLength = 50 }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const button = () => {
        return (
            <span onClick={handleClick} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                {expanded ? ' ..less' : ' ..more'}
            </span>
        );
    }

    if (description.length <= maxLength || expanded) {
        return <>
            {description}
            {button()}
        </>;
    } else {
        const trimmedDescription = description.substr(0, maxLength);
        const lastPieceIndex = trimmedDescription.lastIndexOf(' ');

        let displayedDescription, appendedDescription;
        if (lastPieceIndex !== -1) {
            displayedDescription = trimmedDescription.substr(0, lastPieceIndex);
            appendedDescription = trimmedDescription.substr(lastPieceIndex);
        } else {
            displayedDescription = trimmedDescription;
            appendedDescription = trimmedDescription;
        }

        return (
            <>
                {displayedDescription}
                {expanded ? appendedDescription : ''}
                {button()}
            </>
        );
    }
}
