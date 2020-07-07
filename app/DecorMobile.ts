/**
 * @file Classe des décors mobiles
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
import {ObjetVisible} from "./ObjetVisible";

// Classe des décors mobiles
export class DecorsMobiles extends ObjetVisible {
    //Attributs des decors
    private static vitesse1erPlan: number = 5;
    private static vitesse2emePlan: number = 1;
    private bouger_lier: any = this.bougerDecors.bind(this);

    /**
     * Constructeur de l'instance des décors mobiles
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {string} etiquette - Nom de l'étiquette à aller chercher pour le bon decor
     */
    public constructor(refScene: createjs.Stage, x: number, y: number, redimensionMax: number, etiquette: string) {
        super(refScene, x, y, redimensionMax);

        // Selon l'étiquette, on appelle le type de décors en fonction du niveau
        this.gotoAndStop(etiquette);
        this.addEventListener("tick", this.bouger_lier);
    }

    /**
     * Fonction de dessin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcDecorsMobiles.call(this);
        this.frameBounds = window.lib.mcDecorsMobiles.prototype.frameBounds;
    }

    //***********************************************************
    //--------------- Déplacement des décors -------------------
    //***********************************************************
    /**
     * Fonction du déplacement des décors
     */
    private bougerDecors(): void {
        // ******** Niveau 1 ***********
        // Décors de 1er plan
        if (this.currentLabel == "niveau1_bas") {
            this.x = this.x - DecorsMobiles.vitesse1erPlan;
        }
        // Décors de 2eme plan
        if (this.currentLabel == "niveau1_haut") {
            this.x = this.x - DecorsMobiles.vitesse2emePlan;
        }
        // ********  Niveau 2 **********
        // Décors de 1er plan
        if (this.currentLabel == "niveau2_bas") {
            this.x = this.x - DecorsMobiles.vitesse1erPlan;
        }
        // Décors de 2eme plan
        if (this.currentLabel == "niveau2_haut") {
            this.x = this.x - DecorsMobiles.vitesse2emePlan / 4;
        }
        if (this.x <= 0) {
            this.x = 800;
        }
    }

    //***********************************************************
    //--------------- Destructions des décors -------------------
    //***********************************************************
    /**
     * Fonction des destructions des instances
     */
    public arreterDecorsMobiles(): void {
        this.removeEventListener("tick", this.bouger_lier);
        this.arreterObjetVisible();
    }
} // fin de classe