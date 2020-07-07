/**
 * @file Classe de l'Avatar
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
//Importation des autres classes
import {ObjetVisible} from "./ObjetVisible";
import {Afficheur} from "./Afficheur";
import {Jeu} from "./Jeu";
import {SonFX} from "./SonFX";

// Classe de l'avatar
export class Avatar extends ObjetVisible {

    // Attributs de l'avatar
    private tToucheEnfoncees: Array<boolean> = new Array(false, false, false, false, false); // [Gauche,Haut,Droit,Bas,espace]
    private refMinuterie: number = null;
    private static limite: { haut: number, bas: number, gauche: number, droite: number } = {
        haut: 315,
        bas: 575,
        gauche: 50,
        droite: 750
    };
    private tPointsContact: Array<createjs.MovieClip> = null;
    private nbVie: number = 5;
    private blnInvincibilite: boolean = false;
    private minuterieInvincibilite: number = 0;
    private refAfficheur: Afficheur = null;
    private refJeu: Jeu = null;
    private minuterieMort: number = 0;
    private blnEnTir: boolean = false;
    private minuterieProjectile: number = 0;
    private nbProjectile: number = null;
    private sonProjectile: SonFX = null;
    private sonAvatar: SonFX = null;

    /**
     * Constructeur de l'instance de l'avatar
     * @param {Stage} refScene
     * @param {number} x - position en X
     * @param {number} y - position en Y
     * @param {number} redimensionMax - Taille maximale pour la redimension
     * @param {Afficheur} refAfficheur - Référence de l'afficheur
     * @param {Jeu} refJeu - référence du Jeu
     * @param {SonFX} sonProjectile - SonFX du projectile au lancer
     * @param {SonFX} sonAvatar - SonFX de l'avatar lorsque touché
     */
    public constructor(refScene: createjs.Stage, x: number, y: number, redimensionMax: number, refAfficheur: Afficheur, refJeu: Jeu, sonProjectile: SonFX, sonAvatar: SonFX) {
        super(refScene, x, y, redimensionMax);

        // Position  de l'avatar
        this.x = x;
        this.y = y;

        // Distribution des argument dans les attributs
        this.refAfficheur = refAfficheur;
        this.refJeu = refJeu;
        this.sonProjectile = sonProjectile;
        this.sonAvatar = sonAvatar;

        // Evenement de mouvement
        if (this.nbVie > 0 || this.blnInvincibilite == false) {
            window.onkeydown = this.activerDirection.bind(this);
            window.onkeyup = this.desactiverDirection.bind(this);
        }
        // Tableau de point de détection fine
        this.tPointsContact = new Array();
        this.tPointsContact[0] = this['mcP0'];
        this.tPointsContact[1] = this['mcP1'];
        this.tPointsContact[2] = this['mcP2'];
        this.tPointsContact[3] = this['mcP3'];
        this.tPointsContact[4] = this['mcP4'];

        // Habillage de départ
        this.gotoAndStop("statique");
    }

    /**
     * Fonction de dessin de l'objet
     */
    protected dessiner(): void {
        window.lib.mcAvatar.call(this);
        this.frameBounds = window.lib.mcAvatar.prototype.frameBounds;
    }

    //***********************************************************
    //--------------- Déplacement de l'avatar -------------------
    //***********************************************************

    /**
     * Fonction d'activation du mouvement selon la touche de clavier enfoncée
     * @param {evenement} evenement - la touche enfoncée
     */
    private activerDirection(evenement: KeyboardEvent): void {
        switch (evenement.keyCode) {
            case 37:
                //fleche vers la gauche
                this.tToucheEnfoncees[0] = true;
                evenement.preventDefault();
                break;
            case 65:
                //A
                this.tToucheEnfoncees[0] = true;
                evenement.preventDefault();
                break;
            case 38:
                //fleche vers le haut
                this.tToucheEnfoncees[1] = true;
                evenement.preventDefault();
                break;
            case 87:
                //W
                this.tToucheEnfoncees[1] = true;
                evenement.preventDefault();
                break;
            case 39:
                //fleche vers la droite
                this.tToucheEnfoncees[2] = true;
                evenement.preventDefault();
                break;
            case 68:
                //D
                this.tToucheEnfoncees[2] = true;
                evenement.preventDefault();
                break;
            case 40:
                //fleche vers le bas
                this.tToucheEnfoncees[3] = true;
                evenement.preventDefault();
                break;
            case 83:
                //s
                this.tToucheEnfoncees[3] = true;
                evenement.preventDefault();
                break;
            case 32:
                //barre d'espacemement
                this.tToucheEnfoncees[4] = true;
                evenement.preventDefault();
                break;
        }

        if (this.refMinuterie == null) {
            this.refMinuterie = window.setInterval(this.bouger.bind(this), 1000 / 60);
        }
        // Mise à jour de l'habillage de l'avatar selon les touches enfoncées
        this.majHabillage();
    }

    /**
     * Fonction de désactivation du mouvement selon la touche de clavier enfoncée
     * @param {evenement} evenement - la touche enfoncée
     */
    private desactiverDirection(evenement: KeyboardEvent): void {
        switch (evenement.keyCode) {
            case 37:
                //fleche vers la gauche
                this.tToucheEnfoncees[0] = false;
                evenement.preventDefault();
                break;
            case 65:
                //A
                this.tToucheEnfoncees[0] = false;
                evenement.preventDefault();
                break;
            case 38:
                //fleche vers le haut
                this.tToucheEnfoncees[1] = false;
                evenement.preventDefault();
                break;
            case 87:
                //W
                this.tToucheEnfoncees[1] = false;
                evenement.preventDefault();
                break;
            case 39:
                //fleche vers la droite
                this.tToucheEnfoncees[2] = false;
                evenement.preventDefault();
                break;
            case 68:
                //D
                this.tToucheEnfoncees[2] = false;
                evenement.preventDefault();
                break;
            case 40:
                //fleche vers le bas
                this.tToucheEnfoncees[3] = false;
                evenement.preventDefault();
                break;
            case 83:
                //s
                this.tToucheEnfoncees[3] = false;
                evenement.preventDefault();
                break;
            case 32:
                //barre d'espacemement
                this.tToucheEnfoncees[4] = false;
                evenement.preventDefault();
                break;
        }

        if (this.tToucheEnfoncees.indexOf(true) == -1) {
            window.clearInterval(this.refMinuterie);
            this.refMinuterie = null;
        }
        // Gestion des habillages sauf si l'avatar est en douleur ou mort
        if (this.blnInvincibilite == false && this.nbVie > 0) {
            // Mise à jour de l'habillage pour enlever les habillages qui ne sont plus activés
            this.majHabillage();
        }
    }

    /**
     * Fonction de déplacement de l'avatar selon le statut des booléan dans le tableau de déplacement
     */
    private bouger(): void {
        if (this.tToucheEnfoncees[0] == true) {
            if (this.x > Avatar.limite.gauche) {
                //flèche vers la gauche
                this.x = this.x - 5;
            }
        }
        if (this.tToucheEnfoncees[1] == true) {
            if (this.y > Avatar.limite.haut) {
                //flèche vers le haut
                this.y = this.y - 5;
            }
        }
        if (this.tToucheEnfoncees[2] == true) {
            if (this.x < Avatar.limite.droite) {
                //flèche vers la droite
                this.x = this.x + 5;
            }
        }
        if (this.tToucheEnfoncees[3] == true) {
            if (this.y < Avatar.limite.bas) {
                //flèche vers le bas
                this.y = this.y + 5;
            }
        }

        // En fonction du déplacement en y, on ajuste la taille de l'avatar
        this.redimensionner();
    }

    //***********************************************************
    //--------------- Mise à jour des animations ----------------
    //***********************************************************

    /**
     * Fonction de mise à jour de l'habillage de l'avatar
     */
    private majHabillage(): void {
        if (this.blnInvincibilite == false) {
            // Si en déplacement
            if (this.tToucheEnfoncees[0] == true || this.tToucheEnfoncees[1] == true || this.tToucheEnfoncees[2] == true || this.tToucheEnfoncees[3] == true) {
                if (this.currentLabel != "course") {
                    // Aller au cycle de marche
                    this.gotoAndPlay("course");
                }
            }
            else {
                if (this.currentLabel != "statique") {
                    // Aller à l'image inactif
                    this.gotoAndStop("statique");
                }
            }
            // Si tir un projectile
            if (this.tToucheEnfoncees[4] == true) {
                if (this.blnEnTir == false) {
                    if (this.nbProjectile != 0) {
                        this.debuterTir();
                        this.blnEnTir = true;
                        this.sonProjectile.demarrerSon();
                        this.nbProjectile = this.refAfficheur.majProjectile();
                    }
                }
            }
        }
    }

    //***********************************************************
    //--------------- Gestion des collisions --------------------
    //***********************************************************
    /**
     * Fonction de détection de collision grossière (rectangle)
     * @param {createjs.MovieClip} refDemandeur - Le demandeur qui valide la collision (Ennemi)
     * @return {boolean}
     */
    public enCollisionGrossiereAvec(refDemandeur: createjs.MovieClip): boolean {
        let enCollision: boolean = false;
        if (this.blnInvincibilite == false) {
            let monRect = this.getTransformedBounds();
            let rectDemandeur = refDemandeur.getTransformedBounds();
            enCollision = monRect.intersects(rectDemandeur);
        }
        return enCollision;
    }

    /**
     * Fonction de détection de collision fine
     * @param {createjs.MovieClip} refDemandeur - Le demandeur qui valide la collision (Ennemi)
     * @return {number} L'index du point touché
     */
    public enCollisionFineAvec(refDemandeur: createjs.MovieClip): number {
        let indexPointTouche: number = -1;
        // Pour chacun de mes points de contact
        if (this.blnInvincibilite == false) {
            for (let i: number = 0; i < this.tPointsContact.length && indexPointTouche == -1; i++) {
                let monPoint = this.tPointsContact[i];
                // Convertir mon point en coordonnée local au demandeur
                let monPointLocalAuDemandeur: createjs.Point = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                    indexPointTouche = i;
                }
            }
        }
        return indexPointTouche;
    }

    /**
     * Méthode qui gère les conséquences de la collision (maj des compteurs, invincibilité)
     */
    public gererCollision(): void {
        if (this.blnInvincibilite == false) {
            this.sonAvatar.demarrerSon();
            if (this.nbVie > 0) {
                this.nbVie = this.nbVie - 1;
                this.refAfficheur.majVie(this.nbVie);

                // Fin de vie de l'avatar
                if (this.nbVie == 0) {
                    this.gotoAndPlay("debutMort");
                    window.onkeydown = null;
                    window.onkeyup = null;
                    window.clearInterval(this.refMinuterie);
                    this.refMinuterie = null;
                    this.blnInvincibilite = true;
                }
                // gérer l'invincibilité
                if (this.blnInvincibilite == false) {
                    if (this.nbVie > 0) {
                        this.minuterieInvincibilite = window.setInterval(this.terminerInvincibilite.bind(this), 1500);
                        this.blnInvincibilite = true;
                        this.gotoAndStop("dommage");
                    }
                }
            }
        }
    }

    /**
     * Méthode qui gère la fin de l'invincibilité
     */
    private terminerInvincibilite(): void {
        if (this.blnInvincibilite == true) {
            window.clearInterval(this.minuterieInvincibilite);
            this.minuterieInvincibilite = null;
            this.blnInvincibilite = false;
        }
    }

    //***********************************************************
    //------------------ Gestion du tir -------------------------
    //***********************************************************
    /**
     * Méthode qui le tir de projectile
     */
    private debuterTir(): void {
        let x = this.tPointsContact[0].x;
        let y = this.tPointsContact[0].y;
        let test = this.localToLocal(x, y, this.stage);
        this.refJeu.creerProjectile(test.x, test.y);
        this.minuterieProjectile = window.setInterval(this.arreterTir.bind(this), 500);
    }

    /**
     * Méthode qui la fin de tir de projectile
     */
    private arreterTir(): void {
        this.blnEnTir = false;
        window.clearInterval(this.minuterieProjectile);
        this.minuterieProjectile = null;
    }

    //***********************************************************
    //------------------ Mort de l'avatar -----------------------
    //***********************************************************
    /**
     * Fonction qui appelle la mort de l'avatar à la fin de l'animation de mort (appelé dans Animate)
     */
    private agoniserAvatar(): void {
        this.mortAvatar();
    }

    /**
     * Fonction qui détruit l'objet, ses évènements et minuteries
     */
    public mortAvatar(): void {
        window.onkeyup = null;
        window.onkeydown = null;

        window.clearInterval(this.minuterieMort);
        this.minuterieMort = null;
        window.clearInterval(this.minuterieProjectile);
        this.minuterieProjectile = null;
        window.clearInterval(this.refMinuterie);
        this.refMinuterie = null;
        window.clearInterval(this.minuterieInvincibilite);
        this.minuterieInvincibilite = null;
        this.blnInvincibilite = false;
        this.arreterObjetVisible();
    }
}// Fin classe
