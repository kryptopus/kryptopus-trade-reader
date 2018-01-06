/**
 * A trade
 */
export default class Trade
{
    static TYPE_BUY:integer     = 0;
    static TYPE_SELL:integer    = 1;

    /**
     * Exchange identifier
     */
    exchangeId:string;

    /**
     * Trade ID from the platform
     */
    id:any;

    /**
     * Base asset
     */
    baseAsset:string;

    /**
     * Quoted asset
     */
    quotedAsset:string;

    /**
     * Timestamp
     */
    timestamp:integer;

    /**
     * Trade type
     * - buy: 0
     * - sell: 1
     */
    type:integer;

    /**
     * Trade amount
     */
    amount:number;

    /**
     * Trade price
     */
    price:number;

    /**
     * Identifier of the buy order
     */
    buyOrderId:any;

    /**
     * Identifier of the sell order
     */
    sellOrderId:any;
}
