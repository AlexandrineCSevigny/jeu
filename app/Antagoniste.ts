/**
 * @file Classe des Antagonistes
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
// Importation des classes
import {Ennemis} from "./Ennemis";
import {Jeu} from "./Jeu";
import {Projectile} from "./Projectile";
import {Afficheur} from "./Afficheur";
import {Avatar} from "./Avatar";
import {SonFX} from "./SonFX";

//Classe de l'antagoniste
export class Antagoniste extends Ennemis {
    // Attribut de l'antagoniste
    private refJeu: Jeu = null;
    private reftProjectile: Array<Projectile> = new Array();
    private MinuterieCollision: number = 0;
    private blnCollision: boolean = false;
    private refAfficheur: Afficheur = null;
    private sonAntagoniste: SonFX = null;

    /**
     * Constructeur de l'instance de l'avatar
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} vitesse - vitesse des antagonistes
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {Afficheur} refAfficheur - Référence de l'afficheur
     * @param {Jeu} refJeu - référence du Jeu
     * @param {Avatar} refAvatar - référence de l'avatar
     * @param {Projectile} tProjectile - Tableau d'occurence de projectile
     * @param {SonFX} sonAntagoniste - SonFX de mort de l'antagoniste
     */
    public constructor(vitesse: number, refScene: createjs.Stage, x: number, y: number, redimensionMax: number, refJeu: Jeu, refAvatar: Avatar, tProjectile: Array<Projectile>, refAfficheur: Afficheur, sonAntagoniste: SonFX) {
        super(refScene, x, y, redimensionMax, refAvatar, vitesse);
        this.refJeu = refJeu;
        this.reftProjectile = tProjectile;
        this.refAfficheur = refAfficheur;
        this.sonAntagoniste = sonAntagoniste;
        this.MinuterieCollision = window.setInterval(this.verifierCollisionProjectile.bind(this), 1000 / 30);
    }

    /**
     * Fonction de dessin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcAntagoniste.call(this);
        this.frameBounds = window.lib.mcAntagoniste.prototype.frameBounds;
    }

    //***********************************************************
    //--------------- Collision avec les projectiles ------------
    //***********************************************************
    /**
     * Fonction de vérification de collision entre projectile et antagoniste
     * @param {evenement} evenement - L'objet qui réagit aux évènements
     */
    private verifierCollisionProjectile(evenement: createjs.Event): void {
        if (this.blnCollision == false) {
            // Vérifie proximité en y des 2 objets
            for (let i: number = 0; i < this.reftProjectile.length; i++) {
                if (this.y - this.reftProjectile[i].y <= 50 && this.y - this.reftProjectile[i].y >= -10) {
                    // Est-ce que je touche au rectangle du projectile?
                    if (this.reftProjectile[i].enCollisionGrossiereAvec(this) == true) {
                        this.blnCollision = true;
                        window.clearInterval(this.MinuterieCollision);
                        this.MinuterieCollision = null;
                        this.arreterDetectionCollision(this);
                        this.reftProjectile[i].gererCollision();
                        this.gererFinVie();
                    }
                }
            }
        }
    }

    //***********************************************************
    //--------------- Morts et sortie de scène -------------------
    //***********************************************************
    /**
     * Fonction de gestion de fin de vie des antagonistes (Projectile et Avatar)
     */
    protected gererFinVie(): void {
        this.sonAntagoniste.demarrerSon();
        this.gotoAndPlay("debutMort");
    }

    /**
     * Fonction qui appelle la mort de l'antagoniste à la fin de l'animation de mort (appelé dans Animate)
     */
    private agoniser(): void {
        this.refJeu.arreterAntagoniste(this);
    }

    /**
     * Fonction de gestion de fin de vie lorsque l'antagoniste sort de la scène
     */
    protected gererSortie(): void {
        this.refJeu.arreterAntagoniste(this);
        this.refAfficheur.majTemperature("sortie");
    }

    /**
     * Fonction qui détruit l'objet, ses évènements et minuteries
     */
    public arreterAntagoniste(): void {
        window.clearInterval(this.MinuterieCollision);
        this.MinuterieCollision = null;
        this.arreterEnnemis();
    }
}// fin de classe