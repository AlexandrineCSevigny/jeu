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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @file Classe d'Objet visible
     * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
     * @version 0.0.1
     */
    // Classe d'objet Visible
    var ObjetVisible = (function (_super) {
        __extends(ObjetVisible, _super);
        /**
         * Constructeur de l'objet visible
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         */
        function ObjetVisible(refScene, x, y, redimensionMax) {
            var _this = _super.call(this) || this;
            //Attributs de ObjetVisible
            _this.refScene = null;
            _this.redimensionMax = 0;
            _this.refScene = refScene;
            _this.gotoAndStop(0);
            _this.dessiner();
            refScene.addChild(_this);
            _this.x = x;
            _this.y = y;
            _this.redimensionMax = redimensionMax;
            _this.redimensionner();
            return _this;
        }
        /**
         * Méthode de redimenssion d'un objet selon la profondeur
         */
        ObjetVisible.prototype.redimensionner = function () {
            if (this.redimensionMax != -1) {
                var facteurDeRedimensionnement = this.redimensionMax * (this.y / window.lib.properties.height);
                this.scaleX = facteurDeRedimensionnement;
                this.scaleY = facteurDeRedimensionnement;
            }
        };
        /**
         * Fonction pour retourner la position d'un clip
         * @return {createjs.MovieClip} Le movieClip
         */
        ObjetVisible.prototype.retournerMonClip = function () {
            return this;
        };
        /**
         * Fonction pour détruire l'objet d'Objet visible
         */
        ObjetVisible.prototype.arreterObjetVisible = function () {
            this.refScene.removeChild(this);
        };
        return ObjetVisible;
    }(createjs.MovieClip));
    exports.ObjetVisible = ObjetVisible;
});
//# sourceMappingURL=ObjetVisible.js.map