export type IQueryParams = Record<string, null | undefined | string | number | string[] | (string | number)[]>;
export declare function buildQueryString(queryParams: IQueryParams, lowerCase?: boolean, disableCSV?: boolean): string;
export declare function appendPath(paths: Array<string>, builtUrl: string, lowerCase?: boolean): string;
export declare function buildHash(hash: string | number, lowerCase?: boolean): string;
interface IUrlOptions {
    path?: Array<string>;
    lowerCase?: boolean;
    queryParams?: IQueryParams;
    disableCSV?: boolean;
    hash?: string | number;
}
declare function buildUrl(url?: string | null | IUrlOptions, options?: IUrlOptions): string;
export { buildUrl };
export default buildUrl;
