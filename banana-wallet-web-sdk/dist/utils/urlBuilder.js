"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUrl = exports.buildHash = exports.appendPath = exports.buildQueryString = void 0;
function buildQueryString(queryParams, lowerCase, disableCSV) {
    const queryString = [];
    for (let key in queryParams) {
        if (Object.prototype.hasOwnProperty.call(queryParams, key) &&
            queryParams[key] !== void 0) {
            let param;
            if (disableCSV &&
                Array.isArray(queryParams[key]) &&
                queryParams[key].length) {
                queryParams[key].forEach((v) => {
                    param = v !== 0 ? v || "" : 0;
                    queryString.push(`${key}=${encodeURIComponent(String(param).trim())}`);
                });
            }
            else {
                if (lowerCase) {
                    param = String(queryParams[key]).toLowerCase() || "";
                }
                else {
                    param = queryParams[key] !== 0 ? queryParams[key] || "" : 0;
                }
                queryString.push(`${key}=${encodeURIComponent(String(param).trim())}`);
            }
        }
    }
    return `?${queryString.join("&")}`;
}
exports.buildQueryString = buildQueryString;
function appendPath(paths, builtUrl, lowerCase) {
    if (typeof builtUrl === "undefined") {
        builtUrl = "";
    }
    if (builtUrl[builtUrl.length - 1] === "/") {
        builtUrl = builtUrl.slice(0, -1);
    }
    for (let path of paths) {
        let pathString = String(path).trim();
        if (lowerCase) {
            pathString = pathString.toLowerCase();
        }
        if (pathString.indexOf("/") === 0) {
            builtUrl += pathString;
        }
        else {
            builtUrl += `/${pathString}`;
        }
    }
    return builtUrl;
}
exports.appendPath = appendPath;
function buildHash(hash, lowerCase) {
    let hashString = `#${String(hash).trim()}`;
    return lowerCase ? hashString.toLowerCase() : hashString;
}
exports.buildHash = buildHash;
function buildUrl(url, options) {
    let builtUrl;
    if (url === null) {
        builtUrl = "";
    }
    else if (typeof url === "object") {
        builtUrl = "";
        options = url;
    }
    else {
        builtUrl = url;
    }
    if (options?.path) {
        builtUrl = appendPath(options.path, builtUrl, options.lowerCase);
    }
    if (options?.queryParams) {
        builtUrl += buildQueryString(options.queryParams, options.lowerCase, options.disableCSV);
    }
    if (options?.hash) {
        builtUrl += buildHash(options.hash, options.lowerCase);
    }
    //@ts-ignore
    return builtUrl;
}
exports.buildUrl = buildUrl;
exports.default = buildUrl;
//# sourceMappingURL=urlBuilder.js.map