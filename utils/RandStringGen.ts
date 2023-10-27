const rand = function() {
    return Math.random().toString(32).substr(2); // remove `0.`
};

export const TokengenBase32= function() {
    return rand() + rand()+ rand()+ rand()+ rand()+ rand()+ rand(); // to make it longer
};

