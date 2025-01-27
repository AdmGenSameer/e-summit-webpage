module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', 
    ],
    theme: {
      extend: {
        backgroundImage: {
          'hero-gradient': 'radial-gradient(circle at center, #084c61, #032a3c)',
          'lighting': 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 60%)',
        },
      },
    },
    plugins: [],
  };
  