/**
 * @file Classe du Jeu
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */

// Importation des Classes
import {Avatar} from "./Avatar";
import {Antagoniste} from "./Antagoniste";
import {Obstacle} from "./Obstacle";
import {Afficheur} from "./Afficheur";
import {Decors} from "./Decors";
import {DecorsMobiles} from "./DecorMobile";
import {Projectile} from "./Projectile";
import {Ecrans} from "./Ecrans";
import {Trame} from "./Trame";
import {SonFX} from "./SonFX";

export class Jeu {
    // Attribut de Jeu
    private enVie: boolean = false;
    private refAvatar: Avatar = null;
    private tRefAntagoniste: Array<Antagoniste> = null;
    private tRefObstacle: Array<Obstacle> = null;
    private refMinuterieAntagoniste: number = 0;
    private refMinuterieObstacle: number = 0;
    private refScene: createjs.Stage = null;
    private refAfficheur: Afficheur = null;
    private decors: Decors = null;
    private decorsMobileAvant: DecorsMobiles = null;
    private decorsMobileFond: DecorsMobiles = null;
    private tProjectile: Array<Projectile> = null;
    private refEcrans: Ecrans = null;
    private classerObjetsEnProfondeur_lier: any = this.classerObjetsEnProfondeur.bind(this);
    private niveau: string = "niveau1";
    private trameN1: Trame = null;
    private trameN2: Trame = null;
    private sonDefaite: SonFX = null;
    private sonVictoire: SonFX = null;
    private sonObstacle: SonFX = null;
    private sonProjectile: SonFX = null;
    private sonAntagoniste: SonFX = null;
    private sonAvatar: SonFX = null;
    private blnTrameN1: boolean = false;
    private blnTrameN2: boolean = false;

    /**
     * Constructeur du Jeu
     * @param {Stage} refScene
     */
    public constructor(refScene: createjs.Stage) {
        this.refScene = refScene;
        // Création de la musique et des sons
        this.sonDefaite = new SonFX("./sons/defaite.mp3", ["mp3"], "defaite", 20);
        this.sonVictoire = new SonFX("./sons/victoire.mp3", ["mp3"], "victoire", 20);
        this.trameN1 = new Trame("./sons/niveau1.mp3", ["mp3"], "trameN1", 1, -1);
        this.trameN2 = new Trame("./sons/niveau2.mp3", ["mp3"], "trameN2", 1, -1);
        this.sonObstacle = new SonFX("./sons/obstacle.mp3", ["mp3"], "obstacle", 20);
        this.sonProjectile = new SonFX("./sons/projectile.mp3", ["mp3"], "projectile", 20);
        this.sonAntagoniste = new SonFX("./sons/mortAntagoniste.mp3", ["mp3"], "antagoniste", 20);
        this.sonAvatar = new SonFX("./sons/mortAvatar.mp3", ["mp3"], "avatar", 20);

        // Initialisation de l'écran selon l'avancement du jeu
        this.initialiserEcrans(refScene, this.niveau, -1, -1, -1, "", this.trameN1, this.trameN2, this.sonVictoire, this.sonDefaite);
    }

    //***********************************************************
    //--------------------- Création du jeu ---------------------
    //***********************************************************
    /**
     * Fonction pour initialiser les écrans
     * @param {Stage} refScene
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
    private initialiserEcrans(refScene: createjs.Stage, niveau: string, vie: number, projectile: number, temp: number, minuterie: string, trameN1: Trame, trameN2: Trame, sonVictoire: SonFX, sonDefaite: SonFX): void {
        this.refEcrans = new Ecrans(refScene, 0, 0, -1, this, niveau, vie, projectile, temp, minuterie, trameN1, trameN2, sonVictoire, sonDefaite);
    }

    /**
     * Fonction pour créer (instancier) les éléments du jeu
     * @param {Stage} refScene
     * @param {string} niveau - Nom du niveau
     */
    public creerJeu(refScene: createjs.Stage, niveau: string): void {
        this.refEcrans.arreterEcran();
        // Si le jeu n'existe pas, on le crée
        if (this.enVie == false) {
            this.refAfficheur = new Afficheur(refScene, 800, 0.5, -1, this, this.niveau);
            this.refAvatar = new Avatar(refScene, 100, 500, 1.5, this.refAfficheur, this, this.sonProjectile, this.sonAvatar);
            this.decors = new Decors(refScene, 0, 0, -1, this.niveau);

            // Selon le niveau
            if (niveau == "niveau1") {
                this.decorsMobileAvant = new DecorsMobiles(refScene, 800, 600, -1, niveau + "_bas");
                this.decorsMobileFond = new DecorsMobiles(refScene, 800, 265, -1, niveau + "_haut");
                this.trameN1.demarrerSon();
                this.blnTrameN1 = true;
            } else {
                this.decorsMobileAvant = new DecorsMobiles(refScene, 800, 601, -1, niveau + "_bas");
                this.decorsMobileFond = new DecorsMobiles(refScene, 800, 200, -1, niveau + "_haut");
                this.trameN2.demarrerSon();
                this.blnTrameN2 = true;
            }
            this.enVie = true;
            this.tRefAntagoniste = new Array();
            this.tRefObstacle = new Array();
            this.tProjectile = new Array();
            createjs.Ticker.addEventListener("tick", this.classerObjetsEnProfondeur_lier);
            // On crée les minuteries pour faire apparaître les obstacles et antagonistes
            this.refMinuterieAntagoniste = window.setInterval(this.creerAntagoniste.bind(this), 2000);
            this.refMinuterieObstacle = window.setInterval(this.creerObstacle.bind(this), 1500);
        }
    }

    /**
     * Fonction pour recommencer le jeu
     */
    public recommencer(): void {
        this.niveau = "niveau1";
        this.initialiserEcrans(this.refScene, this.niveau, -1, -1, -1, "", this.trameN1, this.trameN2, this.sonVictoire, this.sonDefaite);
    }

    //***********************************************************
    //------------ Création d'éléments du jeu -------------------
    //***********************************************************
    /**
     * Fonction pour créer les antagonistes
     */
    private creerAntagoniste(): void {
        // On efface la minuterie pour la recréer en lui attribuant une durée variable
        window.clearInterval(this.refMinuterieAntagoniste);
        this.refMinuterieAntagoniste = null;

        // Minuterie pour créer des antagonistes selon des échelles de temps différentes
        let hasardMinuterie: number = Math.floor(Math.random() * 3000) + 2000;
        this.refMinuterieAntagoniste = window.setInterval(this.creerAntagoniste.bind(this), hasardMinuterie);

        // Détermine la vitesse au hasard
        let vitesse: number = Math.floor(Math.random() * 3) + 2;

        // On attribue une hauteur variable pour l'apparaition de l'antagoniste
        let hasardY: number = Math.floor(Math.random() * 250) + 315;
        if (hasardY > 550) {
            hasardY = 550;
        }
        this.tRefAntagoniste.push(new Antagoniste(vitesse, this.refScene, 825, hasardY, 1, this, this.refAvatar, this.tProjectile, this.refAfficheur, this.sonAntagoniste));
    }

    /**
     * Fonction pour créer les obstacles
     */
    private creerObstacle(): void {
        //On efface la minuterie et la ré-initialise pour lui donner une durée variable
        window.clearInterval(this.refMinuterieObstacle);
        this.refMinuterieObstacle = null;

        // Minuterie pour créer des obstacles selon des échelles de temps différentes
        let hasardMinuterie: number = Math.floor(Math.random() * 3000) + 2000;
        this.refMinuterieObstacle = window.setInterval(this.creerObstacle.bind(this), hasardMinuterie);

        let vitesse: number = 3;

        // On donne une hauteur variable et on instancie l'obstacle
        let hasardY: number = Math.floor(Math.random() * 250) + 315;
        if (hasardY > 550) {
            hasardY = 550;
        }
        this.tRefObstacle.push(new Obstacle(vitesse, this.refScene, 825, hasardY, 1.2, this, this.refAvatar, this.niveau, this.sonObstacle));
    }

    /**
     * Fonction pour créer les projectiles
     * @param {number} x - position en x
     * @param {number} y - position en y
     */
    public creerProjectile(x: number, y: number): void {
        this.tProjectile.push(new Projectile(this.refScene, x, y, 1.2, this, this.refAfficheur));
    }

    //***********************************************************
    //--------------- Validation du niveau ----------------------
    //***********************************************************
    /**
     * Fonction pour valider le objectifs de fin de niveau
     * @param {number} vie - Nombre de vie de l'avatar
     * @param {number} temp - Température
     */
    public validationFinNiveau(vie: number, temp: number): void {
        if (vie == 0) {
            this.arreterJeu("defaite");
        } else {
            if (temp > 5) {
                this.arreterJeu("defaite");
            }
            if (temp <= 5) {
                if (this.niveau == "niveau1") {
                    this.arreterJeu("niveau2");
                    this.niveau = "niveau2";
                } else {
                    this.arreterJeu("victoire");
                }
            }
        }
    }

    //***********************************************************
    //-------- Destruction du jeu et de ses éléments ------------
    //***********************************************************
    /**
     * Fonction pour détruire les instances du jeu
     * @param {string} bilan - Raison de la fin de jeu
     */
    public arreterJeu(bilan: string): void {
        // Récupère les informations pour les envoyer en résumé pour les écrans
        let vie: number = this.refAfficheur.recupererVie();
        let projectile: number = this.refAfficheur.recupererProjectile();
        let temp: number = this.refAfficheur.recupererTemp();
        let minuterie: string = this.refAfficheur.recupererMinuterie();

        // Initialisation des écrans
        this.initialiserEcrans(this.refScene, bilan, vie, projectile, temp, minuterie, this.trameN1, this.trameN2, this.sonVictoire, this.sonDefaite);

        if (this.enVie == true) {
            // Détruit les minuteries
            createjs.Ticker.removeEventListener("tick", this.classerObjetsEnProfondeur_lier);
            window.clearInterval(this.refMinuterieAntagoniste);
            this.refMinuterieAntagoniste = null;
            window.clearInterval(this.refMinuterieObstacle);
            this.refMinuterieObstacle = null;

            // Détruit les éléments
            if (this.tRefAntagoniste != null) {
                this.arreterTousAntagonistes();
            }
            if (this.tRefObstacle != null) {
                this.arreterTousObstacle();
            }
            if (this.tProjectile != null) {
                this.arreterTousProjectiles();
            }
            this.decors.arreterDecors();
            this.decorsMobileAvant.arreterDecorsMobiles();
            this.decorsMobileFond.arreterDecorsMobiles();
            if (this.refAvatar != null) {
                this.refAvatar.mortAvatar();
            }
            this.refAfficheur.arreterAfficheur();
            this.enVie = false;
            this.refAvatar = null;
            this.refAfficheur = null;
            this.decors = null;
            this.decorsMobileAvant = null;
            this.decorsMobileFond = null;
            this.tRefAntagoniste = null;
            this.tRefObstacle = null;
            this.tProjectile = null;

            // Termine les trames sonores
            if (this.blnTrameN1 == true) {
                this.trameN1.arreterSon();
                this.blnTrameN1 = false;
            }
            if (this.blnTrameN2 == true) {
                this.trameN2.arreterSon();
                this.blnTrameN2 = false;
            }
        }
    }

    /**
     * Fonction pour détruire un antagoniste
     * @param {Antagoniste} refAntagoniste - Occurence d'un Antagoniste
     */
    public arreterAntagoniste(refAntagoniste: Antagoniste): void {
        let antaSupprimer: number = this.tRefAntagoniste.indexOf(refAntagoniste);
        if (antaSupprimer != -1) {
            refAntagoniste.arreterAntagoniste();
            this.tRefAntagoniste.splice(antaSupprimer, 1);
            refAntagoniste = null;
        }
    }

    /**
     * Fonction pour détruire LES antagonistes
     */
    private arreterTousAntagonistes(): void {
        for (let i: number = 0; i < this.tRefAntagoniste.length; i++) {
            this.tRefAntagoniste[i].arreterAntagoniste();
        }
        // Important de remettre à zéro pour le tableau
        this.tRefAntagoniste.splice(0);
    }

    /**
     * Fonction pour détruire un obstacle
     * @param {Obstacle} refObstacle - Occurence d'un Obstacle
     */
    public arreterObstacle(refObstacle: Obstacle): void {
        if (refObstacle != null) {
            // On supprimer l'instance dans le tableau et dans le jeu
            let obsSupprimer: number = this.tRefObstacle.indexOf(refObstacle);
            if (obsSupprimer != -1) {
                refObstacle.arreterObstacle();
                this.tRefObstacle.splice(obsSupprimer, 1);
                refObstacle = null;
            }
        }
    }

    /**
     * Fonction pour détruire LES obstacles
     */
    private arreterTousObstacle(): void {
        for (let i: number = 0; i < this.tRefObstacle.length; i++) {
            this.tRefObstacle[i].arreterObstacle();
        }
        // Important de remettre à zéro pour le tableau
        this.tRefObstacle.splice(0);
    }

    /**
     * Fonction pour détruire un projectile
     * @param {Projectile} refProjectile - Occurence d'un Projectile
     */
    public arreterProjectile(refProjectile: Projectile): void {
        // On supprimer l'instance dans le tableau et dans le jeu
        let obsSupprimer: number = this.tProjectile.indexOf(refProjectile);
        this.tProjectile.splice(obsSupprimer, 1);
        refProjectile.arreterProjectile();
        refProjectile = null;
    }

    /**
     * Fonction pour détruire LES projectiles
     */
    public arreterTousProjectiles(): void {
        for (let i: number = 0; i < this.tProjectile.length; i++) {
            this.tProjectile[i].arreterProjectile();
        }
        // Important de remettre à zéro pour le tableau
        this.tProjectile.splice(0);
    }

    //***********************************************************
    //--------------- Gestion de la profondeur ------------------
    //***********************************************************
    /**
     * Fonction de classement des objets en profondeur (z).
     * Plus un objet est haut dans l'écran (y), plus il est éloigné du spectateur.
     */
    private classerObjetsEnProfondeur(): void {
        this.refScene.sortChildren(this.comparerY.bind(this));
    }

    /**
     * Fonction de comparaison de deux éléments en Y.
     */
    private comparerY(a: createjs.MovieClip, b: createjs.MovieClip): Number {
        if (a.y > b.y)
            return 1;
        else if (a.y < b.y)
            return -1;
        else
            return 0;
    }
} // fin de classe