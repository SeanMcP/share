const TYPE = {
    undefined: 'undefined'
}

function share(packageName, codeToShare) {
    if (typeof module !== TYPE.undefined && module.exports) {
        module.exports = codeToShare;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(packageName, [], function () {
            return codeToShare;
        });
    } else if (typeof window !== TYPE.undefined) {
        window[packageName] = codeToShare;
    }
};

share('share', share)