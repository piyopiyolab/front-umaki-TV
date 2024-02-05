// function for homePage Layout (favorites' number)


export const formatNumber = (number) => {
    if (number >= 1000) {
        const truncatedNumber = Math.floor(number / 1000);
        return `${truncatedNumber} k`;
    }
    return number.toString();
}

// console.log(formatNumber(16608)); // Résultat : "16 K"
