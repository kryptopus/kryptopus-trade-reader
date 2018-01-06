/* @flow */
import type {ContainerInterface} from "solfegejs-dependency-injection/interface"
import ContainerAwareCommand from "solfegejs-cli/lib/Command/ContainerAwareCommand"
import type StorageFactory from "../../domain/service/StorageFactory"

/**
 * Read trades
 */
export default class ReadCommand extends ContainerAwareCommand
{
    /**
     * Constructor
     *
     * @param   {StorageFactory}    storageFactory  Storage factory
     */
    constructor(storageFactory:StorageFactory)
    {
        super();

        this.storageFactory = storageFactory;
    }

    /**
     * Configure the command
     */
    async configure()
    {
        this.setName("read");
        this.setDescription("Read trades of an exchange");
    }

    /**
     * Execute the command
     *
     * @param   {Array}     parameters  Command parameters
     */
    async execute(parameters:Array<string>)
    {
        const exchangeId:string = parameters[0];
        let baseAsset:string = parameters[1];
        let quotedAsset:string = parameters[2];
        baseAsset = baseAsset.toLowerCase();
        quotedAsset = quotedAsset.toLowerCase();

        console.log(`Read ${baseAsset}/${quotedAsset} from ${exchangeId}`);

        const storage = this.storageFactory.create(exchangeId, baseAsset, quotedAsset);
    }
}
