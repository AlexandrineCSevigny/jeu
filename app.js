define(["require", "exports", "./app/Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app = {
        // Attributs
        stage: null,
        exportRoot: null,
        leJeu: null,
        // Méthodes
        initialiserAnimation: function () {
            window.init(this); // Initialiser l'animation avec le méthode générée par Animate CC.
        },
        initialiser: function (refStage, refExportRoot) {
            // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
            this.stage = refStage; // Récupérer la références de la scène nouvellement créée
            this.exportRoot = refExportRoot; // Récupérer la référence du scénario principale
            this.stage.enableMouseOver(30); // Activer les mouseover 24 fois par seconde sur la scène
            this.exportRoot.gotoAndStop(0); // Placer la tête de lecture au lieu 0 du scénario principal de l'animation
            // ----------------------------------------------------------------------------------------------------------------------
            // Écouteur des boutons pour PetitMonde
            document.getElementById("btDebuter").addEventListener("click", this.faireDebuter.bind(this));
            document.getElementById("btArreter").addEventListener("click", this.faireArreter.bind(this));
        },
        // Bouton débuter pour commencer le PetitMonde
        faireDebuter: function (evenement) {
            if (this.leJeu == null) {
                this.leJeu = new Jeu_1.Jeu(this.stage);
            }
        },
        // Bouton arrêter pour arrêter le PetitMonde
        faireArreter: function (evenement) {
            if (this.leJeu != null) {
                this.leJeu.arreter();
                this.leJeu = null;
            }
        }
        // Initialisation des objets dans PetitMonde
    };
    app.initialiserAnimation();
});
//# sourceMappingURL=app.js.map