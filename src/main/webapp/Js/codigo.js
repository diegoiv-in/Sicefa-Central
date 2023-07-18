 function iluminarCard(cardId) {
          // Desactivar iluminación en todas las cards
          var cards = document.querySelectorAll(".card");
          cards.forEach(function (card) {
            card.classList.remove("iluminar");
          });
      
          // Activar iluminación en la card seleccionada
          var card = document.getElementById(cardId);
          card.classList.add("iluminar");
        }