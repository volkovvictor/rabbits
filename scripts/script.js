'use strict';

const squareBody = document.querySelector('.square-body');
const btnReset = document.querySelector('.btn-reset');

const squareBodyHtml = squareBody.innerHTML;

squareBody.addEventListener('click', (e) => {
   const target = e.target;

   if (target.closest('.arrow')) {
      const arrow = target.closest('.arrow');
      const block = target.closest('.block');
      const direction = arrow.classList[1];
      const leftItem = block.previousElementSibling;
      const rightItem = block.nextElementSibling;

      let topItem = block;
      let bottomItem = block;

      let i = 0;

      while(topItem && i < 5) {
         topItem = topItem.previousElementSibling;

         i++;
      }

      i = 0;

      while(bottomItem && i < 5) {
         bottomItem = bottomItem.nextElementSibling;

         i++;
      }



      if (direction === "left") {
         if(leftItem) block.after(leftItem);
      }
      if (direction === "right") {
         if(rightItem) block.before(rightItem);
      }

      if (direction === "top") {
         if (topItem) {
            topItem.after(block);
            leftItem ? leftItem.after(topItem) : rightItem.before(topItem);
         } 
      }
      if (direction === "bottom") {
         if (bottomItem) {
            bottomItem.after(block);
            leftItem ? leftItem.after(bottomItem) : rightItem.before(bottomItem);
         }
      }
   }
});

btnReset.addEventListener('click', () => {
   squareBody.innerHTML = squareBodyHtml;
});