import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    return (
   <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31339.389260096224!2d-37.09102988024597!3d-10.931335523317113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sauto%20fast!5e0!3m2!1spt-BR!2sbr!4v1681478193901!5m2!1spt-BR!2sbr" style={{border: 0, width: "250%", height: "25rem"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   );
};

export default MapContainer;
