function useFormatNameString(placeName) {
    const normalizedName = placeName.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    if (normalizedName.length > 40) {
        let trimmedName = normalizedName.substr(0, 40).split(' ');
        trimmedName.pop()
        trimmedName.push(' ...');
        return trimmedName.join(' ');
    };
    return normalizedName;
    
    
/*     if (normalizedName.length > 5) {
        const trimmedString = normalizedName.splice(0, 6);
        return trimmedString.join(' ');
    } */

}

export { useFormatNameString };