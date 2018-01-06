import type Trade from "../entity/Trade"

/**
 * Storage
 */
export interface StorageInterface
{
    /**
     * Get trades by interval
     *
     * @param   {number}    startTimestamp  Start timestamp
     * @param   {number}    endTimestamp    End timestamp
     * @return  {Trade[]}                   Trades
     */
    getByInterval(startTimestamp:number, endTimestamp:number):Array<Trade>;
}
