/**
 * @file Classe des Obstacles
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
// Importation des clases
import {Ennemis} from "./Ennemis";
import {Jeu} from "./Jeu";
import {SonFX} from "./SonFX";
import {Avatar} from "./Avatar";

// Classe des obstacles
export class Obstacle extends Ennemis {
    //Attributs des obstacles
    private refJeu: Jeu = null;
    private sonObstacle: SonFX = null;

    /**
     * Constructeur de l'instance de l'obstacle
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} vitesse - vitesse des antagonistes
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {string} niveau - Message qui dicte le niveau
     * @param {Jeu} refJeu - référence du Jeu
     * @param {Avatar} refAvatar - référence de l'avatar
     * @param {SonFX} sonObstacle - SonFX de mort de l'obstacle
     */
    public constructor(vitesse: number, refScene: createjs.Stage, x: number, y: number, redimensionMax: number, refJeu: Jeu, refAvatar: Avatar, niveau: string, sonObstacle: SonFX) {
        super(refScene, x, y, redimensionMax, refAvatar, vitesse);
        this.refJeu = refJeu;
        this.sonObstacle = sonObstacle;
        this.gotoAndStop(niveau);
    }

    /**
     * Fonction de dessin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcObstacle.call(this);
        this.frameBounds = window.lib.mcObstacle.prototype.frameBounds;
    }

    //***********************************************************
    //--------------- Mort et sortie de scène -------------------
    //***********************************************************
    /**
     * Fonction de gestion de fin de vie des obstacles
     */
    protected gererSortie(): void {
        this.refJeu.arreterObstacle(this);
    }

    /**
     * Fonction de gestion de fin de vie lorsque l'obstacle sort de la scène
     */
    protected gererFinVie(): void {
        if (this != null) {
            this.sonObstacle.demarrerSon();
            // this.refJeu.arreterObstacle(this);
        }
    }

    /**
     * Fonction qui détruit l'objet, ses évènements et minuteries
     */
    public arreterObstacle(): void {
        this.arreterEnnemis();
    }
} // fin de classe