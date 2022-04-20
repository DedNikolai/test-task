export function getVsitedIyemsArr(cookie, arr) {
    if (cookie.visited) {
        let set = new Set(cookie.visited.split(','));
        return arr.filter((item, index) => set.has((index+1).toString()));
    }
    return [];
};

export function getVisitedList(cookie, id) {
    let set = new Set(cookie.visited.split(','));
    set.add(id);
    return Array.from(set).join(',');
};

