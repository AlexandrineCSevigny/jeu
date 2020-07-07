/**
 * @file Classe des décors fixes
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
import {ObjetVisible} from "./ObjetVisible";

// Classe des décors
export class Decors extends ObjetVisible {
    /**
     * Constructeur de l'instance des décors fixes
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {string} niveau - Nom du niveau
     */
    public constructor(refScene: createjs.Stage, x:number, y:number, redimensionMax:number, niveau:string) {
        super(refScene, x, y, redimensionMax);
        this.gotoAndStop(niveau);
    }

    /**
     * Fonction de desssin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcDecors.call(this);
        this.frameBounds = window.lib.mcDecors.prototype.frameBounds;
    }

    //***********************************************************
    //--------------- Destructions des décors -------------------
    //***********************************************************
    /**
     * Fonction des destructions des instances
     */
    public arreterDecors(): void {
        this.arreterObjetVisible();
    }
} // fin de classe