/**
 * @file Classe des écrans
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
    // Classe des Écrans
    var Ecrans = (function (_super) {
        __extends(Ecrans, _super);
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
        function Ecrans(refScene, x, y, redimensionMax, refJeu, niveau, vie, projectile, temp, minuterie, trameN1, trameN2, sonVictoire, sonDefaite) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            //Attributs des écrans
            _this.jouerJeu_lier = _this.niveau1.bind(_this);
            _this.recommencerJeu_lier = _this.recommencerJeu.bind(_this);
            _this.ecranPrecedent_lier = _this.ecranPrecedent.bind(_this);
            _this.ecranInstruction_lier = _this.ecranInstruction.bind(_this);
            _this.refJeu = null;
            _this.refMinuterie = 0;
            _this.niveau = null;
            _this.trameN1 = null;
            _this.trameN2 = null;
            _this.sonVictoire = null;
            _this.sonDefaite = null;
            _this.refJeu = refJeu;
            _this.niveau = niveau;
            console.log(temp);
            _this.trameN1 = trameN1;
            _this.trameN2 = trameN2;
            _this.sonVictoire = sonVictoire;
            _this.sonDefaite = sonDefaite;
            // etat normal des boutons
            _this["btnJouer"].gotoAndStop("normal");
            _this["btnRejouer"].gotoAndStop("normal");
            _this["btnPrecedent"].gotoAndStop("normal");
            _this["btnInstruction"].gotoAndStop("normal");
            // évenements des boutons au clic
            _this["btnJouer"].addEventListener("click", _this.jouerJeu_lier);
            _this["btnRejouer"].addEventListener("click", _this.recommencerJeu_lier);
            _this["btnPrecedent"].addEventListener("click", _this.ecranPrecedent_lier);
            _this["btnInstruction"].addEventListener("click", _this.ecranInstruction_lier);
            // Selon le message, on redirige au bon ecran
            if (niveau == "niveau1") {
                _this.gotoAndStop("presentation");
            }
            else {
                if (niveau == "niveau2") {
                    _this.niveau2();
                }
                else {
                    if (niveau == "defaite") {
                        _this.ecranDefaite(projectile, temp, minuterie);
                    }
                    else {
                        _this.ecranVictoire(vie, projectile, temp);
                    }
                }
            }
            return _this;
        }
        /**
         * Fonction de dessin de l'objet
         */
        Ecrans.prototype.dessiner = function () {
            window.lib.mcEcrans.call(this);
            this.frameBounds = window.lib.mcEcrans.prototype.frameBounds;
        };
        //***********************************************************
        //----------------- Gestion des écrans ----------------------
        //***********************************************************
        /**
         * Fonction revenir à l'écran précédent
         */
        Ecrans.prototype.ecranPrecedent = function () {
            this.gotoAndStop("presentation");
        };
        /**
         * Fonction pour aller à l'écran d'instruction
         */
        Ecrans.prototype.ecranInstruction = function () {
            this.gotoAndStop("instruction");
        };
        /**
         * Fonction d'écran du niveau 1
         */
        Ecrans.prototype.niveau1 = function () {
            this.gotoAndStop("niveau1");
            this.trameN1.demarrerSon();
            this.refMinuterie = window.setInterval(this.debutJeu.bind(this), 3000);
        };
        /**
         * Fonction d'écran du niveau 2
         */
        Ecrans.prototype.niveau2 = function () {
            this.gotoAndStop("niveau2");
            this.trameN2.demarrerSon();
            this.refMinuterie = window.setInterval(this.debutJeu.bind(this), 3000);
        };
        /**
         * Fonction d'affichage d'écran de défaite
         * @param {number} projectile - nombre de projectile restant
         * @param {number} temp - Température actuelle
         * @param {string} minuterie - temps restant
         */
        Ecrans.prototype.ecranDefaite = function (projectile, temp, minuterie) {
            this.gotoAndStop("defaite");
            this.sonDefaite.demarrerSon();
            this["ecran_defaite"]["mc_minuterie"]["minuterie"].text = minuterie;
            this["temperature_mc_defaite"].gotoAndStop("temp" + temp);
            this["ecran_defaite"]["mc_projectile"]["nbProjectile"].text = "x" + projectile;
        };
        /**
         * Fonction d'affichage d'écran de victoire
         * @param {number} projectile - nombre de projectile restant
         * @param {number} temp - Température actuelle
         * @param {number} vie - vie restante
         */
        Ecrans.prototype.ecranVictoire = function (vie, projectile, temp) {
            this.gotoAndStop("victoire");
            this.sonVictoire.demarrerSon();
            this["temperature_mc_victoire"].gotoAndStop("temp" + temp);
            this["ecran_victoire"]["mc_projectile"]["nbProjectile"].text = "x" + projectile;
            this["ecran_victoire"]["vie_txt"].text = "x" + vie;
        };
        //***********************************************************
        //---- Gestion des boutons pour début et recommencer --------
        //***********************************************************
        /**
         * Fonction faisant l'appel à Jeu pour débuter le niveau
         */
        Ecrans.prototype.debutJeu = function () {
            this.refJeu.creerJeu(this.refScene, this.niveau);
            this.arreterEcran();
        };
        /**
         * Fonction pour recommencer le jeu
         */
        Ecrans.prototype.recommencerJeu = function () {
            this.refJeu.recommencer();
        };
        //***********************************************************
        //--------------- Destructions des ecrans -------------------
        //***********************************************************
        /**
         * Fonction des destructions des instances
         */
        Ecrans.prototype.arreterEcran = function () {
            window.clearInterval(this.refMinuterie);
            this.refMinuterie = null;
            this.niveau = null;
            this["btnJouer"].removeEventListener("click", this.jouerJeu_lier);
            this["btnRejouer"].removeEventListener("click", this.recommencerJeu_lier);
            this["btnPrecedent"].removeEventListener("click", this.ecranPrecedent_lier);
            this["btnInstruction"].removeEventListener("click", this.ecranInstruction_lier);
            this.arreterObjetVisible();
        };
        return Ecrans;
    }(ObjetVisible_1.ObjetVisible));
    exports.Ecrans = Ecrans;
});
//# sourceMappingURL=Ecrans.js.map