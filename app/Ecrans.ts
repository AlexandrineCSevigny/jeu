/**
 * @file Classe des écrans
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */

import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
import {Trame} from "./Trame";
import {SonFX} from "./SonFX";

// Classe des Écrans
export class Ecrans extends ObjetVisible {

    //Attributs des écrans
    private jouerJeu_lier: any = this.niveau1.bind(this);
    private recommencerJeu_lier: any = this.recommencerJeu.bind(this);
    private ecranPrecedent_lier: any = this.ecranPrecedent.bind(this);
    private ecranInstruction_lier: any = this.ecranInstruction.bind(this);
    private refJeu: Jeu = null;
    private refMinuterie: number = 0;
    private niveau:string = null;
    private trameN1:Trame = null;
    private trameN2:Trame = null;
    private sonVictoire:SonFX = null;
    private sonDefaite:SonFX = null;

    /**
     * Constructeur de l'instance des écrans
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {Jeu} refJeu - référence du Jeu
     * @param {string} niveau - Nom du niveau
     * @param {number} vie - nombre de vie
     * @param {number} projectile - nombre de projectile
     * @param {number} temp - Température
     * @param {string} minuterie - Temps en minutes et secondes
     * @param {Trame} trameN1 - Trame du niveau 1
     * @param {Trame} trameN2 - Trame du niveau 2
     * @param {SonFX} sonDefaite - Jingle de défaite
     * @param {SonFX} sonVictoire - Jingle de victoire
     */
    public constructor(refScene: createjs.Stage, x:number, y:number, redimensionMax:number, refJeu:Jeu, niveau:string, vie:number, projectile:number, temp:number, minuterie:string, trameN1:Trame, trameN2:Trame, sonVictoire:SonFX, sonDefaite:SonFX) {
        super(refScene, x, y, redimensionMax);
        this.refJeu = refJeu;
        this.niveau=niveau;
        console.log(temp);
        this.trameN1 = trameN1;
        this.trameN2 = trameN2;
        this.sonVictoire = sonVictoire;
        this.sonDefaite = sonDefaite;

        // etat normal des boutons
        this["btnJouer"].gotoAndStop("normal");
        this["btnRejouer"].gotoAndStop("normal");
        this["btnPrecedent"].gotoAndStop("normal");
        this["btnInstruction"].gotoAndStop("normal");

        // évenements des boutons au clic
        this["btnJouer"].addEventListener("click", this.jouerJeu_lier);
        this["btnRejouer"].addEventListener("click", this.recommencerJeu_lier);
        this["btnPrecedent"].addEventListener("click", this.ecranPrecedent_lier);
        this["btnInstruction"].addEventListener("click", this.ecranInstruction_lier);

        // Selon le message, on redirige au bon ecran
        if (niveau == "niveau1") {
            this.gotoAndStop("presentation");
        }
        else {
            if (niveau == "niveau2") {
                this.niveau2();
            }
            else {
                if(niveau =="defaite") {
                    this.ecranDefaite(projectile, temp, minuterie);
                }
                else {
                    this.ecranVictoire(vie, projectile, temp);
                }
            }
        }
    }

    /**
     * Fonction de dessin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcEcrans.call(this);
        this.frameBounds = window.lib.mcEcrans.prototype.frameBounds;
    }

    //***********************************************************
    //----------------- Gestion des écrans ----------------------
    //***********************************************************

    /**
     * Fonction revenir à l'écran précédent
     */
    private ecranPrecedent(): void {
        this.gotoAndStop("presentation");
    }

    /**
     * Fonction pour aller à l'écran d'instruction
     */
    private ecranInstruction(): void {
        this.gotoAndStop("instruction");
    }

    /**
     * Fonction d'écran du niveau 1
     */
    private niveau1(): void {
        this.gotoAndStop("niveau1");
        this.trameN1.demarrerSon();
        this.refMinuterie = window.setInterval(this.debutJeu.bind(this), 3000);
    }

    /**
     * Fonction d'écran du niveau 2
     */
    public niveau2(): void {
        this.gotoAndStop("niveau2");
        this.trameN2.demarrerSon();
        this.refMinuterie = window.setInterval(this.debutJeu.bind(this), 3000);
    }

    /**
     * Fonction d'affichage d'écran de défaite
     * @param {number} projectile - nombre de projectile restant
     * @param {number} temp - Température actuelle
     * @param {string} minuterie - temps restant
     */
    public ecranDefaite(projectile:number, temp:number, minuterie:string): void {
        this.gotoAndStop("defaite");
        this.sonDefaite.demarrerSon();
        this["ecran_defaite"]["mc_minuterie"]["minuterie"].text = minuterie;
        this["temperature_mc_defaite"].gotoAndStop("temp"+temp);
        this["ecran_defaite"]["mc_projectile"]["nbProjectile"].text = "x"+projectile;
    }

    /**
     * Fonction d'affichage d'écran de victoire
     * @param {number} projectile - nombre de projectile restant
     * @param {number} temp - Température actuelle
     * @param {number} vie - vie restante
     */
    public ecranVictoire(vie:number, projectile:number, temp:number): void {
        this.gotoAndStop("victoire");
        this.sonVictoire.demarrerSon();
        this["temperature_mc_victoire"].gotoAndStop("temp"+temp);
        this["ecran_victoire"]["mc_projectile"]["nbProjectile"].text = "x"+ projectile;
        this["ecran_victoire"]["vie_txt"].text = "x"+ vie;
    }

    //***********************************************************
    //---- Gestion des boutons pour début et recommencer --------
    //***********************************************************
    /**
     * Fonction faisant l'appel à Jeu pour débuter le niveau
     */
    private debutJeu(): void {
        this.refJeu.creerJeu(this.refScene, this.niveau);
        this.arreterEcran();
    }

    /**
     * Fonction pour recommencer le jeu
     */
    private recommencerJeu(): void {
        this.refJeu.recommencer();
    }

    //***********************************************************
    //--------------- Destructions des ecrans -------------------
    //***********************************************************
    /**
     * Fonction des destructions des instances
     */
    public arreterEcran(): void {
        window.clearInterval(this.refMinuterie);
        this.refMinuterie = null;
        this.niveau=null;
        this["btnJouer"].removeEventListener("click", this.jouerJeu_lier);
        this["btnRejouer"].removeEventListener("click", this.recommencerJeu_lier);
        this["btnPrecedent"].removeEventListener("click", this.ecranPrecedent_lier);
        this["btnInstruction"].removeEventListener("click", this.ecranInstruction_lier);
        this.arreterObjetVisible();
    }
}