/**
 * @file Classe des ennemis
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
// Importation des classe
import {ObjetVisible} from "./ObjetVisible";
import {Avatar} from "./Avatar";
import {Antagoniste} from "./Antagoniste";

// Classe de l'ennemis
export abstract class Ennemis extends ObjetVisible {
    // attribut de la classe Ennemis
    private bouger_lier: any = this.bouger.bind(this);
    private vitesse: number = 0;
    private refAvatar: Avatar = null;
    private refMinuterieCollision: number = null;

    /**
     * Constructeur des ennemis
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {Avatar} refAvatar - référence de l'avatar
     * @param {number} vitesse - vitesse de déplacement
     */
    public constructor(refScene: createjs.Stage, x: number, y: number, redimensionMax: number, refAvatar: Avatar, vitesse: number) {
        super(refScene, x, y, redimensionMax);
        this.mouseChildren = false;
        this.refAvatar = refAvatar;

        // On fait varier la vitesse de mouvement
        this.vitesse = vitesse * 30;
        this.addEventListener("tick", this.bouger_lier);
        this.refMinuterieCollision = window.setInterval(this.verifierCollisionAvatar.bind(this), 1000 / 30);
    }

    //***********************************************************
    //--- Déplacement des ennemis (obstacles et antagonistes) ---
    //***********************************************************
    /**
     * Fonction pour faire bouger les ennemis
     */
    public bouger(evenement:createjs.Event): void {
        this.x = this.x - ((evenement.delta / 1000) * this.vitesse);
        // Si on atteint la limite, on supprime l'objet
        if (this.x < 0) {
            // Important on envoit sa référence
            this.gererSortie();
        }
    }

    //***********************************************************
    //--------------- Collision avec l'avatar -------------------
    //***********************************************************
    /**
     * Fonction valider la collision entre ennemis et avatar
     * @param {evenement}
     */
    private verifierCollisionAvatar(evenement): void {
        // Si je suis proche de l'avatar
        if (this.y - this.refAvatar.y <= 30 && this.y - this.refAvatar.y >= -30) {
            // Est-ce que je touche au rectangle de l'avatar?
            // console.log("contact");
            if (this.refAvatar.enCollisionGrossiereAvec(this) == true) {
                // Est-ce que je touche spécifiquement à l'avatar (ses points de collision fine)
                let indexPointTouche: number = this.refAvatar.enCollisionFineAvec(this);
                if (indexPointTouche != -1) {
                    this.refAvatar.gererCollision();
                    this.gererFinVie();
                }
            }
        }
    }

    /**
     * Fonction retirer la détection de collision durant l'animation de mort des antagonistes
     * @param {Antagoniste} refAntagoniste - Antagoniste qui a déjà reçu une collision
     */
    public arreterDetectionCollision(refAntagoniste: Antagoniste): void {
        window.clearInterval(this.refMinuterieCollision);
        this.refMinuterieCollision = null;
    }

    //***********************************************************
    //------------- Fin de vie et sorties de scène --------------
    //***********************************************************
    /**
     * Fonction pour gérer la mort d'ennemis
     */
    protected abstract gererFinVie(): void ;

    /**
     * Fonction pour gérer la sorie de scène d'ennemis
     */
    protected abstract gererSortie(): void ;

    //***********************************************************
    //--------------- Destructions des ecrans -------------------
    //***********************************************************
    /**
     * Fonction des destructions des instances
     */
    public arreterEnnemis(): void {
        this.removeEventListener("tick", this.bouger_lier);
        window.clearInterval(this.refMinuterieCollision);
        this.refMinuterieCollision = null;
        this.arreterObjetVisible();
    }
}