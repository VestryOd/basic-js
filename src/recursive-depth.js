module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let depth = 0;

        arr.map(el => el instanceof Array ? depth = Math.max(this.calculateDepth(el), depth) : depth);

        return ++depth;
    }
};