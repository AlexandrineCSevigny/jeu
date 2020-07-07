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
    // Classe des obstacles
    var Obstacle = (function (_super) {
        __extends(Obstacle, _super);
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
        function Obstacle(vitesse, refScene, x, y, redimensionMax, refJeu, refAvatar, niveau, sonObstacle) {
            var _this = _super.call(this, refScene, x, y, redimensionMax, refAvatar, vitesse) || this;
            //Attributs des obstacles
            _this.refJeu = null;
            _this.sonObstacle = null;
            _this.refJeu = refJeu;
            _this.sonObstacle = sonObstacle;
            _this.gotoAndStop(niveau);
            return _this;
        }
        /**
         * Fonction de dessin de l'objet
         */
        Obstacle.prototype.dessiner = function () {
            window.lib.mcObstacle.call(this);
            this.frameBounds = window.lib.mcObstacle.prototype.frameBounds;
        };
        //***********************************************************
        //--------------- Mort et sortie de scène -------------------
        //***********************************************************
        /**
         * Fonction de gestion de fin de vie des obstacles
         */
        Obstacle.prototype.gererSortie = function () {
            this.refJeu.arreterObstacle(this);
        };
        /**
         * Fonction de gestion de fin de vie lorsque l'obstacle sort de la scène
         */
        Obstacle.prototype.gererFinVie = function () {
            if (this != null) {
                this.sonObstacle.demarrerSon();
                // this.refJeu.arreterObstacle(this);
            }
        };
        /**
         * Fonction qui détruit l'objet, ses évènements et minuteries
         */
        Obstacle.prototype.arreterObstacle = function () {
            this.arreterEnnemis();
        };
        return Obstacle;
    }(Ennemis_1.Ennemis)); // fin de classe
    exports.Obstacle = Obstacle;
});
//# sourceMappingURL=Obstacle.js.map