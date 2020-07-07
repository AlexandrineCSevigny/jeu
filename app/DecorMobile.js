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
    // Classe des décors mobiles
    var DecorsMobiles = (function (_super) {
        __extends(DecorsMobiles, _super);
        /**
         * Constructeur de l'instance des décors mobiles
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         * @param {string} etiquette - Nom de l'étiquette à aller chercher pour le bon decor
         */
        function DecorsMobiles(refScene, x, y, redimensionMax, etiquette) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            _this.bouger_lier = _this.bougerDecors.bind(_this);
            // Selon l'étiquette, on appelle le type de décors en fonction du niveau
            _this.gotoAndStop(etiquette);
            _this.addEventListener("tick", _this.bouger_lier);
            return _this;
        }
        /**
         * Fonction de dessin de l'objet
         */
        DecorsMobiles.prototype.dessiner = function () {
            window.lib.mcDecorsMobiles.call(this);
            this.frameBounds = window.lib.mcDecorsMobiles.prototype.frameBounds;
        };
        //***********************************************************
        //--------------- Déplacement des décors -------------------
        //***********************************************************
        /**
         * Fonction du déplacement des décors
         */
        DecorsMobiles.prototype.bougerDecors = function () {
            // ******** Niveau 1 ***********
            // Décors de 1er plan
            if (this.currentLabel == "niveau1_bas") {
                this.x = this.x - DecorsMobiles.vitesse1erPlan;
            }
            // Décors de 2eme plan
            if (this.currentLabel == "niveau1_haut") {
                this.x = this.x - DecorsMobiles.vitesse2emePlan;
            }
            // ********  Niveau 2 **********
            // Décors de 1er plan
            if (this.currentLabel == "niveau2_bas") {
                this.x = this.x - DecorsMobiles.vitesse1erPlan;
            }
            // Décors de 2eme plan
            if (this.currentLabel == "niveau2_haut") {
                this.x = this.x - DecorsMobiles.vitesse2emePlan / 4;
            }
            if (this.x <= 0) {
                this.x = 800;
            }
        };
        //***********************************************************
        //--------------- Destructions des décors -------------------
        //***********************************************************
        /**
         * Fonction des destructions des instances
         */
        DecorsMobiles.prototype.arreterDecorsMobiles = function () {
            this.removeEventListener("tick", this.bouger_lier);
            this.arreterObjetVisible();
        };
        return DecorsMobiles;
    }(ObjetVisible_1.ObjetVisible)); // fin de classe
    //Attributs des decors
    DecorsMobiles.vitesse1erPlan = 5;
    DecorsMobiles.vitesse2emePlan = 1;
    exports.DecorsMobiles = DecorsMobiles;
});
//# sourceMappingURL=DecorMobile.js.map