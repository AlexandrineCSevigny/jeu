var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Ennemis"], function (require, exports, Ennemis_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //Classe de l'antagoniste
    var Antagoniste = (function (_super) {
        __extends(Antagoniste, _super);
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
        function Antagoniste(vitesse, refScene, x, y, redimensionMax, refJeu, refAvatar, tProjectile, refAfficheur, sonAntagoniste) {
            var _this = _super.call(this, refScene, x, y, redimensionMax, refAvatar, vitesse) || this;
            // Attribut de l'antagoniste
            _this.refJeu = null;
            _this.reftProjectile = new Array();
            _this.MinuterieCollision = 0;
            _this.blnCollision = false;
            _this.refAfficheur = null;
            _this.sonAntagoniste = null;
            _this.refJeu = refJeu;
            _this.reftProjectile = tProjectile;
            _this.refAfficheur = refAfficheur;
            _this.sonAntagoniste = sonAntagoniste;
            _this.MinuterieCollision = window.setInterval(_this.verifierCollisionProjectile.bind(_this), 1000 / 30);
            return _this;
        }
        /**
         * Fonction de dessin de l'objet
         */
        Antagoniste.prototype.dessiner = function () {
            window.lib.mcAntagoniste.call(this);
            this.frameBounds = window.lib.mcAntagoniste.prototype.frameBounds;
        };
        //***********************************************************
        //--------------- Collision avec les projectiles ------------
        //***********************************************************
        /**
         * Fonction de vérification de collision entre projectile et antagoniste
         * @param {evenement} evenement - L'objet qui réagit aux évènements
         */
        Antagoniste.prototype.verifierCollisionProjectile = function (evenement) {
            if (this.blnCollision == false) {
                // Vérifie proximité en y des 2 objets
                for (var i = 0; i < this.reftProjectile.length; i++) {
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
        };
        //***********************************************************
        //--------------- Morts et sortie de scène -------------------
        //***********************************************************
        /**
         * Fonction de gestion de fin de vie des antagonistes (Projectile et Avatar)
         */
        Antagoniste.prototype.gererFinVie = function () {
            this.sonAntagoniste.demarrerSon();
            this.gotoAndPlay("debutMort");
        };
        /**
         * Fonction qui appelle la mort de l'antagoniste à la fin de l'animation de mort (appelé dans Animate)
         */
        Antagoniste.prototype.agoniser = function () {
            this.refJeu.arreterAntagoniste(this);
        };
        /**
         * Fonction de gestion de fin de vie lorsque l'antagoniste sort de la scène
         */
        Antagoniste.prototype.gererSortie = function () {
            this.refJeu.arreterAntagoniste(this);
            this.refAfficheur.majTemperature("sortie");
        };
        /**
         * Fonction qui détruit l'objet, ses évènements et minuteries
         */
        Antagoniste.prototype.arreterAntagoniste = function () {
            window.clearInterval(this.MinuterieCollision);
            this.MinuterieCollision = null;
            this.arreterEnnemis();
        };
        return Antagoniste;
    }(Ennemis_1.Ennemis)); // fin de classe
    exports.Antagoniste = Antagoniste;
});
//# sourceMappingURL=Antagoniste.js.map