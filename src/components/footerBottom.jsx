import React from 'react';


const getLink = (title, href, end=false) => {
	return  <a className={(end) ? 'col link end' : 'col link'} href={href}>{title}</a>
};
function FooterBottom(props) {
    return (
        <div className="p-2 pb-4" id="footer-bottom-container">
            <div className="row text-center" id="footer-bottom-content">
                {getLink('Corporate Info', 'Content')}
                {getLink('Forums, Blog & More', 'Content')}
                {getLink('Careers', 'Content')}
                {getLink('Accessibility', 'Content')}
                {getLink('Privacy', 'Content', true)}
            </div>

        </div>
    );
}

export default FooterBottom;