/**
 * @file Classe de l'afficheur
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
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
define(["require", "exports", "./ObjetVisible"], function (require, exports, ObjetVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Classe de l'afficheur global
    var Afficheur = (function (_super) {
        __extends(Afficheur, _super);
        /**
         * Constructeur de l'instance de l'afficheur
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         * @param {Jeu} refJeu - référence du Jeu
         * @param {string} niveau - Nom du niveau
         */
        function Afficheur(refScene, x, y, redimensionMax, refJeu, niveau) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            //Attributs de l'afficheur global
            _this.minuterie = null;
            _this.secondes = null;
            _this.minute = null;
            _this.cptTemp = 0;
            _this.nbProjectile = null;
            _this.nbVie = 5;
            _this.refJeu = null;
            _this.niveau = null;
            _this.minuterieFin = null;
            // Mettre les sous-clip au frame 0 pour éviter les bogues
            _this["projectile_mc"].gotoAndStop(0);
            _this["minuterie_mc"].gotoAndStop(0);
            _this["vie_mc"].gotoAndStop(0);
            // Création de la minuterie du niveau
            _this.minuterie = window.setInterval(_this.gererMinuterie.bind(_this), 1000);
            // Distribution des argumenta dans les attributs
            _this.refJeu = refJeu;
            _this.niveau = niveau;
            // Selon les niveaux, ajustement des compteurs
            if (niveau == "niveau1") {
                _this.secondes = 30;
                _this.minute = 1;
                _this.nbProjectile = 35;
            }
            if (niveau == "niveau2") {
                _this.secondes = 60;
                _this.minute = 1;
                _this.nbProjectile = 50;
            }
            // Appel à la méthode pour contourner le bogue Create.Js qui ne traite pas les sous-clip lorsque l'appel est fait dans le constructeur
            _this.initialiserCompteur();
            return _this;
        }
        // ==========================================================
        // Méthode d'initialisation de l'objet
        //===========================================================
        /**
         * Fonction de dessin de l'objet
         */
        // Dessin des instances
        Afficheur.prototype.dessiner = function () {
            window.lib.mcAfficheur.call(this);
            this.frameBounds = window.lib.mcAfficheur.prototype.frameBounds;
        };
        /**
         * Fonction pour initialiser les textes et clips de l'afficheur à sa création
         */
        Afficheur.prototype.initialiserCompteur = function () {
            this["minuterie_mc"]["minuterie"].text = this.minute + ":" + this.secondes;
            this["projectile_mc"]["nbProjectile"].text = "x" + this.nbProjectile;
            if (this.niveau == "niveau2") {
                this["minuterie_mc"]["minuterie"].text = "2:00";
            }
        };
        // ==========================================================
        // Méthode utilitaires pour récupérer de l'information
        //===========================================================
        /**
         * Fonction qui retourne le nombre de vie  affiché par l'afficheur
         * @return {number} Le nombre de vie
         */
        Afficheur.prototype.recupererVie = function () {
            return this.nbVie;
        };
        /**
         * Fonction qui retourne le nombre de projectile  affiché par l'afficheur
         * @return {number} Le nombre de projectile
         */
        Afficheur.prototype.recupererProjectile = function () {
            return this.nbProjectile;
        };
        /**
         * Fonction qui retourne la température affichée par l'afficheur
         * @return {number} La température
         */
        Afficheur.prototype.recupererTemp = function () {
            return this.cptTemp;
        };
        /**
         * Fonction qui retourne le temps restant affiché par l'afficheur
         * @return {string} Le temps de la minuterie
         */
        Afficheur.prototype.recupererMinuterie = function () {
            var temps = this.minute + ":" + this.secondes;
            return temps;
        };
        //***********************************************************
        //------------------ MaJ des vies ---------------------------
        //***********************************************************
        /**
         * Fonction de mise à jour de l'afficheur de vie
         * @param {number} nbVie - Le nombre de vie de l'avatar
         */
        Afficheur.prototype.majVie = function (nbVie) {
            this.nbVie = nbVie;
            nbVie = nbVie + 1;
            this["vie_mc"]["coeur" + nbVie].gotoAndStop("vie_vide");
            // On valide la fin du niveau pour déterminer si c'est une défaite ou un changement de niveau
            if (this.nbVie == 0) {
                this.minuterieFin = window.setInterval(this.validationReference.bind(this), 1500);
            }
        };
        //***********************************************************
        //------------------- Gestion du temps ----------------------
        //***********************************************************
        /**
         * Fonction de mise à jour de la minuterie de niveau
         */
        Afficheur.prototype.gererMinuterie = function () {
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
        };
        //***********************************************************
        //--------------- Gestion de la température -----------------
        //***********************************************************
        /**
         * Fonction de mise à jour de la température sur le thermomètre
         * @param {string} valeur - La valeur indique soit "collision" ou "sortie" de l'antagoniste ce qui modifie le comportement
         */
        Afficheur.prototype.majTemperature = function (valeur) {
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
        };
        //***********************************************************
        //--------------- Gestion des projectiles -------------------
        //***********************************************************
        /**
         * Fonction de mise à jour de l'afficheur des projectiles
         * @return {number} Le nombre de projectile restant
         */
        Afficheur.prototype.majProjectile = function () {
            if (this.nbProjectile > 0) {
                this.nbProjectile = this.nbProjectile - 1;
                this["projectile_mc"]["nbProjectile"].text = "x" + this.nbProjectile;
            }
            return this.nbProjectile;
        };
        //***********************************************************
        //--------------- Appel de validation du jeu ----------------
        //***********************************************************
        /**
         * Fonction d'appel de validation au jeu
         */
        Afficheur.prototype.validationReference = function () {
            window.clearInterval(this.minuterieFin);
            this.minuterieFin = null;
            this.refJeu.validationFinNiveau(this.nbVie, this.cptTemp);
        };
        //***********************************************************
        //--------------- Destruction de l'afficheur ----------------
        //***********************************************************
        Afficheur.prototype.arreterAfficheur = function () {
            window.clearInterval(this.minuterie);
            this.minuterie = null;
            window.clearInterval(this.minuterieFin);
            this.minuterieFin = null;
            this.arreterObjetVisible();
        };
        return Afficheur;
    }(ObjetVisible_1.ObjetVisible)); // fin de classe
    exports.Afficheur = Afficheur;
});
//# sourceMappingURL=Afficheur.js.map