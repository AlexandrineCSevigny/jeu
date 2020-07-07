/**
 * Created by mrouleau on 2017-02-24.
 */
import Sound = createjs.Sound;
import AbstractSoundInstance = createjs.AbstractSoundInstance;

export class Sons {
    protected _strURLson:string="";         //chemin vers le son
    protected _idSon:string=null;           //identifiant du son
    protected _finChargement:boolean=false; //booléen de préchargement terminé
    protected _instanceSon:AbstractSoundInstance=null; //instance du son attaché
    protected _maxNumber=0;                 //nombre de pistes pour ce son
    protected _nbLoops=0;                   //nombre de boucles

    /**
     * Constructeur de l'instance de son
     * @param {string} strUrlson - chemin vers le son
     * @param {Array<string>} arrExtAlt
     * @param {string} idSon - identifiant du son
     * @param {number} maxNumber - nombre de pistes pour ce son
     * @param {number} loops - nombre de boucles
     */
    public constructor(strUrlson:string, arrExtAlt:Array<string>, idSon:string, maxNumber:number, loops:number){
        this._strURLson=strUrlson;
        //Identifiant du son
        this._idSon=idSon;
        //Nombre de piste maximum pour ce son...
        this._maxNumber=maxNumber;
        this._nbLoops=loops;
        createjs.Sound.alternateExtensions = arrExtAlt;
        //Précharge le son.
        createjs.Sound.addEventListener("fileload", this.finirChargement.bind(this));
        //Enregistre le son auprès de l'objet Sound
        createjs.Sound.registerSound(this._strURLson, this._idSon, this._maxNumber);
        this.finirChargement();
    }

    /**
     * Fonction pour finir le chargement d'un son
     */
    protected finirChargement(){
        createjs.Sound.removeEventListener("fileload", this.finirChargement.bind(this));
        this._finChargement=true;
    }

    /**
     * Fonction pour débuter un son
     */
    public demarrerSon(){
        if(this._finChargement==true){
            this._instanceSon= createjs.Sound.play(this._idSon, {loop:this._nbLoops});
        }
        else{
            console.log("Son non chargé, en attente...");
        }
    }

    /**
     * Fonction pour arreter un son
     */
    public arreterSon(){
        if(this._instanceSon!=null){
            this._instanceSon.stop();
            this._instanceSon=null;
        }
    }
}