/**
 * Created by mrouleau on 2017-02-24.
 */
import {Sons} from "./Sons";

export class Trame extends Sons {

    /**
     * Constructeur de l'instance de trame
     * @param {string} strUrlson - chemin vers le son
     * @param {Array<string>} arrExtAlt
     * @param {string} idSon - identifiant du son
     * @param {number} maxNumber - nombre de pistes pour ce son
     * @param {number} loops - nombre de boucles
     */
    public constructor(strUrlson: string, arrExtAlt: Array<string>, idSon: string, maxNumber: number, loops: number) {
        super(strUrlson, arrExtAlt, idSon, maxNumber, loops);
        console.log("trame");
    }

    public demarrerSon() {
        //Si une trame ne joue pas
        if (this._instanceSon == null) {
            super.demarrerSon();
        }
    }

    public arreterSon() {
        if (this._instanceSon != null) {
            super.arreterSon();
        }
    }
}