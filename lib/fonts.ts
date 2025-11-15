import { Roboto, Playfair_Display, Dancing_Script } from 'next/font/google';

// Configure Roboto for the body text
export const fontRoboto = Roboto({
    subsets: [ 'latin' ],
    weight: [ '400', '500', '700' ], // Include the weights needed
    variable: '--font-roboto',     // Assign CSS variable
    display: 'swap',
});

// Configure Playfair Display for titles
export const fontPlayfair = Playfair_Display({
    subsets: [ 'latin' ],
    weight: [ '400', '700', '900' ], // Include bold and black weights
    variable: '--font-playfair',   // Assign CSS variable
    display: 'swap',
});

// Configure Dancing Script for stylistic text
export const fontDancingScript = Dancing_Script({
    subsets: [ 'latin' ],
    weight: [ '400', '700' ],
    variable: '--font-dancing-script', // Assign CSS variable
    display: 'swap',
});