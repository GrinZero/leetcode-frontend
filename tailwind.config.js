module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/*.{js,ts,jsx,tsx,md,mdx}',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    './docs/*.{js,ts,jsx,tsx,md,mdx}',
    './docs/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
