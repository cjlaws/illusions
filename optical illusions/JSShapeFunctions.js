/* File: JSShapeFunctions.js
 * -----------------------
 * This file defines several helper functions for creating shapes.
 */

 function makeSquares(ctx, x, y, size) {
        ctx.fillStyle = "Black";
        ctx.fillRect(x, y, size, size);
    }

function fillCircle(ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }