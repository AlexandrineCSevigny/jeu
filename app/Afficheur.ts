/**
 * @file Classe de l'afficheur
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */

// Importation des classes
import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";

// Classe de l'afficheur global
export class Afficheur extends ObjetVisible {
    //Attributs de l'afficheur global
    private minuterie: number = null;
    private secondes: any = null;
    private minute: any = null;
    private cptTemp: number = 0;
    private nbProjectile: number = null;
    private nbVie: number = 5;
    private refJeu: Jeu = null;
    private niveau: string = null;
    private minuterieFin: number = null;

    /**
     * Constructeur de l'instance de l'afficheur
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {Jeu} refJeu - référence du Jeu
     * @param {string} niveau - Nom du niveau
     */
    public constructor(refScene: createjs.Stage, x: number, y: number, redimensionMax: number, refJeu: Jeu, niveau: string) {
        super(refScene, x, y, redimensionMax);

        // Mettre les sous-clip au frame 0 pour éviter les bogues
        this["projectile_mc"].gotoAndStop(0);
        this["minuterie_mc"].gotoAndStop(0);
        this["vie_mc"].gotoAndStop(0);

        // Création de la minuterie du niveau
        this.minuterie = window.setInterval(this.gererMinuterie.bind(this), 1000);

        // Distribution des argumenta dans les attributs
        this.refJeu = refJeu;
        this.niveau = niveau;

        // Selon les niveaux, ajustement des compteurs
        if (niveau == "niveau1") {
            this.secondes = 30;
            this.minute = 1;
            this.nbProjectile = 35;
        }
        if (niveau == "niveau2") {
            this.secondes = 60;
            this.minute = 1;
            this.nbProjectile = 50;
        }
        // Appel à la méthode pour contourner le bogue Create.Js qui ne traite pas les sous-clip lorsque l'appel est fait dans le constructeur
        this.initialiserCompteur();
    }

    // ==========================================================
    // Méthode d'initialisation de l'objet
    //===========================================================
    /**
     * Fonction de dessin de l'objet
     */
    // Dessin des instances
    protected dessiner(): void {
        window.lib.mcAfficheur.call(this);
        this.frameBounds = window.lib.mcAfficheur.prototype.frameBounds;
    }

    /**
     * Fonction pour initialiser les textes et clips de l'afficheur à sa création
     */
    private initialiserCompteur(): void {
        this["minuterie_mc"]["minuterie"].text = this.minute + ":" + this.secondes;
        this["projectile_mc"]["nbProjectile"].text = "x" + this.nbProjectile;
        if (this.niveau == "niveau2") {
            this["minuterie_mc"]["minuterie"].text = "2:00";
        }
    }

    // ==========================================================
    // Méthode utilitaires pour récupérer de l'information
    //===========================================================
    /**
     * Fonction qui retourne le nombre de vie  affiché par l'afficheur
     * @return {number} Le nombre de vie
     */
    public recupererVie(): number {
        return this.nbVie;
    }

    /**
     * Fonction qui retourne le nombre de projectile  affiché par l'afficheur
     * @return {number} Le nombre de projectile
     */
    public recupererProjectile(): number {
        return this.nbProjectile;
    }

    /**
     * Fonction qui retourne la température affichée par l'afficheur
     * @return {number} La température
     */
    public recupererTemp(): number {
        return this.cptTemp;
    }

    /**
     * Fonction qui retourne le temps restant affiché par l'afficheur
     * @return {string} Le temps de la minuterie
     */
    public recupererMinuterie(): string {
        let temps = this.minute + ":" + this.secondes;
        return temps;
    }


    //***********************************************************
    //------------------ MaJ des vies ---------------------------
    //***********************************************************
    /**
     * Fonction de mise à jour de l'afficheur de vie
     * @param {number} nbVie - Le nombre de vie de l'avatar
     */
    public majVie(nbVie:number): void {
        this.nbVie = nbVie;
        nbVie = nbVie + 1;
        this["vie_mc"]["coeur" + nbVie].gotoAndStop("vie_vide");

        // On valide la fin du niveau pour déterminer si c'est une défaite ou un changement de niveau
        if (this.nbVie == 0) {
            this.minuterieFin = window.setInterval(this.validationReference.bind(this), 1500);
        }
    }

    //***********************************************************
    //------------------- Gestion du temps ----------------------
    //***********************************************************
    /**
     * Fonction de mise à jour de la minuterie de niveau
     */
    private gererMinuterie(): void {
        if (this.secondes >= 0 && this.minute >= 0) {
            // Vérifie qu'un des élément est toujours suppérieur à 0
            if (this.secondes > 0 || this.minute > 0) {
                this.secondes = this.secondes - 1;
                // Si les secondes atteigne moins de 10, il faut ajouter un 0 concaténé
                if (this.secondes < 10) {
                    this.secondes = "0" + this.secondes;
                    // Lorsque les secondes atteignent 0, il faut changer la minute et reconvertir cette minute en secondes
                    if (this.secondes < 1 && this.minute > 0) {
                        this.secondes = parseInt(this.secondes);
                        this.secondes = this.secondes + 60;
                        this.minute = this.minute - 1;
                    }
                }
            }
            else {
                // Si on atteint 0 pour les minute et seconde, on valide les compteurs pour le changement de niveau/ecran
                if (this.secondes == 0 && this.minute == 0) {
                    this.secondes = "00";
                    window.clearInterval(this.minuterie);
                    this.minuterie = null;
                    // validation de fin de niveau
                    // this.minuterieFin = window.setInterval(this.validationReference.bind(this), 1500);
                    this.validationReference();
                }
            }
            // Affichage des minutes et secondes
            this["minuterie_mc"]["minuterie"].text = this.minute + ":" + this.secondes;
        }
    }

    //***********************************************************
    //--------------- Gestion de la température -----------------
    //***********************************************************
    /**
     * Fonction de mise à jour de la température sur le thermomètre
     * @param {string} valeur - La valeur indique soit "collision" ou "sortie" de l'antagoniste ce qui modifie le comportement
     */
    public majTemperature(valeur: string): void {
        if (this.cptTemp >= 0 && this.cptTemp <= 9) {
            // S'il y a une collision entre le projectile et l'antagoniste, on réduit la température
            if (valeur == "collision") {
                if (this.cptTemp >= 1) {
                    this.cptTemp = this.cptTemp - 1;
                }
            }
            else {
                // Si l'antagoniste sort de la scène, on augmente la température
                if (this.cptTemp <= 8) {
                    this.cptTemp = this.cptTemp + 1;
                }
            }
            this["thermometre_mc"].gotoAndStop("temp" + this.cptTemp);
        }
    }

    //***********************************************************
    //--------------- Gestion des projectiles -------------------
    //***********************************************************
    /**
     * Fonction de mise à jour de l'afficheur des projectiles
     * @return {number} Le nombre de projectile restant
     */
    public majProjectile(): number {
        if (this.nbProjectile > 0) {
            this.nbProjectile = this.nbProjectile - 1;
            this["projectile_mc"]["nbProjectile"].text = "x" + this.nbProjectile;
        }
        return this.nbProjectile
    }


    //***********************************************************
    //--------------- Appel de validation du jeu ----------------
    //***********************************************************
    /**
     * Fonction d'appel de validation au jeu
     */
    private validationReference(): void {
        window.clearInterval(this.minuterieFin);
        this.minuterieFin = null;
        this.refJeu.validationFinNiveau(this.nbVie, this.cptTemp);
    }

    //***********************************************************
    //--------------- Destruction de l'afficheur ----------------
    //***********************************************************
    public arreterAfficheur(): void {
        window.clearInterval(this.minuterie);
        this.minuterie = null;
        window.clearInterval(this.minuterieFin);
        this.minuterieFin = null;
        this.arreterObjetVisible();
    }
}// fin de classe