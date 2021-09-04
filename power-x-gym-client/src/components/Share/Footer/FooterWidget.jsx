import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FooterWidget = ({ footer }) => {
    return (
        <div className="single_footer_item">
            <div className="widget-heading">
                <h5>{footer.name}</h5>
            </div>
            <div className="footer_content">
                {
                     footer.link && footer.link.map((data, idx) => 
                        <li key={idx}><a href={data.path}>{data.item}</a></li>
                    )
                }
                {
                    footer.sosalLink && footer.sosalLink.map((data, idx)=>
                    <a href={data.path} title={data.item} key={idx}><FontAwesomeIcon icon={data.icon}/></a>
                    )
                }
                {
                    footer.body && <p>{footer.body}</p>
                }
            </div>
        </div>
    );
};

export default FooterWidget;