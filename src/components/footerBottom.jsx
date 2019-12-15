import React from 'react';


const getLink = (title, href, end=false) => {
	return  <a className={(end) ? 'col link end' : 'col link'} href={href}>{title}</a>
};
function FooterBottom(props) {
    return (
        <div className="pb-4" id="footer-bottom-container">
            <div className="row text-center" id="footer-bottom-content">
                {getLink('Corporate Info', 'Content')}
                {getLink('Forums, Blog & More', 'Content')}
                {getLink('Careers', 'Content')}
                {getLink('Accessibility', 'Content')}
                {getLink('Privacy', 'Content', true)}
            </div>
            <div className="row text-center mt-4">
                <div className="col" id="disclaimer">
                    This website was built for a class project, see project @ https://github.com/HRATX-45-FEC-West-Buy
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;