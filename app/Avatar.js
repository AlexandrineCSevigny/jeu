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
    // Classe de l'avatar
    var Avatar = (function (_super) {
        __extends(Avatar, _super);
        /**
         * Constructeur de l'instance de l'avatar
         * @param {Stage} refScene
         * @param {number} x - position en X
         * @param {number} y - position en Y
         * @param {number} redimensionMax - Taille maximale pour la redimension
         * @param {Afficheur} refAfficheur - Référence de l'afficheur
         * @param {Jeu} refJeu - référence du Jeu
         * @param {SonFX} sonProjectile - SonFX du projectile au lancer
         * @param {SonFX} sonAvatar - SonFX de l'avatar lorsque touché
         */
        function Avatar(refScene, x, y, redimensionMax, refAfficheur, refJeu, sonProjectile, sonAvatar) {
            var _this = _super.call(this, refScene, x, y, redimensionMax) || this;
            // Attributs de l'avatar
            _this.tToucheEnfoncees = new Array(false, false, false, false, false); // [Gauche,Haut,Droit,Bas,espace]
            _this.refMinuterie = null;
            _this.tPointsContact = null;
            _this.nbVie = 5;
            _this.blnInvincibilite = false;
            _this.minuterieInvincibilite = 0;
            _this.refAfficheur = null;
            _this.refJeu = null;
            _this.minuterieMort = 0;
            _this.blnEnTir = false;
            _this.minuterieProjectile = 0;
            _this.nbProjectile = null;
            _this.sonProjectile = null;
            _this.sonAvatar = null;
            // Position  de l'avatar
            _this.x = x;
            _this.y = y;
            // Distribution des argument dans les attributs
            _this.refAfficheur = refAfficheur;
            _this.refJeu = refJeu;
            _this.sonProjectile = sonProjectile;
            _this.sonAvatar = sonAvatar;
            // Evenement de mouvement
            if (_this.nbVie > 0 || _this.blnInvincibilite == false) {
                window.onkeydown = _this.activerDirection.bind(_this);
                window.onkeyup = _this.desactiverDirection.bind(_this);
            }
            // Tableau de point de détection fine
            _this.tPointsContact = new Array();
            _this.tPointsContact[0] = _this['mcP0'];
            _this.tPointsContact[1] = _this['mcP1'];
            _this.tPointsContact[2] = _this['mcP2'];
            _this.tPointsContact[3] = _this['mcP3'];
            _this.tPointsContact[4] = _this['mcP4'];
            // Habillage de départ
            _this.gotoAndStop("statique");
            return _this;
        }
        /**
         * Fonction de dessin de l'objet
         */
        Avatar.prototype.dessiner = function () {
            window.lib.mcAvatar.call(this);
            this.frameBounds = window.lib.mcAvatar.prototype.frameBounds;
        };
        //***********************************************************
        //--------------- Déplacement de l'avatar -------------------
        //***********************************************************
        /**
         * Fonction d'activation du mouvement selon la touche de clavier enfoncée
         * @param {evenement} evenement - la touche enfoncée
         */
        Avatar.prototype.activerDirection = function (evenement) {
            switch (evenement.keyCode) {
                case 37:
                    //fleche vers la gauche
                    this.tToucheEnfoncees[0] = true;
                    evenement.preventDefault();
                    break;
                case 65:
                    //A
                    this.tToucheEnfoncees[0] = true;
                    evenement.preventDefault();
                    break;
                case 38:
                    //fleche vers le haut
                    this.tToucheEnfoncees[1] = true;
                    evenement.preventDefault();
                    break;
                case 87:
                    //W
                    this.tToucheEnfoncees[1] = true;
                    evenement.preventDefault();
                    break;
                case 39:
                    //fleche vers la droite
                    this.tToucheEnfoncees[2] = true;
                    evenement.preventDefault();
                    break;
                case 68:
                    //D
                    this.tToucheEnfoncees[2] = true;
                    evenement.preventDefault();
                    break;
                case 40:
                    //fleche vers le bas
                    this.tToucheEnfoncees[3] = true;
                    evenement.preventDefault();
                    break;
                case 83:
                    //s
                    this.tToucheEnfoncees[3] = true;
                    evenement.preventDefault();
                    break;
                case 32:
                    //barre d'espacemement
                    this.tToucheEnfoncees[4] = true;
                    evenement.preventDefault();
                    break;
            }
            if (this.refMinuterie == null) {
                this.refMinuterie = window.setInterval(this.bouger.bind(this), 1000 / 60);
            }
            // Mise à jour de l'habillage de l'avatar selon les touches enfoncées
            this.majHabillage();
        };
        /**
         * Fonction de désactivation du mouvement selon la touche de clavier enfoncée
         * @param {evenement} evenement - la touche enfoncée
         */
        Avatar.prototype.desactiverDirection = function (evenement) {
            switch (evenement.keyCode) {
                case 37:
                    //fleche vers la gauche
                    this.tToucheEnfoncees[0] = false;
                    evenement.preventDefault();
                    break;
                case 65:
                    //A
                    this.tToucheEnfoncees[0] = false;
                    evenement.preventDefault();
                    break;
                case 38:
                    //fleche vers le haut
                    this.tToucheEnfoncees[1] = false;
                    evenement.preventDefault();
                    break;
                case 87:
                    //W
                    this.tToucheEnfoncees[1] = false;
                    evenement.preventDefault();
                    break;
                case 39:
                    //fleche vers la droite
                    this.tToucheEnfoncees[2] = false;
                    evenement.preventDefault();
                    break;
                case 68:
                    //D
                    this.tToucheEnfoncees[2] = false;
                    evenement.preventDefault();
                    break;
                case 40:
                    //fleche vers le bas
                    this.tToucheEnfoncees[3] = false;
                    evenement.preventDefault();
                    break;
                case 83:
                    //s
                    this.tToucheEnfoncees[3] = false;
                    evenement.preventDefault();
                    break;
                case 32:
                    //barre d'espacemement
                    this.tToucheEnfoncees[4] = false;
                    evenement.preventDefault();
                    break;
            }
            if (this.tToucheEnfoncees.indexOf(true) == -1) {
                window.clearInterval(this.refMinuterie);
                this.refMinuterie = null;
            }
            // Gestion des habillages sauf si l'avatar est en douleur ou mort
            if (this.blnInvincibilite == false && this.nbVie > 0) {
                // Mise à jour de l'habillage pour enlever les habillages qui ne sont plus activés
                this.majHabillage();
            }
        };
        /**
         * Fonction de déplacement de l'avatar selon le statut des booléan dans le tableau de déplacement
         */
        Avatar.prototype.bouger = function () {
            if (this.tToucheEnfoncees[0] == true) {
                if (this.x > Avatar.limite.gauche) {
                    //flèche vers la gauche
                    this.x = this.x - 5;
                }
            }
            if (this.tToucheEnfoncees[1] == true) {
                if (this.y > Avatar.limite.haut) {
                    //flèche vers le haut
                    this.y = this.y - 5;
                }
            }
            if (this.tToucheEnfoncees[2] == true) {
                if (this.x < Avatar.limite.droite) {
                    //flèche vers la droite
                    this.x = this.x + 5;
                }
            }
            if (this.tToucheEnfoncees[3] == true) {
                if (this.y < Avatar.limite.bas) {
                    //flèche vers le bas
                    this.y = this.y + 5;
                }
            }
            // En fonction du déplacement en y, on ajuste la taille de l'avatar
            this.redimensionner();
        };
        //***********************************************************
        //--------------- Mise à jour des animations ----------------
        //***********************************************************
        /**
         * Fonction de mise à jour de l'habillage de l'avatar
         */
        Avatar.prototype.majHabillage = function () {
            if (this.blnInvincibilite == false) {
                // Si en déplacement
                if (this.tToucheEnfoncees[0] == true || this.tToucheEnfoncees[1] == true || this.tToucheEnfoncees[2] == true || this.tToucheEnfoncees[3] == true) {
                    if (this.currentLabel != "course") {
                        // Aller au cycle de marche
                        this.gotoAndPlay("course");
                    }
                }
                else {
                    if (this.currentLabel != "statique") {
                        // Aller à l'image inactif
                        this.gotoAndStop("statique");
                    }
                }
                // Si tir un projectile
                if (this.tToucheEnfoncees[4] == true) {
                    if (this.blnEnTir == false) {
                        if (this.nbProjectile != 0) {
                            this.debuterTir();
                            this.blnEnTir = true;
                            this.sonProjectile.demarrerSon();
                            this.nbProjectile = this.refAfficheur.majProjectile();
                        }
                    }
                }
            }
        };
        //***********************************************************
        //--------------- Gestion des collisions --------------------
        //***********************************************************
        /**
         * Fonction de détection de collision grossière (rectangle)
         * @param {createjs.MovieClip} refDemandeur - Le demandeur qui valide la collision (Ennemi)
         * @return {boolean}
         */
        Avatar.prototype.enCollisionGrossiereAvec = function (refDemandeur) {
            var enCollision = false;
            if (this.blnInvincibilite == false) {
                var monRect = this.getTransformedBounds();
                var rectDemandeur = refDemandeur.getTransformedBounds();
                enCollision = monRect.intersects(rectDemandeur);
            }
            return enCollision;
        };
        /**
         * Fonction de détection de collision fine
         * @param {createjs.MovieClip} refDemandeur - Le demandeur qui valide la collision (Ennemi)
         * @return {number} L'index du point touché
         */
        Avatar.prototype.enCollisionFineAvec = function (refDemandeur) {
            var indexPointTouche = -1;
            // Pour chacun de mes points de contact
            if (this.blnInvincibilite == false) {
                for (var i = 0; i < this.tPointsContact.length && indexPointTouche == -1; i++) {
                    var monPoint = this.tPointsContact[i];
                    // Convertir mon point en coordonnée local au demandeur
                    var monPointLocalAuDemandeur = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                    if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                        indexPointTouche = i;
                    }
                }
            }
            return indexPointTouche;
        };
        /**
         * Méthode qui gère les conséquences de la collision (maj des compteurs, invincibilité)
         */
        Avatar.prototype.gererCollision = function () {
            if (this.blnInvincibilite == false) {
                this.sonAvatar.demarrerSon();
                if (this.nbVie > 0) {
                    this.nbVie = this.nbVie - 1;
                    this.refAfficheur.majVie(this.nbVie);
                    // Fin de vie de l'avatar
                    if (this.nbVie == 0) {
                        this.gotoAndPlay("debutMort");
                        window.onkeydown = null;
                        window.onkeyup = null;
                        window.clearInterval(this.refMinuterie);
                        this.refMinuterie = null;
                        this.blnInvincibilite = true;
                    }
                    // gérer l'invincibilité
                    if (this.blnInvincibilite == false) {
                        if (this.nbVie > 0) {
                            this.minuterieInvincibilite = window.setInterval(this.terminerInvincibilite.bind(this), 1500);
                            this.blnInvincibilite = true;
                            this.gotoAndStop("dommage");
                        }
                    }
                }
            }
        };
        /**
         * Méthode qui gère la fin de l'invincibilité
         */
        Avatar.prototype.terminerInvincibilite = function () {
            if (this.blnInvincibilite == true) {
                window.clearInterval(this.minuterieInvincibilite);
                this.minuterieInvincibilite = null;
                this.blnInvincibilite = false;
            }
        };
        //***********************************************************
        //------------------ Gestion du tir -------------------------
        //***********************************************************
        /**
         * Méthode qui le tir de projectile
         */
        Avatar.prototype.debuterTir = function () {
            var x = this.tPointsContact[0].x;
            var y = this.tPointsContact[0].y;
            var test = this.localToLocal(x, y, this.stage);
            this.refJeu.creerProjectile(test.x, test.y);
            this.minuterieProjectile = window.setInterval(this.arreterTir.bind(this), 500);
        };
        /**
         * Méthode qui la fin de tir de projectile
         */
        Avatar.prototype.arreterTir = function () {
            this.blnEnTir = false;
            window.clearInterval(this.minuterieProjectile);
            this.minuterieProjectile = null;
        };
        //***********************************************************
        //------------------ Mort de l'avatar -----------------------
        //***********************************************************
        /**
         * Fonction qui appelle la mort de l'avatar à la fin de l'animation de mort (appelé dans Animate)
         */
        Avatar.prototype.agoniserAvatar = function () {
            this.mortAvatar();
        };
        /**
         * Fonction qui détruit l'objet, ses évènements et minuteries
         */
        Avatar.prototype.mortAvatar = function () {
            window.onkeyup = null;
            window.onkeydown = null;
            window.clearInterval(this.minuterieMort);
            this.minuterieMort = null;
            window.clearInterval(this.minuterieProjectile);
            this.minuterieProjectile = null;
            window.clearInterval(this.refMinuterie);
            this.refMinuterie = null;
            window.clearInterval(this.minuterieInvincibilite);
            this.minuterieInvincibilite = null;
            this.blnInvincibilite = false;
            this.arreterObjetVisible();
        };
        return Avatar;
    }(ObjetVisible_1.ObjetVisible)); // Fin classe
    Avatar.limite = {
        haut: 315,
        bas: 575,
        gauche: 50,
        droite: 750
    };
    exports.Avatar = Avatar;
});
//# sourceMappingURL=Avatar.js.map