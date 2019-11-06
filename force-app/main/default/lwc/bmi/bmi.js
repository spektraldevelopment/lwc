const getBMI = function (weightInKg, heightinMt) {
    try {
        return weightInKg / (heightinMt * heightinMt)
    } catch (err) {
        return undefined;
    }
}

export {
    getBMI
};