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
    // Classe des décors
    var Decors = (function (_super) {
        __extends(Decors, _super);
        /**
         * Constructeur de l'instance des décors fixes
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         * @param {string} niveau - Nom du niveau
         */
        function Decors(refScene, x, y, redimensionMax, niveau) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            _this.gotoAndStop(niveau);
            return _this;
        }
        /**
         * Fonction de desssin de l'objet
         */
        Decors.prototype.dessiner = function () {
            window.lib.mcDecors.call(this);
            this.frameBounds = window.lib.mcDecors.prototype.frameBounds;
        };
        //***********************************************************
        //--------------- Destructions des décors -------------------
        //***********************************************************
        /**
         * Fonction des destructions des instances
         */
        Decors.prototype.arreterDecors = function () {
            this.arreterObjetVisible();
        };
        return Decors;
    }(ObjetVisible_1.ObjetVisible)); // fin de classe
    exports.Decors = Decors;
});
//# sourceMappingURL=Decors.js.map