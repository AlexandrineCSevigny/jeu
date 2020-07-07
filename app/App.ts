/**
 * @file Classe de l'App
 * @author Alexandrine C. Sévigny <asevigny81@gmail.com>
 * @version 0.0.1
 */

// Importation des classes
import {Jeu} from "./Jeu";

export class App {
    // Attributs
    private scene: createjs.Stage = null;
    private monJeu: Jeu = null;

    /**
     * Construteur de l'instance de l'App
     */
    public constructor() {
        // Télécharger les médias et initialiser l'animation.
        window.init(this);
    }

    /**
     * Fonction qui initialise le Jeu
     */
    public initialiser(refScene: createjs.Stage): void {

        // Initialisation des attributs relatifs à l'animation ---------------------------------------
        this.scene = refScene; 	      // Récupérer la référence de la scène nouvellement créée
        createjs.Ticker.framerate = 30;   // Vitesse de l'animation (peut être modifiée si nécessaire)
        // -------------------------------------------------------------------------------------------

        // Création du Jeu
        if (this.monJeu == null) {
            this.monJeu = new Jeu(this.scene);
        }
    }
}