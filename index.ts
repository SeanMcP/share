function share(packageName: string, codeToShare: any) {
    // @ts-ignore
    if (typeof module !== 'undefined' && module.exports) {
        // @ts-ignore
        module.exports = codeToShare;
        // @ts-ignore
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // @ts-ignore
        define(packageName, [], function () {
            return codeToShare;
        });
    } else {
        (<any>window)[packageName] = codeToShare;
    }
};

share('share', share)