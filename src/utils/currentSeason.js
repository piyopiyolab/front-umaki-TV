export const dateForCurrentSeason = () => {
    const currentDate = new Date();
    let season;

    const currentMonth = currentDate.getMonth();


    // Current Year
    const currentYear = currentDate.getFullYear();

    if (currentMonth >= 0 && currentMonth <= 2) {
        season = "Winter";
    }
    else if (currentMonth >= 3 && currentMonth <= 5) {
        season = "Spring";
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        season = "Summer";
    } else {
        season = "Fall";
    }

    return { currentYear, season }
}
