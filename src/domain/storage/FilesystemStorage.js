import {appendFile} from "fs"
import {ensureDirSync} from "fs-extra"

import {bind} from "decko"
import moment from "moment"
import type Trade from "../entity/Trade"
import type {StorageInterface} from "./StorageInterface"

/**
 * Filesystem strategy for the storage
 */
export default class FilesystemStorage implements StorageInterface
{
    /**
     * Directory path
     */
    directoryPath:string;

    /**
     * Constructor
     *
     * @param   {string}    path        Base directory path
     * @param   {string}    exchangeId  Exchange identifier
     * @param   {string}    baseAsset   Base asset
     * @param   {string}    quotedAsset Quoted asset
     */
    constructor(path:string, exchangeId:string, baseAsset:string, quotedAsset:string)
    {
        const pair = `${baseAsset}${quotedAsset}`;
        const directoryPath = `${path}/${exchangeId}/${pair}/trades/`;

        this.directoryPath = directoryPath;
    }

    /**
     * Get trades by interval
     *
     * @param   {number}    startTimestamp  Start timestamp (milliseconds)
     * @param   {number}    endTimestamp    End timestamp (milliseconds)
     * @return  {Trade[]}                   Trades
     */
    @bind
    getByInterval(startTimestamp:number, endTimestamp:number):Array<Trade>
    {
        const startDate = new Date(startTimestamp);
        const startDateString = moment(startDate).utc().format("YYYY-MM-DD");
        const endDate = new Date(endTimestamp);
        const endDateString = moment(endDate).utc().format("YYYY-MM-DD");
        const fileName = `${dateString}.csv`;
        const filePath = `${directoryPath}${fileName}`;
    }
}
