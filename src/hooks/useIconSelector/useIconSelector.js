import { useLocation } from 'react-router-dom';

import park from '../../assets/icons/park.svg';
import railroad from '../../assets/icons/railroad.svg';
import statue from '../../assets/icons/statue.svg';
import theater from '../../assets/icons/theater.svg';

function useIconSelector(placeName) {
    const location = useLocation();
    console.log(location.pathname);
    if (placeName.includes('plaza') || placeName.includes('parque') || placeName.includes('jardín')) return park;
    if (placeName.includes('museo')) return statue;
    if (placeName.includes('teatro')) return theater;
    if (location.pathname === "/Parks") return park;
    if (location.pathname === "/Museums") return statue;
    return railroad;
}

export { useIconSelector };