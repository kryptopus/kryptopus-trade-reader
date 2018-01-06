import {bind} from "decko"
import type {StorageInterface} from "../storage/StorageInterface"
import FilesystemStorage from "../storage/FilesystemStorage"

/**
 * Create storage instances
 */
export default class StorageFactory
{
    /**
     * Constructor
     *
     * @param   {object}    storageConfig   Storage configuration
     */
    constructor(storageConfig:object)
    {
        this.storageConfig = storageConfig;
    }

    @bind
    create(exchangeId:string, baseAsset:string, quotedAsset:string):StorageInterface
    {
        if (this.storageConfig.type === "filesystem") {
            const path = this.storageConfig.path;
            let storage = new FilesystemStorage(path, exchangeId, baseAsset, quotedAsset);
            return storage;
        }

        throw new Error("Unable to create storage");
    }
}
