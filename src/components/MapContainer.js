import React from 'react';
import styled from 'styled-components';

const IframeResponsive = styled.iframe`
 border: 0;
 @media (min-width: 1000px) {
    width: 100%;
    height: 25rem
 }

 @media (max-width: 760px) {
    width: 100%;
    height: 150px
 }
`
const MapContainer = () => {
    return (
        <IframeResponsive src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31339.389260096224!2d-37.09102988024597!3d-10.931335523317113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sauto%20fast!5e0!3m2!1spt-BR!2sbr!4v1681478193901!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></IframeResponsive>
    );
};

export default MapContainer;
