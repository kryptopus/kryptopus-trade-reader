/* @flow */
import type Application from "solfegejs-application/src/Application"
import type {BundleInterface} from "solfegejs-application/src/BundleInterface"

/**
 * Trade reader bundle
 */
export default class Bundle implements BundleInterface
{
    /**
     * Get bundle path
     *
     * @return  {String}        The bundle path
     */
    getPath():string
    {
        return __dirname;
    }
}
