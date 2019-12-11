import React from 'react';

const getLinkHead = (title, href) => {
	return <a href={href} className="row link head">{title}</a>;
};

const getLink = (title, href) => {
	return <a href={href} className="row link">{title}</a>;
};

function FooterLinks(props) {
    return (
        <div className="p-4" id="footer-links-container" >
            <div className="row pl-2"  id="footer-links-content">
                <div className="col">
                    {getLinkHead('My West Buy', '/my-west-buy')}
                    {getLink('View Points & Certificates', '/points')}
                    {getLink('Member Offers', '/content')}
                    {getLinkHead('Credit Cards', '/credit-cards')}
                    {getLink('Make a Payment', '/content')}
                    {getLink('Check Balance', '/content')}
                    {getLink('Credit Card Offers', '/content')}
                    {getLink('Apply Now', '/content')}
                </div>
                <div className="col">
                    {getLinkHead('Orders & Returns', '/orders-returns')}
                    {getLink('Order Status', '/content')}
                    {getLink('Shipping, Delivery & Pickup', '/content')}
                    {getLink('Returns & Exchanges', '/content')}
                    {getLink('Price Matching', '/content')}
                </div>
                <div className="col">
                    {getLinkHead('Support & Services', '/support-services')}
                    {getLink('Custom Service', '/content')}
                    {getLink('Protection Plans', '/content')}
                    {getLink('Service', '/content')}
                    {getLink('Trade-In Program', '/content')}
                    {getLink('Product Recalls', '/content')}
                </div>
                <div className="col">
                    {getLinkHead('Partnerships', '/partnerships')}
                    {getLink('Afilliate Program', '/content')}
                    {getLink('Developers', '/content')}
                    {getLink('West Buy Education', '/content')}
                    {getLink('Advertise With Us', '/content')}
                    {getLink('Work For Us', '/content')}
                    {getLinkHead('International Sites', '/international-sites')}
                    {getLink('West Buy Mexico', '/content')}
                    {getLink('West Buy Canada', '/content')}
                </div>
            </div>
        </div>
    );
}

export default FooterLinks;