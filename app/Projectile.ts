/**
 * @file Classe des Projectiles
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
import {Afficheur} from "./Afficheur";

// Classe des projectiles
export class Projectile extends ObjetVisible {
    //Attributs des decors
    private bouger_lier: any = this.bouger.bind(this);
    private refJeu:Jeu = null;
    private refAfficheur:Afficheur= null;
    private blnInvincibilite:boolean = false;

    /**
     * Constructeur de l'instance du projectile
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {Jeu} jeu - référence du Jeu
     * @param {Afficheur} refAfficheur - référence de l'avatar
     */
    public constructor(refScene: createjs.Stage, x:number, y:number, redimensionMax:number, jeu:Jeu, refAfficheur:Afficheur) {
        super(refScene, x, y, redimensionMax);
        this.gotoAndPlay("tir");
        this.addEventListener("tick", this.bouger_lier);
        this.refJeu = jeu;
        this.refAfficheur=refAfficheur;
    }

    /**
     * Fonction de dessin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcProjectile.call(this);
        this.frameBounds = window.lib.mcProjectile.prototype.frameBounds;
    }

    /**
     * Fonction de déplacement du projectile
     */
    private bouger(): void {
        this.x = this.x + 7;
        // Si on atteint la limite, on supprime l'objet
        if (this.x > 799) {
            // Important on envoit sa référence
            this.gererSortieScene();
        }
    }

    //***********************************************************
    //--------------- Gestion des collisions --------------------
    //***********************************************************
    /**
     * Fonction de détection de collision grossière (rectangle)
     * @param {createjs.MovieClip} refDemandeur - Le demandeur qui valide la collision (Antagoniste)
     * @return {boolean}
     */
    public enCollisionGrossiereAvec(refDemandeur: createjs.MovieClip): boolean {
        if (this.blnInvincibilite == false) {
            let enCollision:boolean = false;
            let monRect = this.getTransformedBounds();
            let rectDemandeur = refDemandeur.getTransformedBounds();
            enCollision = monRect.intersects(rectDemandeur);
            return enCollision;
        }
    }

    /**
     * Méthode qui gère les conséquences de la collision (maj des compteurs, invincibilité)
     */
    public gererCollision(): void {
        if (this.blnInvincibilite == false) {
            this.blnInvincibilite = true;
            this.refAfficheur.majTemperature("collision");
            this.gotoAndPlay("debutMort");
        }
    }

    //***********************************************************
    //------------------ Gestion de Mort ------------------------
    //***********************************************************
    /**
     * Méthode qui est exécutée à la fin de l'animation de mort
     */
    private explosion():void {
        this.blnInvincibilite = false;
        this.refJeu.arreterProjectile(this);
    }

    /**
     * Méthode qui gère la sortie de scène
     */
    private gererSortieScene():void {
        this.refJeu.arreterProjectile(this);
    }

    /**
     * Méthode qui détruit l'objet et retire les evenements
     */
    public arreterProjectile():void {
        this.removeEventListener("tick", this.bouger_lier);
        this.arreterObjetVisible();
    }
} // Fin de classe