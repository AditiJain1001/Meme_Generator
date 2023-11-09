// Choosing the Right Approach:

// For simple memes, client-side canvas rendering is sufficient.
// If you need high fidelity/ have complex layouts, server-side rendering or libraries like html2canvas could be more appropriate.
// If scalability and high-quality output are priorities, SVG rendering or a robust server-side solution.

import React from 'react';

const DownloadMemeButton = ({ memeRef, meme }) => {
  const handleDownloadClick = async () => {
    if (memeRef.current) { //only returns one item an obj "current"
      //John said doing this on line 13 is a big no-no. CHNAGE ASAP
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();

      // Set crossOrigin to 'anonymous' to fetch the image with CORS headers
      image.crossOrigin = 'anonymous';

      image.onload = () => {
        // Set canvas size to the same as the image
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0);

        // Add text over the image
        const textTop = meme.topText.toUpperCase();
        const textBottom = meme.bottomText.toUpperCase();

        // Customize your text styling here
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.font = '30px Impact';
        ctx.textAlign = 'center';

        // Add top text
        ctx.textBaseline = 'top';
        ctx.fillText(textTop, canvas.width / 2, 30);
        ctx.strokeText(textTop, canvas.width / 2, 30);

        // Add bottom text
        ctx.textBaseline = 'bottom';
        ctx.fillText(textBottom, canvas.width / 2, canvas.height - 30);
        ctx.strokeText(textBottom, canvas.width / 2, canvas.height - 30);

        // Convert canvas to image and download
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = imageUrl;
        link.click();
      };

      // Handle CORS error if the image can't be loaded
      image.onerror = () => {
        alert("Couldn't load the image due to CORS policy.");
      };

      // Set the source of the image
      image.src = meme.randomImage;
    }
  };

  return (
    <button className="form--button" onClick={handleDownloadClick}>
      Download Meme
    </button>
  );
};

export default DownloadMemeButton;


