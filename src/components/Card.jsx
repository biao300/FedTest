function RenderDocument(documentSize, highlight='')
{
    return (
        documentSize ? 
        <>
            <div className="item__document">
                <img src="/images/svg/document.svg" alt="document" />&nbsp;
                {`PDF(${documentSize})`}
            </div> 
            <div className={`item__arrow ${highlight}`}>
                <img src="/images/svg/arrow-down.svg" alt="arrow down" />
            </div>
        </> : 
        <div className={`item__arrow ${highlight}`}>
            <img src="/images/svg/arrow-right.svg" alt="arrow right" />
        </div>
    );
}

function RenderOneItem(props, highlight='') {
    const {title, description, link, documentSize} = props.data;

    return (
        <div className={`item ${highlight}`}>
            <a target="_blank" rel="noreferrer" href={link} className={`item__title ${highlight}`}>{title}</a>
            <p className={`item__description ${highlight}`}>{description}</p>
            {
                RenderDocument(documentSize, highlight)
            }
        </div>
    );
}

function Card(props) {
    const {index} = props;

    return (
        index === 0 ? 
        <div className="col-md-6 col-sm-6 col-xs-12">
            {RenderOneItem(props, 'highlight')}
        </div>
        :
        <div className="col-md-3 col-sm-6 col-xs-12">
            {RenderOneItem(props)}
        </div>
    );
}

export default Card;