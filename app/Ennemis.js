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
    // Classe de l'ennemis
    var Ennemis = (function (_super) {
        __extends(Ennemis, _super);
        /**
         * Constructeur des ennemis
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         * @param {Avatar} refAvatar - référence de l'avatar
         * @param {number} vitesse - vitesse de déplacement
         */
        function Ennemis(refScene, x, y, redimensionMax, refAvatar, vitesse) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            // attribut de la classe Ennemis
            _this.bouger_lier = _this.bouger.bind(_this);
            _this.vitesse = 0;
            _this.refAvatar = null;
            _this.refMinuterieCollision = null;
            _this.mouseChildren = false;
            _this.refAvatar = refAvatar;
            // On fait varier la vitesse de mouvement
            _this.vitesse = vitesse * 30;
            _this.addEventListener("tick", _this.bouger_lier);
            _this.refMinuterieCollision = window.setInterval(_this.verifierCollisionAvatar.bind(_this), 1000 / 30);
            return _this;
        }
        //***********************************************************
        //--- Déplacement des ennemis (obstacles et antagonistes) ---
        //***********************************************************
        /**
         * Fonction pour faire bouger les ennemis
         */
        Ennemis.prototype.bouger = function (evenement) {
            this.x = this.x - ((evenement.delta / 1000) * this.vitesse);
            // Si on atteint la limite, on supprime l'objet
            if (this.x < 0) {
                // Important on envoit sa référence
                this.gererSortie();
            }
        };
        //***********************************************************
        //--------------- Collision avec l'avatar -------------------
        //***********************************************************
        /**
         * Fonction valider la collision entre ennemis et avatar
         * @param {evenement}
         */
        Ennemis.prototype.verifierCollisionAvatar = function (evenement) {
            // Si je suis proche de l'avatar
            if (this.y - this.refAvatar.y <= 30 && this.y - this.refAvatar.y >= -30) {
                // Est-ce que je touche au rectangle de l'avatar?
                // console.log("contact");
                if (this.refAvatar.enCollisionGrossiereAvec(this) == true) {
                    // Est-ce que je touche spécifiquement à l'avatar (ses points de collision fine)
                    var indexPointTouche = this.refAvatar.enCollisionFineAvec(this);
                    if (indexPointTouche != -1) {
                        this.refAvatar.gererCollision();
                        this.gererFinVie();
                    }
                }
            }
        };
        /**
         * Fonction retirer la détection de collision durant l'animation de mort des antagonistes
         * @param {Antagoniste} refAntagoniste - Antagoniste qui a déjà reçu une collision
         */
        Ennemis.prototype.arreterDetectionCollision = function (refAntagoniste) {
            window.clearInterval(this.refMinuterieCollision);
            this.refMinuterieCollision = null;
        };
        //***********************************************************
        //--------------- Destructions des ecrans -------------------
        //***********************************************************
        /**
         * Fonction des destructions des instances
         */
        Ennemis.prototype.arreterEnnemis = function () {
            this.removeEventListener("tick", this.bouger_lier);
            window.clearInterval(this.refMinuterieCollision);
            this.refMinuterieCollision = null;
            this.arreterObjetVisible();
        };
        return Ennemis;
    }(ObjetVisible_1.ObjetVisible));
    exports.Ennemis = Ennemis;
});
//# sourceMappingURL=Ennemis.js.map