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
    // Classe des projectiles
    var Projectile = (function (_super) {
        __extends(Projectile, _super);
        /**
         * Constructeur de l'instance du projectile
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         * @param {Jeu} jeu - référence du Jeu
         * @param {Afficheur} refAfficheur - référence de l'avatar
         */
        function Projectile(refScene, x, y, redimensionMax, jeu, refAfficheur) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            //Attributs des decors
            _this.bouger_lier = _this.bouger.bind(_this);
            _this.refJeu = null;
            _this.refAfficheur = null;
            _this.blnInvincibilite = false;
            _this.gotoAndPlay("tir");
            _this.addEventListener("tick", _this.bouger_lier);
            _this.refJeu = jeu;
            _this.refAfficheur = refAfficheur;
            return _this;
        }
        /**
         * Fonction de dessin de l'objet
         */
        Projectile.prototype.dessiner = function () {
            window.lib.mcProjectile.call(this);
            this.frameBounds = window.lib.mcProjectile.prototype.frameBounds;
        };
        /**
         * Fonction de déplacement du projectile
         */
        Projectile.prototype.bouger = function () {
            this.x = this.x + 7;
            // Si on atteint la limite, on supprime l'objet
            if (this.x > 799) {
                // Important on envoit sa référence
                this.gererSortieScene();
            }
        };
        //***********************************************************
        //--------------- Gestion des collisions --------------------
        //***********************************************************
        /**
         * Fonction de détection de collision grossière (rectangle)
         * @param {createjs.MovieClip} refDemandeur - Le demandeur qui valide la collision (Antagoniste)
         * @return {boolean}
         */
        Projectile.prototype.enCollisionGrossiereAvec = function (refDemandeur) {
            if (this.blnInvincibilite == false) {
                var enCollision = false;
                var monRect = this.getTransformedBounds();
                var rectDemandeur = refDemandeur.getTransformedBounds();
                enCollision = monRect.intersects(rectDemandeur);
                return enCollision;
            }
        };
        /**
         * Méthode qui gère les conséquences de la collision (maj des compteurs, invincibilité)
         */
        Projectile.prototype.gererCollision = function () {
            if (this.blnInvincibilite == false) {
                this.blnInvincibilite = true;
                this.refAfficheur.majTemperature("collision");
                this.gotoAndPlay("debutMort");
            }
        };
        //***********************************************************
        //------------------ Gestion de Mort ------------------------
        //***********************************************************
        /**
         * Méthode qui est exécutée à la fin de l'animation de mort
         */
        Projectile.prototype.explosion = function () {
            this.blnInvincibilite = false;
            this.refJeu.arreterProjectile(this);
        };
        /**
         * Méthode qui gère la sortie de scène
         */
        Projectile.prototype.gererSortieScene = function () {
            this.refJeu.arreterProjectile(this);
        };
        /**
         * Méthode qui détruit l'objet et retire les evenements
         */
        Projectile.prototype.arreterProjectile = function () {
            this.removeEventListener("tick", this.bouger_lier);
            this.arreterObjetVisible();
        };
        return Projectile;
    }(ObjetVisible_1.ObjetVisible)); // Fin de classe
    exports.Projectile = Projectile;
});
//# sourceMappingURL=Projectile.js.map