/**
 * @file Classe d'Objet visible
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
// Classe d'objet Visible
export abstract class ObjetVisible extends createjs.MovieClip {
    //Attributs de ObjetVisible
    protected refScene:createjs.Stage = null;
    protected redimensionMax:number = 0;

    /**
     * Constructeur de l'objet visible
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     */
    public constructor(refScene:createjs.Stage, x:number, y:number, redimensionMax)
    {
        super();
        this.refScene = refScene;
        this.gotoAndStop(0);
        this.dessiner();
        refScene.addChild(this);
        this.x = x;
        this.y = y;
        this.redimensionMax = redimensionMax;
        this.redimensionner();
    }

    /**
     * Fonction de desssin de l'objet
     */
    protected abstract dessiner(): void;

    /**
     * Méthode de redimenssion d'un objet selon la profondeur
     */
    public redimensionner():void{
        if(this.redimensionMax != -1) {
            let facteurDeRedimensionnement:number = this.redimensionMax * (this.y/window.lib.properties.height);
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
        }
    }

    /**
     * Fonction pour retourner la position d'un clip
     * @return {createjs.MovieClip} Le movieClip
     */
    public retournerMonClip():createjs.MovieClip{
        return this;
    }

    /**
     * Fonction pour détruire l'objet d'Objet visible
     */
    public arreterObjetVisible():void{
        this.refScene.removeChild(this);
    }
}