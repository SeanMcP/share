function share(packageName, codeToShare) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = codeToShare;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(packageName, [], function () {
            return codeToShare;
        });
    } else {
        window[packageName] = codeToShare;
    }
};

share('share', share)