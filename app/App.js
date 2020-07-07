/**
 * @file Classe de l'App
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */
define(["require", "exports", "./Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        /**
         * Construteur de l'instance de l'App
         */
        function App() {
            // Attributs
            this.scene = null;
            this.monJeu = null;
            // Télécharger les médias et initialiser l'animation.
            window.init(this);
        }
        /**
         * Fonction qui initialise le Jeu
         */
        App.prototype.initialiser = function (refScene) {
            // Initialisation des attributs relatifs à l'animation ---------------------------------------
            this.scene = refScene; // Récupérer la référence de la scène nouvellement créée
            createjs.Ticker.framerate = 30; // Vitesse de l'animation (peut être modifiée si nécessaire)
            // -------------------------------------------------------------------------------------------
            // Création du Jeu
            if (this.monJeu == null) {
                this.monJeu = new Jeu_1.Jeu(this.scene);
            }
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=App.js.map