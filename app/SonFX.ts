/**
 * Created by mrouleau on 2017-02-24.
 */
import {Sons} from "./Sons";

export class SonFX extends Sons{

    /**
     * Constructeur de l'instance de sonFX
     * @param {string} strUrlson - chemin vers le son
     * @param {Array<string>} arrExtAlt
     * @param {string} idSon - identifiant du son
     * @param {number} maxNumber - nombre de pistes pour ce son
     * @param {number} loops - nombre de boucles
     */
    public constructor(strUrlson:string,arrExtAlt:Array<string>, idSon:string , maxNumber:number){
        super(strUrlson,arrExtAlt,idSon, maxNumber, 0);
        console.log("sonfx");
    }
    public demarrerSon(){
        super.demarrerSon();
    }
    public arreterSon(){
        //console.log("decharger");
    }
}
