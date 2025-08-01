import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					light: "hsl(var(--primary-light))",
					dark: "hsl(var(--primary-dark))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
					light: "hsl(var(--secondary-light))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				voice: {
					DEFAULT: "hsl(var(--voice-accent))",
					foreground: "hsl(var(--voice-accent-foreground))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				warning: {
					DEFAULT: "hsl(var(--warning))",
					foreground: "hsl(var(--warning-foreground))",
				},
			},
			backgroundImage: {
				"hero-gradient": "var(--gradient-hero)",
				"warm-gradient": "var(--gradient-warm)",
				"trust-gradient": "var(--gradient-trust)",
			},
			boxShadow: {
				warm: "var(--shadow-warm)",
				strong: "var(--shadow-strong)",
				voice: "var(--shadow-voice)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"slide-up": {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"pulse-gentle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
				"voice-glow": {
					"0%, 100%": { boxShadow: "0 0 10px hsl(var(--voice-accent) / 0.3)" },
					"50%": { boxShadow: "0 0 20px hsl(var(--voice-accent) / 0.6)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out",
				"slide-up": "slide-up 0.5s ease-out",
				"pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
				"voice-glow": "voice-glow 1.5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
