/*
       *  Variables globles
       */
      
      // Booléen indiquant si la partie est en cours
      let playing = false;
      
      // Temps restant
      let remainingTime;
      
      // Nombre de clics sur le cookie
      let clickCount = 0;

      // Zone d'affichage du score
      let score = document.querySelector("figure > span");

      // Paragraphe pour l'affichage du temps restant
      let timeDisplay = document.querySelector("p");

      // Zone d'affichage des secondes restantes
      let time = document.querySelector("p > span");

      // Bouton de démarrage
      let startButton = document.querySelector("button");

      // Image du cookie
      let cookieImage = document.querySelector("figure > img");