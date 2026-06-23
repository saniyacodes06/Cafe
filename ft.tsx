< !--DESIGN.md -->
    Design System
Typography
Font Family
Poppins
Fallback:
sans - serif
Theme 1
Primary
#8E93CB
Secondary
#FFDBED
Accent
#F8769C
Usage


Modern

Soft

Premium

Youthful
Theme 2
Primary
#19485F
Secondary
#D9E0A4
Usage


Elegant

Café Style

Professional
Light Mode
Background
#FFFFFF
Card
#F8F8F8
Text
#111111
Border
#E5E5E5
Dark Mode
Background
#0D1117
Card
#161B22
Text
#FFFFFF
Border
#30363D
Border Radius
Button
12px
Card
16px
Modal
20px
Shadows
Soft elevated shadows only.
    Components
Buttons
Primary
Filled
Secondary
Outlined
Ghost
Text Button
Cards
Menu Card
Review Card
Order Card
Profile Card
Animations
Framer Motion
Hover Scale
Fade In
Slide Up
Page Transition
Design Style


Premium Café

Clean Layout

Minimal Design

Large Food Photography

Mobile First

Conversion Focused

    < !--Amazonia | Rewards Catalog-- >
< !DOCTYPE html >

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Amazonia Rewards Catalog</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Theme Configuration -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-highest": "#e5e2e1",
                    "on-error": "#ffffff",
                    "tertiary-fixed": "#dfe0ff",
                    "surface-container": "#f0edec",
                    "surface-container-lowest": "#ffffff",
                    "accent-pink": "#F8769C",
                    "inverse-primary": "#a1cce8",
                    "on-primary-container": "#8bb6d1",
                    "tertiary-fixed-dim": "#bdc2fd",
                    "deep-forest": "#002B1B",
                    "muted-gold": "#C49871",
                    "background": "#fcf9f8",
                    "on-primary": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-secondary": "#ffffff",
                    "on-secondary-fixed-variant": "#444a1d",
                    "inverse-on-surface": "#f3f0ef",
                    "error": "#ba1a1a",
                    "surface": "#fcf9f8",
                    "on-surface-variant": "#41484c",
                    "on-surface": "#1c1b1b",
                    "border-subtle": "#E5E5E5",
                    "secondary": "#5c6232",
                    "on-primary-fixed": "#001e2c",
                    "outline": "#71787d",
                    "on-tertiary-fixed-variant": "#3d4375",
                    "primary": "#003145",
                    "surface-bright": "#fcf9f8",
                    "on-primary-fixed-variant": "#1d4b62",
                    "primary-fixed": "#c4e7ff",
                    "surface-container-low": "#f6f3f2",
                    "on-tertiary": "#ffffff",
                    "on-secondary-fixed": "#191e00",
                    "tertiary": "#232859",
                    "surface-variant": "#e5e2e1",
                    "soft-lavender": "#FFDBED",
                    "secondary-fixed": "#e1e8ab",
                    "inverse-surface": "#313030",
                    "secondary-container": "#e1e8ab",
                    "primary-container": "#19485f",
                    "secondary-fixed-dim": "#c4cb91",
                    "outline-variant": "#c1c7cd",
                    "on-background": "#1c1b1b",
                    "error-container": "#ffdad6",
                    "surface-dim": "#dcd9d9",
                    "tertiary-container": "#3a3f71",
                    "on-tertiary-container": "#a7ace6",
                    "on-secondary-container": "#626837",
                    "surface-tint": "#38637b",
                    "surface-container-high": "#ebe7e7",
                    "primary-fixed-dim": "#a1cce8",
                    "on-tertiary-fixed": "#101647"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-sm": "12px",
                    "gutter": "24px",
                    "base": "8px",
                    "margin-mobile": "16px",
                    "container-max": "1200px",
                    "margin-desktop": "40px",
                    "stack-md": "24px",
                    "stack-lg": "48px"
            },
            "fontFamily": {
                    "label-md": ["Poppins"],
                    "display-lg": ["Poppins"],
                    "body-md": ["Poppins"],
                    "body-lg": ["Poppins"],
                    "headline-xl": ["Poppins"],
                    "headline-lg": ["Poppins"],
                    "display-lg-mobile": ["Poppins"],
                    "caption": ["Poppins"]
            },
            "fontSize": {
                    "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        
        .soft-elevation {
            box-shadow: 0 12px 40px -12px rgba(0, 43, 27, 0.08);
        }

        .category-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .category-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .bento-card {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .bento-card:hover {
            transform: translateY(-4px) scale(1.01);
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopAppBar -->
<header class="bg-surface/80 dark:bg-surface-container-high/80 docked full-width top-0 sticky backdrop-blur-md z-50 shadow-sm shadow-primary/5">
<div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<span class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary dark:text-primary-fixed tracking-tight">Amazonia</span>
<nav class="hidden md:flex items-center gap-6">
<a class="text-on-surface-variant dark:text-outline font-label-md text-label-md hover:text-primary-container transition-colors" href="#">Home</a>
<a class="text-on-surface-variant dark:text-outline font-label-md text-label-md hover:text-primary-container transition-colors" href="#">Menu</a>
<a class="text-primary dark:text-primary-fixed font-bold font-label-md text-label-md" href="#">Rewards</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span class="material-symbols-outlined">shopping_bag</span>
</button>
<div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border-2 border-surface">
<img class="w-full h-full object-cover" data-alt="A professional and friendly headshot of a person with warm lighting against a neutral, high-end minimalist background. The style is clean and premium, consistent with a luxury hospitality brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0TA8LXvzn9awNanVKLm8F8Ft2yXCx-75Ry6xK8IjePhocB1SvudvYs6ehGo5ZbU2cOEwP5OULpgWGhDJRy7eQO4oPVDFsXrZtuercLl3Dym-knzoqu-SDnbPVKYje_HQ5MaWfAKn3WkvNMim1FKXnOiwnXitBILN97NZ8OmpNcGonj-bKNRh6EdZWtO1v3HesjFKUqZoO7Mk-pVuQylTpxORlig8uBSPvIfDDZ7LmcuesRTqYOeALff8PbmmMBleRuzW_bo7iyVbQ"/>
</div>
</div>
</div>
</header>
<main class="min-h-screen pb-32">
<!-- Hero Section -->
<section class="relative overflow-hidden pt-12 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<!-- Atmospheric Shader Background -->
<div class="absolute inset-0 -z-10 opacity-30">

</div>
<div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div class="space-y-2">
<span class="text-secondary font-label-md text-label-md uppercase tracking-widest">Loyalty Circle</span>
<h1 class="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-primary leading-tight">Rewards Catalog</h1>
<p class="text-on-surface-variant max-w-lg font-body-lg text-body-lg">Curated Amazonian experiences and culinary delights, exclusively for our most dedicated guests.</p>
</div>
<div class="bg-white p-6 rounded-2xl soft-elevation border border-border-subtle flex items-center gap-6 md:min-w-[320px]">
<div class="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">stars</span>
</div>
<div>
<p class="text-on-surface-variant font-label-md text-label-md">Current Balance</p>
<h2 class="text-primary font-headline-xl text-headline-xl font-bold">1,850 <span class="text-body-md font-normal text-on-surface-variant">Points</span></h2>
</div>
</div>
</div>
</section>
<!-- Filters & Search -->
<section class="sticky top-20 z-40 bg-surface/95 backdrop-blur-sm py-4 border-b border-border-subtle mb-10 px-margin-mobile md:px-margin-desktop">
<div class="max-w-container-max mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="flex gap-2 overflow-x-auto category-scrollbar pb-1 md:pb-0">
<button class="px-6 py-2 rounded-full bg-primary text-white font-label-md text-label-md whitespace-nowrap shadow-md shadow-primary/20">All Rewards</button>
<button class="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Culinary</button>
<button class="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Mixology</button>
<button class="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Experiences</button>
</div>
<div class="relative group">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full md:w-64 pl-12 pr-4 py-2 bg-surface-container-lowest border border-border-subtle rounded-full focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md text-body-md" placeholder="Search rewards..." type="text"/>
</div>
</div>
</section>
<!-- Rewards Grid (Bento/Asymmetric Layout) -->
<section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Large Featured Card -->
<div class="md:col-span-8 group bento-card bg-white rounded-3xl overflow-hidden soft-elevation flex flex-col md:flex-row border border-border-subtle">
<div class="md:w-1/2 relative overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A wide-angle cinematic shot of a long communal wooden table set for a 7-course tasting menu in a lush, plant-filled conservatory. The lighting is moody and warm with golden sunset light filtering through palm leaves. Deep greens and earthy browns dominate the palette, evoking an upscale Amazonian jungle atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF7_Pb6HKixVQ_JbB7Ecx8T82IB8JeNqQ23xcfiXeIOc0HlovMhK2_TC9ZrLUPAtfaqQ3G6nNtDdXOZRHN_v6drKnQO51RMVPT8Dg7bZ-6EBsBlXO9yRx7cPlShu92Zr14ptzINA1AEDy2Np6u-JCAZyhrpa2OsjrvGQS4nKx66C-qb7iI99PfWW3-rInYY25pO_4yBdV53WJVAJhumkQxAxK7fALEeukt91WqdfTNgao3rwmGroBT06No9xrmobhtgyvXG-wkKrDR"/>
<div class="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1 rounded-full font-label-md text-label-md backdrop-blur-sm">Featured Experience</div>
</div>
<div class="p-8 md:w-1/2 flex flex-col justify-center">
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline-xl text-headline-xl text-primary leading-tight">Tasting Menu for Two</h3>
<span class="text-secondary font-bold font-label-md text-label-md bg-secondary-container px-3 py-1 rounded-lg">5,000 pts</span>
</div>
<p class="text-on-surface-variant font-body-lg text-body-lg mb-8">A 7-course journey through the heart of the Amazon, featuring rare ingredients and indigenous techniques reimagined for the modern palate.</p>
<div class="flex items-center gap-4 mt-auto">
<button class="bg-primary text-white px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 flex-1">Redeem Now</button>
<button class="p-3 border border-border-subtle rounded-xl hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-primary">favorite</span>
</button>
</div>
</div>
</div>
<!-- Regular Card 1 -->
<div class="md:col-span-4 bento-card bg-white rounded-3xl overflow-hidden soft-elevation border border-border-subtle flex flex-col group">
<div class="h-48 relative overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A close-up shot of a vibrant blue and green botanical cocktail in a crystal glass, garnished with an exotic edible orchid and a mist of citrus. The background is a blurred high-end tropical bar with deep forest green walls and warm lighting. The aesthetic is luxurious, moody, and refreshing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApkEt7VVOCmMLfaaq0wUy5jrKI0ojyiyCKU7fWxGTEmpwQPM83k_vvjA6xmFiDXWAL33OQckLWx3gQq_kim2WtT5JD2yfuNYrj7ZfBMx1O7YUAAVDKrge8ulbgD-CSV5ooVi0Mon9JMq1T6eFjJtlEgxfAV9E_2T3CKkxTlqmUe9uZqp1NTtvpWGXGRncG8c9o6VbibO5ljDy3FBNol-57XWPPFOKiK5-G_7H-ykfnH6pBDoUPMR2nwWvGfcuCrHmtVPWd2z2ESOTD"/>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-lg text-headline-lg text-primary">Rainforest Cocktail</h3>
<span class="text-secondary font-bold font-label-md text-label-md">500 pts</span>
</div>
<p class="text-on-surface-variant font-body-md text-body-md mb-6">A handcrafted botanical blend inspired by the canopy with acai and citrus.</p>
<button class="w-full mt-auto py-3 border-2 border-primary text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95">Redeem</button>
</div>
</div>
<!-- Regular Card 2 -->
<div class="md:col-span-4 bento-card bg-white rounded-3xl overflow-hidden soft-elevation border border-border-subtle flex flex-col group">
<div class="h-48 relative overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A trio of beautifully plated desserts on a dark stone slate. One features bright pink dragonfruit, another a deep green matcha mousse, and the third a golden passionfruit tart. Soft focused plants in the background create a lush atmosphere. Lighting is soft and natural, emphasizing the textures of the food." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARb7Z9oy1yBb1k5vhWoSsTm-7NSE-oH0toQaX9MZKWKgnaqOVWOowDsOY-qwT3Qg9ifPV6T-CB4lhkoEsb5bNoHGEsWhNLLAH26WkGrRjEU_jmIsdig-I5wA2-rcxCn922pHGflBleb3rUJ71hOpQw0AOZW3Bj0ZZwT0bx-3iSjgPdu8Divu3XqivQUZb-0Ggsk0HoY92MD5WiXSL_wCvfaKk-7nQTJ1lZDL1Wv3vR8hVdSZaW4_KSwUrhZRFRKasf8r2mcaCZ8HHX"/>
</div>
<div class="p-6 flex flex-col flex-grow">
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-lg text-headline-lg text-primary">Dessert Flight</h3>
<span class="text-secondary font-bold font-label-md text-label-md">800 pts</span>
</div>
<p class="text-on-surface-variant font-body-md text-body-md mb-6">A trio of our most celebrated Amazonian-inspired desserts with seasonal fruits.</p>
<button class="w-full mt-auto py-3 border-2 border-primary text-primary font-label-md text-label-md rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95">Redeem</button>
</div>
</div>
<!-- Ultra Premium Card -->
<div class="md:col-span-8 group bento-card bg-deep-forest text-white rounded-3xl overflow-hidden soft-elevation flex flex-col md:flex-row">
<div class="p-8 md:w-1/2 flex flex-col justify-center">
<div class="flex items-center gap-2 text-muted-gold mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
<span class="font-label-md text-label-md uppercase tracking-[0.2em]">Exclusive Membership Tier</span>
</div>
<h3 class="font-display-lg-mobile text-display-lg-mobile md:font-headline-xl md:text-headline-xl mb-4 text-white">Chef's Table Experience</h3>
<p class="text-white/70 font-body-lg text-body-lg mb-8">An intimate dinner for four at our exclusive Chef's Table. Includes personal introductions to each course and wine pairings by our head sommelier.</p>
<div class="flex items-center gap-6">
<span class="text-muted-gold font-bold font-headline-lg text-headline-lg">10,000 Points</span>
<button class="bg-muted-gold text-deep-forest px-8 py-3 rounded-xl font-label-md text-label-md hover:brightness-110 transition-all active:scale-95">Redeem Experience</button>
</div>
</div>
<div class="md:w-1/2 relative overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="An overhead view of a sophisticated chef's table set in a private dimly lit alcove of a high-end restaurant. Gleaming silverware, fine crystal glasses, and artistic ceramic plates are arranged. A professional chef in a clean white jacket is delicately placing a microgreen garnish on a dish. The mood is intimate, exclusive, and culinary-focused." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIhJBXuROdnegj92NQDIbmfh-A9BjTybFVQg6t04XZepWN_NyVgcSqaw-O0ngdbH4_Nbz6xIYoESHOiKjbVpgQ0al-xPWrFZoIXIXHnkRXOjeBC6YtbDZr0LeZgqvR2Zwsfy-ch4UBuhIn0yeBwGVu8ENU86hqBv3d33Ce0O26oH03VgEzN2NtdR8h-d05QzTHd96ZT6TpX-HwPfYQNlFpcXNLhVgFE28pURGAV_NBmtKIMalNUEOUwWaRL3GW0sHaiqWTUVZzyvo8"/>
</div>
</div>
<!-- Small Grid Items -->
<div class="md:col-span-4 bento-card bg-surface-container-low rounded-3xl p-6 flex flex-col border border-border-subtle group">
<div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">wine_bar</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-primary mb-2">Mixology Workshop</h3>
<p class="text-on-surface-variant font-body-md text-body-md mb-6">Learn the art of tropical botanical cocktails with our head mixologist.</p>
<div class="flex items-center justify-between mt-auto">
<span class="text-secondary font-bold font-label-md text-label-md">2,500 pts</span>
<a class="text-primary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Details <span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>
</div>
</div>
<div class="md:col-span-4 bento-card bg-surface-container-low rounded-3xl p-6 flex flex-col border border-border-subtle group">
<div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">coffee</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-primary mb-2">Morning Ritual Box</h3>
<p class="text-on-surface-variant font-body-md text-body-md mb-6">A curated selection of our house-roasted Amazonian beans and hand-carved mugs.</p>
<div class="flex items-center justify-between mt-auto">
<span class="text-secondary font-bold font-label-md text-label-md">1,200 pts</span>
<a class="text-primary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Details <span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>
</div>
</div>
<div class="md:col-span-4 bento-card bg-primary-container rounded-3xl p-8 flex flex-col items-center justify-center text-center text-on-primary-container">
<h3 class="font-headline-lg text-headline-lg mb-2">More Points?</h3>
<p class="font-body-md text-body-md mb-6 text-on-primary-container/80">Keep dining and exploring to unlock even more exclusive rewards.</p>
<button class="bg-white text-primary px-6 py-2 rounded-full font-label-md text-label-md hover:bg-surface-bright transition-colors">How to Earn</button>
</div>
</div>
</section>
<!-- Referral Section -->
<section class="mt-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="bg-secondary-fixed rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
<div class="md:w-1/2">
<h2 class="font-headline-xl text-headline-xl text-on-secondary-fixed mb-4">Share the Magic</h2>
<p class="text-on-secondary-fixed-variant font-body-lg text-body-lg mb-8">Invite your friends to Amazonia and earn 200 Points for each successful reservation they make.</p>
<div class="flex flex-col sm:flex-row gap-4">
<div class="flex-grow bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-on-secondary-fixed/10 font-mono text-on-secondary-fixed text-sm flex items-center justify-between">
                            AMAZONIA-REF-2024
                            <button class="text-primary font-bold hover:underline">Copy</button>
</div>
<button class="bg-on-secondary-fixed text-white px-8 py-3 rounded-xl font-label-md text-label-md">Invite Friends</button>
</div>
</div>
<div class="md:w-1/2 h-64 md:h-auto w-full relative">
<div class="absolute inset-0 bg-gradient-to-tr from-secondary-container to-transparent rounded-2xl z-10 opacity-40"></div>
<img class="w-full h-full max-h-[300px] object-cover rounded-2xl shadow-xl" data-alt="A group of four diverse, stylish friends laughing and sharing small plates of food at a sun-drenched outdoor terrace table. Large tropical plants surround the seating area. The lighting is bright and cheerful, suggesting a happy social afternoon. High-end lifestyle photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoSqI13xmefzBmsOaRWh2L8MjCXYUfHifn1m3WdmCHti2lqN5GA1-AidAjKm5EhUyLOx6FdSRN_Oq3w0fY4SjZMHi3X8XU5Vv5grHvALjpxmI80LviHraqEWjm-FEtomapp2h6Mk_3OVzoYUE3musbzbFVmZDrX2JpHNjOufvf1MZVC4ucFGRt7qT6xGMcQB5qYGoTPcsKdxvG82P_kFBJamZBUu7BJK-YVKwaUvO9F2cvcMRdspERUrg7m4MePEAGYDpzKjwRqcrl"/>
</div>
</div>
</section>
</main>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-surface dark:bg-surface-container-high z-50 shadow-[0_-4px_20px_0_rgba(0,43,27,0.08)]">
<button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2">
<span class="material-symbols-outlined">home</span>
<span class="font-label-md text-label-md mt-1">Home</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2">
<span class="material-symbols-outlined">restaurant_menu</span>
<span class="font-label-md text-label-md mt-1">Menu</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2">
<span class="material-symbols-outlined">event_available</span>
<span class="font-label-md text-label-md mt-1">Book</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">stars</span>
<span class="font-label-md text-label-md mt-1">Rewards</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2">
<span class="material-symbols-outlined">person</span>
<span class="font-label-md text-label-md mt-1">Profile</span>
</button>
</nav>
<!-- Simple Custom Interactions -->
<script>
        // Micro-interactions for buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => {
                button.classList.add('scale-95');
            });
            button.addEventListener('mouseup', () => {
                button.classList.remove('scale-95');
            });
            button.addEventListener('mouseleave', () => {
                button.classList.remove('scale-95');
            });
        });

        // Hover effect for categories
        const categoryButtons = document.querySelectorAll('.category-scrollbar button');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryButtons.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white', 'shadow-md', 'shadow-primary/20');
                    b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
                });
                btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
                btn.classList.add('bg-primary', 'text-white', 'shadow-md', 'shadow-primary/20');
            });
        });
    </script>
</body></html>

<!--Amazonia | Home-- >
< !DOCTYPE html >

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Amazonia | A Taste of the Wild, Refined</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary": "#5c6232",
                    "on-secondary-fixed": "#191e00",
                    "secondary-fixed-dim": "#c4cb91",
                    "border-subtle": "#E5E5E5",
                    "surface": "#fcf9f8",
                    "tertiary-fixed": "#dfe0ff",
                    "on-primary-fixed": "#001e2c",
                    "inverse-primary": "#a1cce8",
                    "on-primary-fixed-variant": "#1d4b62",
                    "on-secondary-fixed-variant": "#444a1d",
                    "primary-fixed-dim": "#a1cce8",
                    "on-tertiary-fixed-variant": "#3d4375",
                    "on-primary": "#ffffff",
                    "primary-container": "#19485f",
                    "tertiary": "#232859",
                    "surface-container-lowest": "#ffffff",
                    "surface-container": "#f0edec",
                    "error-container": "#ffdad6",
                    "outline": "#71787d",
                    "background": "#fcf9f8",
                    "on-secondary-container": "#626837",
                    "on-tertiary": "#ffffff",
                    "surface-bright": "#fcf9f8",
                    "tertiary-container": "#3a3f71",
                    "surface-container-high": "#ebe7e7",
                    "on-tertiary-fixed": "#101647",
                    "tertiary-fixed-dim": "#bdc2fd",
                    "on-secondary": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-tertiary-container": "#a7ace6",
                    "deep-forest": "#002B1B",
                    "error": "#ba1a1a",
                    "surface-container-low": "#f6f3f2",
                    "soft-lavender": "#FFDBED",
                    "muted-gold": "#C49871",
                    "primary": "#003145",
                    "secondary-container": "#e1e8ab",
                    "on-background": "#1c1b1b",
                    "on-error": "#ffffff",
                    "surface-tint": "#38637b",
                    "on-surface": "#1c1b1b",
                    "primary-fixed": "#c4e7ff",
                    "on-primary-container": "#8bb6d1",
                    "inverse-on-surface": "#f3f0ef",
                    "accent-pink": "#F8769C",
                    "surface-variant": "#e5e2e1",
                    "surface-light": "#F8F8F8",
                    "secondary-fixed": "#e1e8ab",
                    "inverse-surface": "#313030",
                    "on-surface-variant": "#41484c",
                    "surface-dim": "#dcd9d9",
                    "outline-variant": "#c1c7cd",
                    "surface-container-highest": "#e5e2e1"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin-mobile": "16px",
                    "base": "8px",
                    "stack-md": "24px",
                    "margin-desktop": "40px",
                    "gutter": "24px",
                    "container-max": "1200px",
                    "stack-sm": "12px",
                    "stack-lg": "48px"
            },
            "fontFamily": {
                    "headline-xl": ["Poppins"],
                    "headline-lg": ["Poppins"],
                    "display-lg-mobile": ["Poppins"],
                    "caption": ["Poppins"],
                    "label-md": ["Poppins"],
                    "body-lg": ["Poppins"],
                    "body-md": ["Poppins"],
                    "display-lg": ["Poppins"]
            },
            "fontSize": {
                    "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .soft-elevation {
            box-shadow: 0 10px 30px -10px rgba(25, 72, 95, 0.08);
        }
        .text-reveal {
            animation: textReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        @keyframes textReveal {
            0% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        .image-zoom:hover img {
            transform: scale(1.05);
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md overflow-x-hidden">
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-[1200px] mx-auto px-margin-desktop py-4">
<div class="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed-dim">
                Amazonia
            </div>
<div class="hidden md:flex items-center space-x-8">
<a class="font-body-md text-body-md uppercase tracking-wider text-primary font-bold border-b-2 border-primary pb-1" href="#">Home</a>
<a class="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">Menu</a>
<a class="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">Reservations</a>
<a class="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-label-md text-label-md uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-200">
                Book a Table
            </button>
</div>
</nav>
<main>
<!-- Hero Section -->
<section class="relative h-screen min-h-[700px] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-black/30 z-10"></div>
<img class="w-full h-full object-cover" data-alt="A cinematic, high-resolution photograph of a luxurious restaurant interior inspired by the Amazon rainforest. The space features lush vertical gardens, hanging tropical vines, and elegant dark wood tables. Soft, warm golden lighting illuminates the scene, reflecting off polished stone floors. The color palette centers on deep forest greens and sophisticated navy blues, creating a serene and premium atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP9UCIaNmGCEYtinoDFJnvIEwSmQv2PJTHtvu9r6fFdcOrE2qStHfnnVNG_pAhwaywE4kHQq5P3QGGijtMyz0XJNqKPdvyLpvbWB_p5z7uWJq4py0-C-hAFkvTPAuf-f-D2cDdQLnVUw62O6HdbnJry-tRLRM0-VrCJlNEWN4VuRpSezwMaDVMBEON_zpzGVY_RlNJghIg6rtGw1kuexJ1nYdGF-SsibeyGIl643bG8D2dm75ni2-k9DVnYVmkWV_-3haFixxAWCUB"/>
</div>
<div class="relative z-20 max-w-[1200px] mx-auto px-margin-desktop text-white">
<div class="max-w-2xl">
<h1 class="font-display-lg text-display-lg leading-tight mb-stack-sm text-reveal">
                        A Taste of the Wild, Refined.
                    </h1>
<p class="font-body-lg text-body-lg mb-stack-md opacity-90 delay-200 text-reveal">
                        Experience premium Amazonian-inspired cuisine in an elegant garden oasis, where the untamed beauty of nature meets sophisticated culinary artistry.
                    </p>
<div class="flex flex-wrap gap-4 delay-500 text-reveal">
<button class="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-primary/90 transition-colors">
                            View Menu
                        </button>
<button class="border-2 border-white/80 text-white px-10 py-4 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-white/10 transition-colors">
                            Reserve a Table
                        </button>
</div>
</div>
</div>
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
<span class="material-symbols-outlined text-white text-4xl">keyboard_arrow_down</span>
</div>
</section>
<!-- About/Story Section -->
<section class="py-stack-lg bg-surface-container-lowest">
<div class="max-w-[1200px] mx-auto px-margin-desktop">
<div class="grid md:grid-cols-2 gap-gutter items-center">
<div class="rounded-xl overflow-hidden soft-elevation h-[600px] order-2 md:order-1">
<img class="w-full h-full object-cover" data-alt="A professional food photography shot showcasing a vibrant array of fresh, exotic Amazonian ingredients. Visible are sliced dragon fruit, bright purple acai berries, aromatic vanilla pods, and fresh heart of palm arranged artistically on a textured slate surface. The lighting is bright and natural, emphasizing the rich textures and deep primary colors of the produce against a minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCBOxSCEv-YIDEaFI9QgEgAHBV9pNl0zmcu-jqoFg_xfdXeexdOSaH1VZZQ4syIj8UeFqZiT8WeIgvfOAw3qeHiM0C00vP2LQHT-1zG7Bl5skZBxC4ObblMWltr5K9YDe1pAY0IU8QyJNCW4JzhaR5OBijwWF9ONtN3itW69EUiraY9cPdB3QuYLrlG04-6SbUXkBWWDKRe-17gPg8QOVBiQhWpnHjvWI4hD4bexPMqYDCzBY0Cyxo8XppzZySFxI9k2F7k1IFIyGr"/>
</div>
<div class="space-y-stack-md order-1 md:order-2 px-0 md:px-stack-md">
<span class="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Our Heritage</span>
<h2 class="font-headline-xl text-headline-xl text-primary">Crafting Culinary Echoes of the Rainforest</h2>
<div class="w-16 h-1 bg-secondary-fixed-dim"></div>
<p class="font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed">
                            "At Amazonia, we believe that nature is the ultimate artist. Our kitchen is a sanctuary where ancestral wisdom and modern refinement converge, transforming the rare treasures of the Amazon into symphonies of flavor."
                        </p>
<p class="font-body-md text-body-md text-on-surface-variant">
                            Every ingredient is ethically sourced from sustainable cooperatives, ensuring that each bite respects the delicate balance of the ecosystems we celebrate. We invite you to lose yourself in an environment that breathes life and luxury.
                        </p>
<a class="inline-flex items-center font-label-md text-label-md text-primary hover:gap-2 transition-all" href="#">
                            EXPLORE OUR STORY <span class="material-symbols-outlined ml-2">trending_flat</span>
</a>
</div>
</div>
</div>
</section>
<!-- Signature Dishes Section -->
<section class="py-stack-lg bg-surface">
<div class="max-w-[1200px] mx-auto px-margin-desktop">
<div class="text-center mb-stack-lg">
<span class="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Chef's Selection</span>
<h2 class="font-headline-xl text-headline-xl text-primary mt-4">Signature Creations</h2>
</div>
<div class="grid md:grid-cols-3 gap-gutter">
<!-- Dish 1 -->
<div class="group soft-elevation rounded-xl bg-white overflow-hidden image-zoom transition-transform hover:-translate-y-2">
<div class="h-64 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500" data-alt="A gourmet presentation of Exotic Sea Bass, delicately seared and served over a bed of bright green pea puree. The dish is garnished with edible flowers, microgreens, and a citrus-infused Amazonian nut crumble. Set on a matte black ceramic plate, the lighting is dramatic and focused, highlighting the flaky texture of the fish and the vibrant secondary colors of the garnish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeqrczHfXpwtbsLhNzkDqw17cGtYl1qvqjIhBchfiANLQtFoGg8UR_54s3aDwOwwEtjoU_4oScIhrJ4cRY90ovhkXvYSiHuLtLpzV32eSp_Ap_2S1JeZlAUKQWfD_hkKjE9tl7WAt7t3zhgwxL0wOUPSSvFaKR9aisodJWskMjpq5MQRtceePlarAJcQVU82RN3Mv5r7VXnwtcR83mySlh7zPzvQoFL2fbi3xBatef80sKE-KXBwJSEXhavGRpVINOz6Q3840BDC3g"/>
</div>
<div class="p-stack-md">
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-lg text-headline-lg text-primary">Exotic Sea Bass</h3>
<span class="text-secondary font-bold">$38</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
                                Wild-caught bass paired with a citrus-infused Amazonian nut crumble and pea silk.
                            </p>
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-caption font-label-md">FRESH CATCH</span>
</div>
</div>
<!-- Dish 2 -->
<div class="group soft-elevation rounded-xl bg-white overflow-hidden image-zoom transition-transform hover:-translate-y-2">
<div class="h-64 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500" data-alt="A minimalist yet elegant Heart of Palm salad served in a handcrafted wooden bowl. Thin, translucent ribbons of fresh heart of palm are tossed with vibrant passionfruit dressing, pink peppercorns, and shaved radishes. The aesthetic is clean and high-end, utilizing soft lavender accents and bright natural light to emphasize the crisp freshness of the ingredients." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbfytTJCltRtkMPe6j4TlSorEMfZsqPUxZUJ_F1TxOCyrBHBxlDQr9rF9fLJ0AVwtm-VkeU_AEMbbLNTHPs0fD5nfB_S73dtEy-RxY32FIt1s-VSDHWFppDnoTplYkL-0-RSpS4Fp4C-dBRWlnyKSXJg2wlDqNcnCXU2Xr7bEn0l1-fSPvneEgDwWTc4GIVJAQtwV7Bf5Qy5iKXtZyL2IK5PTfSenSU4NhgxQpnLbhsIzd_YgC6bm0YOZD3qYoPbWwLTP6DgTqS2nI"/>
</div>
<div class="p-stack-md">
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-lg text-headline-lg text-primary">Palmito Ribbon</h3>
<span class="text-secondary font-bold">$24</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
                                Shaved hearts of palm, passionfruit reduction, and micro-cilantro from our indoor garden.
                            </p>
<span class="bg-soft-lavender text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-caption font-label-md">VEGAN</span>
</div>
</div>
<!-- Dish 3 -->
<div class="group soft-elevation rounded-xl bg-white overflow-hidden image-zoom transition-transform hover:-translate-y-2">
<div class="h-64 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500" data-alt="A sophisticated Açai-infused chocolate torte dessert. The torte is a deep, rich violet color, topped with a glossy dark chocolate mirror glaze and gold leaf flakes. It sits on a pool of vanilla bean cream and is surrounded by fresh Amazonian berries. The mood is opulent and indulgent, with high-contrast lighting that makes the gold and deep purple tones pop against a muted background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq2aPYQnST1DyonH2P4SzBpRtobOccs0F6YWu6lpl3DmGH-5MR840t249DGbZCGF_G1bBJ0T5orAzipajVyRTB3IRAH19Ajn0JdFolqsFnVs5TvBAZBOCX-EBL_OeoFBIpLhPJ3K-0F7z42pBgnGbSbDHc8yIiKfKrBbanAIDzMYcyhOt63mSAfU7lUi7drKgQuDRRI5Nm_9y7Ju6b3afhXtGX6aIVX3HlrTeAXshESEdP0EH5jRwMPUYh1eDGwiUWymiFP0QePRN4"/>
</div>
<div class="p-stack-md">
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-lg text-headline-lg text-primary">Açai Noir Torte</h3>
<span class="text-secondary font-bold">$18</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
                                70% dark chocolate melded with organic Açai berries and a hint of smoked sea salt.
                            </p>
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-caption font-label-md">BEST SELLER</span>
</div>
</div>
</div>
<div class="mt-stack-lg text-center">
<button class="border-2 border-primary text-primary px-10 py-3 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                        Explore Full Menu
                    </button>
</div>
</div>
</section>
<!-- Experience Section -->
<section class="relative py-[120px] overflow-hidden flex items-center justify-center">
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-primary/40 z-10 backdrop-blur-[2px]"></div>
<img class="w-full h-full object-cover scale-110" data-alt="A wide-angle, atmospheric evening shot of a dining area at Amazonia. The room is filled with a soft, warm glow from candlelit tables and decorative lanterns hanging from tropical branches. Guests are visible as elegant silhouettes enjoying their meals. The lush greenery of the restaurant glows in the twilight, creating an intimate, dreamlike, and unforgettable evening atmosphere in a premium setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5-hkbgMywCQZqb_1COVVqfMvVc_5t3jl9Y77U3KX32m_0bm-xk4y0xUO9qjq4r092eFLD8nHjpdpuNEEE1jR8BgYkhxL2Ll6YyebfFy9p2uVoZqlsGZEDn54YKrmS_c_5TLXQDpgFX4tPsl00TowsAiMkogkMEONFs7lohx0u5Q7rHtwVW-QE0Snpd8sydHzUD8rvf8M1GbzCftZpE6OAztcfD7C7TS-NGS1XlGa8FYTQIErUq5xmjmCISevWBaJSk1au2qaC80da"/>
</div>
<div class="relative z-20 text-center text-white px-margin-mobile">
<span class="font-label-md text-label-md uppercase tracking-[0.4em] mb-4 block">Atmosphere</span>
<h2 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md">Unforgettable Evenings</h2>
<div class="max-w-xl mx-auto">
<p class="font-body-lg text-body-lg mb-stack-lg">
                        Surround yourself with the gentle whispers of the forest and the glow of candlelight. Every evening is a curated journey through taste and tranquility.
                    </p>
<button class="bg-secondary-fixed text-on-secondary-fixed px-12 py-4 rounded-full font-label-md text-label-md uppercase tracking-widest hover:scale-105 transition-transform">
                        Explore the Space
                    </button>
</div>
</div>
</section>
<!-- Reservations Section -->
<section class="py-stack-lg bg-surface-container-low">
<div class="max-w-[800px] mx-auto px-margin-desktop text-center">
<div class="bg-white p-stack-lg rounded-xl soft-elevation">
<h2 class="font-headline-xl text-headline-xl text-primary mb-4">Book Your Table</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                        Join us for an exceptional dining experience. We recommend booking at least 48 hours in advance for weekend dinners.
                    </p>
<div class="grid md:grid-cols-2 gap-stack-md mb-stack-lg text-left">
<div class="border-r border-border-subtle pr-stack-md">
<h4 class="font-label-md text-label-md text-primary mb-2">OPENING HOURS</h4>
<ul class="font-body-md text-body-md text-on-surface-variant space-y-1">
<li class="flex justify-between"><span>Mon - Thu:</span> <span>12:00 - 22:00</span></li>
<li class="flex justify-between"><span>Fri - Sat:</span> <span>12:00 - 00:00</span></li>
<li class="flex justify-between font-bold text-primary"><span>Sunday:</span> <span>Brunch Only</span></li>
</ul>
</div>
<div class="pl-0 md:pl-stack-md">
<h4 class="font-label-md text-label-md text-primary mb-2">LOCATION</h4>
<p class="font-body-md text-body-md text-on-surface-variant">
                                124 Amazonia Drive, Emerald District<br/>
                                Manaus, BR
                            </p>
<p class="mt-2 text-secondary font-bold">+1 (555) AMAZON-IA</p>
</div>
</div>
<button class="w-full bg-primary text-on-primary py-5 rounded-xl font-headline-lg text-headline-lg hover:bg-primary-container transition-colors shadow-lg">
                        Find a Table
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-primary-container">
<div class="max-w-[1200px] mx-auto px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center md:items-start space-y-stack-md md:space-y-0">
<div class="text-center md:text-left">
<div class="font-headline-xl text-headline-xl text-on-primary mb-2">Amazonia</div>
<p class="font-body-md text-body-md text-on-primary/80 max-w-xs">
                    Elevating the flavors of the rainforest for the modern palate.
                </p>
</div>
<div class="flex flex-col items-center md:items-end">
<div class="flex space-x-8 mb-4">
<a class="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors" href="#">Contact</a>
<a class="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors" href="#">Socials</a>
<a class="font-body-md text-body-md text-on-primary/60 hover:text-on-primary transition-colors" href="#">Gallery</a>
</div>
<div class="text-on-primary/40 font-caption text-caption">
                    © 2024 Amazonia. All rights reserved.
                </div>
</div>
</div>
</footer>
<!-- Floating Action Button - Mobile Only Navigation Trigger -->
<div class="md:hidden fixed bottom-6 right-6 z-50">
<button class="bg-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
<script>
        // Simple scroll observer for reveal animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.text-reveal').forEach(el => observer.observe(el));
        
        // Micro-interaction for navbar scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'shadow-md');
                nav.classList.remove('py-4', 'shadow-sm');
            } else {
                nav.classList.add('py-4', 'shadow-sm');
                nav.classList.remove('py-2', 'shadow-md');
            }
        });
    </script>
</body></html>

<!--Amazonia | Reservations-- >
< !DOCTYPE html >

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Reservations | Amazonia Culinary Group</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind Configuration -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-highest": "#e5e2e1",
                    "on-tertiary": "#ffffff",
                    "on-primary-fixed-variant": "#1d4b62",
                    "soft-lavender": "#FFDBED",
                    "on-tertiary-fixed": "#101647",
                    "error": "#ba1a1a",
                    "secondary-fixed": "#e1e8ab",
                    "surface-light": "#F8F8F8",
                    "surface": "#fcf9f8",
                    "on-error": "#ffffff",
                    "surface-variant": "#e5e2e1",
                    "on-surface-variant": "#41484c",
                    "on-surface": "#1c1b1b",
                    "secondary-container": "#e1e8ab",
                    "background": "#fcf9f8",
                    "on-primary": "#ffffff",
                    "inverse-primary": "#a1cce8",
                    "surface-container-lowest": "#ffffff",
                    "primary-container": "#19485f",
                    "on-tertiary-fixed-variant": "#3d4375",
                    "surface-dim": "#dcd9d9",
                    "tertiary-fixed": "#dfe0ff",
                    "on-secondary-fixed": "#191e00",
                    "inverse-on-surface": "#f3f0ef",
                    "surface-container-high": "#ebe7e7",
                    "tertiary": "#232859",
                    "primary-fixed-dim": "#a1cce8",
                    "primary-fixed": "#c4e7ff",
                    "deep-forest": "#002B1B",
                    "on-tertiary-container": "#a7ace6",
                    "accent-pink": "#F8769C",
                    "on-secondary-container": "#626837",
                    "on-secondary": "#ffffff",
                    "primary": "#003145",
                    "surface-container": "#f0edec",
                    "tertiary-container": "#3a3f71",
                    "surface-tint": "#38637b",
                    "inverse-surface": "#313030",
                    "muted-gold": "#C49871",
                    "tertiary-fixed-dim": "#bdc2fd",
                    "on-background": "#1c1b1b",
                    "on-primary-fixed": "#001e2c",
                    "secondary": "#5c6232",
                    "on-secondary-fixed-variant": "#444a1d",
                    "outline": "#71787d",
                    "on-error-container": "#93000a",
                    "secondary-fixed-dim": "#c4cb91",
                    "surface-container-low": "#f6f3f2",
                    "outline-variant": "#c1c7cd",
                    "on-primary-container": "#8bb6d1",
                    "border-subtle": "#E5E5E5",
                    "surface-bright": "#fcf9f8",
                    "error-container": "#ffdad6"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "base": "8px",
                    "gutter": "24px",
                    "margin-mobile": "16px",
                    "container-max": "1200px",
                    "stack-lg": "48px",
                    "margin-desktop": "40px",
                    "stack-sm": "12px",
                    "stack-md": "24px"
            },
            "fontFamily": {
                    "label-md": ["Poppins"],
                    "display-lg-mobile": ["Poppins"],
                    "headline-lg": ["Poppins"],
                    "display-lg": ["Poppins"],
                    "headline-xl": ["Poppins"],
                    "body-lg": ["Poppins"],
                    "caption": ["Poppins"],
                    "body-md": ["Poppins"]
            },
            "fontSize": {
                    "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .time-slot:hover {
            box-shadow: 0 4px 12px rgba(217, 224, 164, 0.3);
        }
        .reservation-card {
            box-shadow: 0 20px 40px -15px rgba(25, 72, 95, 0.08);
        }
        .hero-overlay {
            background: linear-gradient(to bottom, rgba(0,49,69,0.4), rgba(0,49,69,0.8));
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md shadow-sm">
<nav class="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
<div class="font-display-lg text-headline-xl text-secondary tracking-tight">Amazonia</div>
<div class="hidden md:flex gap-8 items-center">
<a class="font-label-md text-label-md text-on-primary hover:text-secondary transition-colors" href="#">Home</a>
<a class="font-label-md text-label-md text-on-primary hover:text-secondary transition-colors" href="#">Menu</a>
<a class="font-label-md text-label-md text-secondary-fixed border-b-2 border-secondary-fixed pb-1" href="#">Reservations</a>
<a class="font-label-md text-label-md text-on-primary hover:text-secondary transition-colors" href="#">About</a>
<a class="font-label-md text-label-md text-on-primary hover:text-secondary transition-colors" href="#">Sustainability</a>
</div>
<button class="bg-secondary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300">
                Book a Table
            </button>
</nav>
</header>
<main class="pt-16">
<!-- Hero Section -->
<section class="relative h-[614px] flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center" data-alt="An atmospheric, dimly lit luxury garden restaurant at twilight. Lush tropical ferns and hanging plants are illuminated by soft, warm golden fairy lights and copper lanterns. Elegant dark wood tables are set with fine white porcelain. The scene feels intimate, sophisticated, and magical with a deep teal and emerald color palette." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiD5yAYYggjtndUHK91vIb8vJL2gRQfHSJkkcqktTn3q60w7M9FjRSJogivW9YWXsWeWoP86HxeqcQw_-OIy48ZqbRDFQg7zBByaw6vOziunGCyD_fyldoQcsbnFp7Kz29ZSgAESU8lKLuEzk21P7HVCeP1Z4GTSOaAgdmuzkb3EVYq80yy5AxAqvOmzKhn0yNAZkgrlJ2ASvU7qRJVOCKvQd0C9HkwkbUPG0OX6vWYJt73hVW0mC8QFV6tmhIRkgtjzoBuDKuCdyy')"></div>
<div class="absolute inset-0 hero-overlay"></div>
<div class="relative z-10 text-center px-margin-mobile">
<h1 class="font-display-lg text-display-lg text-on-primary mb-4">Reserve Your Table</h1>
<p class="font-body-lg text-body-lg text-secondary-fixed max-w-2xl mx-auto opacity-90">
                    Experience the magic of the Amazon. We recommend booking at least 48 hours in advance to secure your preferred time.
                </p>
</div>
</section>
<!-- Main Content (Reservation Form) -->
<section class="max-w-4xl mx-auto -mt-24 relative z-20 px-margin-mobile pb-stack-lg">
<div class="bg-surface-container-lowest p-8 md:p-12 rounded-xl reservation-card">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Left Sidebar (Steps/Status) -->
<div class="md:col-span-3 border-r border-border-subtle pr-gutter hidden md:block">
<ul class="space-y-8">
<li class="flex items-center gap-3">
<span class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-md">1</span>
<span class="font-label-md text-label-md text-primary">Details</span>
</li>
<li class="flex items-center gap-3">
<span class="w-8 h-8 rounded-full bg-surface-container text-outline flex items-center justify-center text-label-md">2</span>
<span class="font-label-md text-label-md text-outline">Contact</span>
</li>
<li class="flex items-center gap-3">
<span class="w-8 h-8 rounded-full bg-surface-container text-outline flex items-center justify-center text-label-md">3</span>
<span class="font-label-md text-label-md text-outline">Review</span>
</li>
</ul>
</div>
<!-- Main Form Area -->
<div class="md:col-span-9 space-y-stack-md">
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Party Size -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-primary uppercase tracking-wider block">Party Size</label>
<div class="relative">
<select class="w-full bg-surface p-4 rounded-lg border-border-subtle border focus:ring-2 focus:ring-primary focus:border-primary appearance-none transition-all">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5 Guests</option>
<option>6+ Guests (Contact us)</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">expand_more</span>
</div>
</div>
<!-- Date Selection -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-primary uppercase tracking-wider block">Date</label>
<div class="relative">
<input class="w-full bg-surface p-4 rounded-lg border-border-subtle border focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="date"/>
</div>
</div>
</div>
<!-- Time Selection Grid -->
<div class="space-y-4">
<label class="font-label-md text-label-md text-primary uppercase tracking-wider block">Available Time Slots</label>
<div class="grid grid-cols-3 md:grid-cols-5 gap-3">
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">18:00</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">18:30</button>
<button class="time-slot p-3 bg-primary text-on-primary rounded-lg text-center font-label-md shadow-lg shadow-primary/20">19:00</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">19:30</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">20:00</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">20:30</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">21:00</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">21:30</button>
<button class="time-slot p-3 opacity-30 border border-border-subtle rounded-lg text-center font-label-md cursor-not-allowed">22:00</button>
<button class="time-slot p-3 border border-border-subtle rounded-lg text-center font-label-md hover:bg-secondary-fixed hover:border-secondary transition-all">22:30</button>
</div>
</div>
<!-- Contact Details -->
<div class="pt-6 border-t border-border-subtle space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="space-y-2">
<label class="font-label-md text-label-md text-primary uppercase tracking-wider block">Full Name</label>
<input class="w-full bg-surface p-4 rounded-lg border-border-subtle border focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" type="text"/>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-primary uppercase tracking-wider block">Email Address</label>
<input class="w-full bg-surface p-4 rounded-lg border-border-subtle border focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-primary uppercase tracking-wider block">Special Occasion / Notes</label>
<textarea class="w-full bg-surface p-4 rounded-lg border-border-subtle border focus:ring-2 focus:ring-primary transition-all" placeholder="Is there anything we should know? (Birthday, Anniversary, Dietary Restrictions)" rows="3"></textarea>
</div>
</div>
<button class="w-full bg-secondary-fixed text-primary font-bold py-5 rounded-xl text-headline-lg hover:bg-secondary transition-all transform active:scale-[0.98] shadow-md">
                            Confirm Reservation
                        </button>
</div>
</div>
</div>
</section>
<!-- Find Us & Policies Section -->
<section class="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Find Us -->
<div class="md:col-span-2 space-y-4">
<h2 class="font-display-lg text-headline-xl text-primary">Find Us</h2>
<div class="h-80 w-full rounded-xl overflow-hidden bg-surface-container relative group">
<!-- Custom Map Placeholder -->
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A minimalist, high-end map visualization of a sophisticated urban neighborhood. The map uses a palette of soft greys, emerald greens, and deep navy. A prominent gold pin marks the location of the restaurant 'Amazonia', surrounded by stylized depictions of nearby botanical gardens and luxury landmarks." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7lg2MMcy2sdAtXiBr1mWGrLFI5ihMOFwYOwazBCnC8dzWXPS8r9QOIr5L9-D0U1fX6vts0eiMxbANalLvQxiKWibsCq_lsD4O-uXC5Vxb7QjaY54dLSbgTasGDKW0cH2vEZTjyQs90tcUsv14oWfrfAEFL78WQkSTdIL-5xHSSBR41Vbd5uWiCco-YZ7l27wh32b3uURyijwsUUYZIbhVoQ0vjnItB5itDbgrKXmd3ArBkXQrDzueB8d4YbaRJGAsLh78fXh8F8VP')"></div>
<div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
<p class="font-label-md text-label-md text-primary">1200 Canopy Drive, Verdant District</p>
<p class="font-caption text-caption text-outline">Amazonia Culinary Group</p>
</div>
<!-- Decorative overlay for minimalist feel -->
<div class="absolute inset-0 pointer-events-none border-[12px] border-white/10"></div>
</div>
</div>
<!-- Booking Policy -->
<div class="bg-primary-container p-8 rounded-xl text-on-primary-container h-full flex flex-col justify-between">
<div class="space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-fixed">info</span>
<h3 class="font-headline-lg text-headline-lg text-on-primary">Booking Policy</h3>
</div>
<div class="space-y-4">
<div>
<p class="font-label-md text-secondary-fixed uppercase text-[10px] tracking-widest mb-1">Dress Code</p>
<p class="text-on-primary opacity-90">Smart Casual. We kindly ask guests to refrain from beachwear and athletic attire.</p>
</div>
<div>
<p class="font-label-md text-secondary-fixed uppercase text-[10px] tracking-widest mb-1">Cancellations</p>
<p class="text-on-primary opacity-90">Please notify us at least 24 hours in advance for cancellations or party changes.</p>
</div>
<div>
<p class="font-label-md text-secondary-fixed uppercase text-[10px] tracking-widest mb-1">Valet</p>
<p class="text-on-primary opacity-90">Complimentary valet parking is available for all dinner guests.</p>
</div>
</div>
</div>
<div class="mt-8 pt-6 border-t border-on-primary/10">
<a class="flex items-center gap-2 font-label-md text-secondary hover:text-secondary-fixed transition-colors" href="#">
                            Read Full Terms <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-deep-forest text-on-primary w-full pt-stack-lg pb-stack-md">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="space-y-4">
<div class="font-display-lg text-headline-lg text-secondary">Amazonia</div>
<p class="opacity-70 text-body-md">Savor the essence of the tropics in every bite. A culinary sanctuary for the refined palate.</p>
</div>
<div>
<h4 class="font-label-md text-secondary uppercase tracking-widest mb-4">Discover</h4>
<ul class="space-y-2 opacity-70">
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Menu</a></li>
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Experience</a></li>
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Reservations</a></li>
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-secondary uppercase tracking-widest mb-4">Support</h4>
<ul class="space-y-2 opacity-70">
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Contact Us</a></li>
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Sustainability Commitment</a></li>
<li><a class="hover:text-secondary-fixed transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 class="font-label-md text-secondary uppercase tracking-widest mb-4">Connect</h4>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined text-lg">public</span>
</a>
<a class="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined text-lg">camera</span>
</a>
</div>
</div>
</div>
<div class="mt-stack-lg pt-8 border-t border-on-primary/10 px-margin-desktop max-w-container-max mx-auto text-center opacity-60 font-body-md text-body-md">
            © 2024 Amazonia Culinary Group. All rights reserved.
        </div>
</footer>
<script>
        // Simple micro-interaction for time slot selection
        const timeSlots = document.querySelectorAll('.time-slot:not(.cursor-not-allowed)');
        timeSlots.forEach(slot => {
            slot.addEventListener('click', () => {
                timeSlots.forEach(s => {
                    s.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg', 'shadow-primary/20');
                    s.classList.add('border-border-subtle');
                });
                slot.classList.add('bg-primary', 'text-on-primary', 'shadow-lg', 'shadow-primary/20');
                slot.classList.remove('border-border-subtle');
            });
        });

        // Add smooth scroll reveal for the card
        const observerOptions = {
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('translate-y-0', 'opacity-100');
                    entry.target.classList.remove('translate-y-10', 'opacity-0');
                }
            });
        }, observerOptions);

        const card = document.querySelector('.reservation-card');
        card.classList.add('transition-all', 'duration-1000', 'translate-y-10', 'opacity-0');
        observer.observe(card);
    </script>
</body></html>

<!--Amazonia | Menu with Subcategories-- >
< !DOCTYPE html > <html class="scroll-smooth" lang="en"><head>
    <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
            <title>Amazonia | The Menu</title>
            <!-- Tailwind CSS -->
            <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            <!-- Google Fonts: Poppins -->
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
                <!-- Material Symbols -->
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
                        <!-- Theme Configuration -->
                        <script id="tailwind-config">
                            tailwind.config = {
                                darkMode: "class",
                            theme: {
                                extend: {
                                "colors": {
                                "secondary-container": "#e1e8ab",
                            "secondary": "#5c6232",
                            "on-surface": "#1c1b1b",
                            "surface-dim": "#dcd9d9",
                            "on-tertiary": "#ffffff",
                            "soft-lavender": "#FFDBED",
                            "on-tertiary-container": "#a7ace6",
                            "on-secondary-fixed-variant": "#444a1d",
                            "tertiary": "#232859",
                            "accent-pink": "#F8769C",
                            "surface-container-highest": "#e5e2e1",
                            "inverse-surface": "#313030",
                            "on-background": "#1c1b1b",
                            "on-error-container": "#93000a",
                            "surface-variant": "#e5e2e1",
                            "on-tertiary-fixed": "#101647",
                            "on-secondary": "#ffffff",
                            "inverse-primary": "#a1cce8",
                            "on-secondary-fixed": "#191e00",
                            "on-error": "#ffffff",
                            "on-primary": "#ffffff",
                            "error": "#ba1a1a",
                            "secondary-fixed-dim": "#c4cb91",
                            "primary-fixed": "#c4e7ff",
                            "primary-container": "#19485f",
                            "outline-variant": "#c1c7cd",
                            "surface-container-lowest": "#ffffff",
                            "muted-gold": "#C49871",
                            "surface-container": "#f0edec",
                            "background": "#fcf9f8",
                            "primary": "#003145",
                            "surface-container-high": "#ebe7e7",
                            "secondary-fixed": "#e1e8ab",
                            "on-secondary-container": "#626837",
                            "tertiary-container": "#3a3f71",
                            "on-surface-variant": "#41484c",
                            "outline": "#71787d",
                            "surface-tint": "#38637b",
                            "surface-light": "#F8F8F8",
                            "deep-forest": "#002B1B",
                            "on-tertiary-fixed-variant": "#3d4375",
                            "on-primary-fixed": "#001e2c",
                            "on-primary-container": "#8bb6d1",
                            "tertiary-fixed": "#dfe0ff",
                            "surface-container-low": "#f6f3f2",
                            "border-subtle": "#E5E5E5",
                            "surface": "#fcf9f8",
                            "tertiary-fixed-dim": "#bdc2fd",
                            "primary-fixed-dim": "#a1cce8",
                            "inverse-on-surface": "#f3f0ef",
                            "surface-bright": "#fcf9f8",
                            "error-container": "#ffdad6",
                            "on-primary-fixed-variant": "#1d4b62"
            },
                            "borderRadius": {
                                "DEFAULT": "0.25rem",
                            "lg": "0.5rem",
                            "xl": "0.75rem",
                            "full": "9999px"
            },
                            "spacing": {
                                "stack-lg": "48px",
                            "stack-md": "24px",
                            "container-max": "1200px",
                            "stack-sm": "12px",
                            "margin-mobile": "16px",
                            "base": "8px",
                            "gutter": "24px",
                            "margin-desktop": "40px"
            },
                            "fontFamily": {
                                "label-md": ["Poppins"],
                            "headline-xl": ["Poppins"],
                            "headline-lg": ["Poppins"],
                            "body-md": ["Poppins"],
                            "body-lg": ["Poppins"],
                            "display-lg-mobile": ["Poppins"],
                            "display-lg": ["Poppins"],
                            "caption": ["Poppins"]
            },
                            "fontSize": {
                                "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                            "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                            "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                            "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}]
            }
          },
        },
      }
                        </script>
                        <style>
                            .material-symbols-outlined {
                                font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
                            .soft-elevation {
                                shadow: 0 4px 20px 0 rgba(25, 72, 95, 0.08);
        }
                            .hide-scrollbar::-webkit-scrollbar {
                                display: none;
        }
                            .hide-scrollbar {
                                -ms - overflow - style: none;
                            scrollbar-width: none;
        }
                        </style>
                    </head>
                    <body class="bg-background text-on-surface font-body-md selection:bg-secondary-container">
                        <!-- TopNavBar -->
                        <header class="fixed top-0 w-full z-[100] transition-all duration-300 bg-background/95 backdrop-blur-md">
                            <nav class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto w-full">
                                <div class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary uppercase tracking-widest">
                                    Amazonia
                                </div>
                                <div class="hidden md:flex items-center gap-stack-md">
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">Home</a>
                                    <a class="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-primary-container transition-colors duration-300" href="#">Menu</a>
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">Reservations</a>
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">About</a>
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">Order Online</a>
                                </div>
                                <button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:scale-105 transition-transform duration-200">
                                    Book a Table
                                </button>
                            </nav>
                        </header>
                        <main class="pt-20 md:pt-32">
                            <!-- Hero Section -->
                            <section class="relative h-[409px] md:h-[512px] flex items-center justify-center overflow-hidden">
                                <div class="absolute inset-0 z-0">
                                    <div class="w-full h-full bg-cover bg-center scale-110 blur-sm" data-alt="A lush, cinematic close-up of tropical Amazonian foliage with deep emerald green leaves and soft dappled sunlight filtering through the canopy. The image has a premium, moody aesthetic with high atmospheric depth and a soft-focus background that evokes a sense of serene mystery. Soft shadows and subtle moisture on the leaves create a tactile, organic texture." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXcTPvIU_Ou1i5nlI3fGSl6WuLpYQd-Y9jyduRCX_UV_9V5PmJSPU2aNNpkL0OPVRY90V7-V2eSDO3SeUGOBzn3B5yzepO6j5oZnLwh5N7VMg75n_kVLKFQk6s0XqYtdFBlBZIarqjCMI0VjnjVgsV8auy6TbqYZxR6ftqRl2-WiuaLuplOEo87vqV-z8toWxskLBVN3OiDPwgqzqDbMS33yyyHcOHxgeVm6MAg74gxjM23rq9Ds0nepIu_LF34eNdXXEeiTag5952')">
                                    </div>
                                    <div class="absolute inset-0 bg-primary/20"></div>
                                </div>
                                <div class="relative z-10 text-center px-margin-mobile">
                                    <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-4">
                                        The Amazonia Menu
                                    </h1>
                                    <p class="font-body-lg text-white/90 max-w-xl mx-auto italic">
                                        Sourcing the treasures of the forest, delivered with modern sophistication.
                                    </p>
                                </div>
                            </section>
                            <!-- Category Navigation (Sticky) -->
                            <nav class="sticky top-[64px] z-50 bg-surface/90 backdrop-blur-md border-y border-border-subtle overflow-x-auto hide-scrollbar">
                                <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center gap-stack-md py-4 whitespace-nowrap"><a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#starters">Starters</a><a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#main-course">Main Course</a><a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#garden-greens">Garden Greens</a><a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#desserts">Desserts</a></div>
                            </nav><nav class="sticky top-[120px] z-40 bg-surface/80 backdrop-blur-sm border-b border-border-subtle overflow-x-auto hide-scrollbar">
                                <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-3 flex flex-col gap-4"><!-- Starters Submenu --><div class="flex items-center gap-6 whitespace-nowrap"><span class="text-[10px] font-bold uppercase tracking-widest text-primary/50">Starters:</span><div class="flex gap-6"><a class="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-secondary pb-0.5" href="#">Cold Appetizers</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Warm Bites</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Sharing Plats</a></div></div><!-- Main Course Submenu --><div class="flex items-center gap-6 whitespace-nowrap"><span class="text-[10px] font-bold uppercase tracking-widest text-primary/50">Main Course:</span><div class="flex gap-6"><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">From the Grill</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Amazonian Classics</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Seafood</a></div></div><!-- Garden Greens Submenu --><div class="flex items-center gap-6 whitespace-nowrap"><span class="text-[10px] font-bold uppercase tracking-widest text-primary/50">Garden Greens:</span><div class="flex gap-6"><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Fresh Salads</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Warm Bowls</a></div></div><!-- Desserts Submenu --><div class="flex items-center gap-6 whitespace-nowrap"><span class="text-[10px] font-bold uppercase tracking-widest text-primary/50">Desserts:</span><div class="flex gap-6"><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Fruit Based</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Chocolate &amp; Nuts</a><a class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">Pastries</a></div></div></div>
                            </nav>
                            <!-- Menu Grid Content -->
                            <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg"><!-- Section: Starters --><section class="mb-stack-lg" id="starters"><div class="flex items-center gap-4 mb-stack-md"><h2 class="font-headline-xl text-primary">Starters</h2><div class="h-[1px] flex-grow bg-border-subtle"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-gutter"><div class="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] hover:scale-[1.02] transition-transform duration-300"><div class="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden"><img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrffPoZFjWGyXJKip0CCr8VEtZXXhY6InA93CeaWDtrasgi4STeXJmDWf_WrSgGcb5cI2sMxTUkufyiN5UQlVYOZsvgeYNhVKmxm6IRptHWO8MMTzvRCDyqdJnYgToNkZ6ROaewaRtDDkHHFiXJqC_eUpiLX1dtu-bMVzegi1TfJQYiMxhKQG8RUcn81EXAMCjrM0O6VLYjZXAtb1SbMdW5cMxsuvjwssjdXPfG7knUM1Y_nboCfH_IGcIc4XiojVUEvTPHhpIl-R4"></div><div class="flex flex-col justify-between"><div><div class="flex justify-between items-start mb-1"><h3 class="font-headline-lg text-primary">Charred Hearts of Palm</h3><span class="font-headline-lg text-secondary">$18</span></div><p class="font-body-md text-on-surface-variant mb-2">Wild-harvested, grilled over open flame, served with Brazil nut gremolata.</p></div><div class="flex gap-2"><span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">Vegan</span></div></div></div><div class="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] hover:scale-[1.02] transition-transform duration-300"><div class="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden"><img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jT0PTZo4iGBsYL6MMufnJgBaN3Hbv8FftjEshSnn9lbDOTipSY9LfU1PaFFHtQROi3GR9D6Qvc5LWRBGY0oou0hZMAReTQqB3uiv7TvJwQ8Ap9wN1XId3A6Ha09UD-7s6ZmiIDEuEkQHgAR91oasZs1W66AJtgCceEauuJN246fgStcRjGVJIpP4U-GX2fwsW-JhxeCUPQFxGC6gyNN723fhRhhKT2q2aF7K_mSQPnjuuDDDnyh61vb74gog-YBBw1_59_JqAlWj"></div><div class="flex flex-col justify-between"><div><div class="flex justify-between items-start mb-1"><h3 class="font-headline-lg text-primary">Cassava Croquettes</h3><span class="font-headline-lg text-secondary">$16</span></div><p class="font-body-md text-on-surface-variant mb-2">Crispy yuca exterior with a molten heart of smoked Queijo Coalho.</p></div><div class="flex gap-2"><span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">GF</span></div></div></div></div></section><!-- Chef's Special --><section class="mb-stack-lg bg-primary-container text-white rounded-2xl overflow-hidden shadow-xl"><div class="flex flex-col md:flex-row"><div class="w-full md:w-1/2 h-80 md:h-auto overflow-hidden"><img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVVF1whGYFxbuiHJ-7-pJv1ulwAQcslIav-KBjlfhwiCsW4LdK4h6kotMveUJ7vTMyxTcvB-J4K6IH7qmADz6Sz4p3KkXIRz7W57E3xko0TgT40IxIFHaooePbg_k2yDKyrxQJ26J6vgcQIEx5jJW2MDAZnRh5_6nnPGYX82U1NqTbkm0HF4HVDGfP4dy3NViO7i734qV4UFYDRjiLt-NZR_9UKQN7bF58TwyRcmEjU6KocPzKRE4i9piLd6gTgy9BUz1bQ2sy44Wi"></div><div class="w-full md:w-1/2 p-margin-desktop flex flex-col justify-center"><span class="font-label-md text-secondary-fixed mb-2 tracking-widest uppercase">Chef's Signature</span><h2 class="font-display-lg text-display-lg-mobile md:text-display-lg-mobile mb-4">Tucupi Glazed Sea Bass</h2><p class="font-body-lg text-on-primary-container mb-6">Sustainable wild-caught sea bass glazed in fermented manioc juice (Tucupi), served atop a bed of creamy jambu risotto.</p><div class="flex items-center gap-6"><span class="font-display-lg text-secondary-fixed">$42</span><button class="px-6 py-3 border-2 border-secondary-fixed text-secondary-fixed rounded-full font-label-md hover:bg-secondary-fixed hover:text-primary transition-all">Order Now</button></div></div></div></section><!-- Section: Main Course --><section class="mb-stack-lg" id="main-course"><div class="flex items-center gap-4 mb-stack-md"><h2 class="font-headline-xl text-primary">Main Course</h2><div class="h-[1px] flex-grow bg-border-subtle"></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"><div class="bg-white p-6 rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] flex flex-col justify-between"><div><div class="flex justify-between items-baseline mb-2"><h3 class="font-headline-lg text-primary">Picanha Steak</h3><span class="font-headline-lg text-secondary">$38</span></div><p class="font-body-md text-on-surface-variant mb-4">Premium Brazilian cut with a sea salt crust and wild Amazonian herb chimichurri.</p></div><div class="flex gap-2"><span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">GF</span></div></div><div class="bg-white p-6 rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] flex flex-col justify-between"><div><div class="flex justify-between items-baseline mb-2"><h3 class="font-headline-lg text-primary">Moqueca Royale</h3><span class="font-headline-lg text-secondary">$45</span></div><p class="font-body-md text-on-surface-variant mb-4">Traditional seafood stew with lobster tails and prawns in coconut milk.</p></div><div class="flex gap-2"><span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">Seafood</span></div></div><div class="bg-white p-6 rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] flex flex-col justify-between"><div><div class="flex justify-between items-baseline mb-2"><h3 class="font-headline-lg text-primary">Forest Risotto</h3><span class="font-headline-lg text-secondary">$32</span></div><p class="font-body-md text-on-surface-variant mb-4">Arborio rice with foraged Amazonian mushrooms and truffle oil.</p></div><div class="flex gap-2"><span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">Vegan</span></div></div></div></section><!-- Section: Garden Greens & Desserts --><div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter"><section class="lg:col-span-7" id="garden-greens"><div class="flex items-center gap-4 mb-stack-md"><h2 class="font-headline-xl text-primary">Garden Greens</h2><div class="h-[1px] flex-grow bg-border-subtle"></div></div><div class="space-y-4"><div class="bg-surface-light p-6 rounded-xl flex items-center justify-between border-l-4 border-secondary transition-all hover:bg-white hover:shadow-md"><div><h3 class="font-headline-lg text-primary">Palm Heart Carpaccio</h3><p class="font-body-md text-on-surface-variant">Thinly sliced palm hearts, capers, citrus vinaigrette.</p></div><span class="font-headline-lg text-secondary ml-4">$22</span></div><div class="bg-surface-light p-6 rounded-xl flex items-center justify-between border-l-4 border-secondary transition-all hover:bg-white hover:shadow-md"><div><h3 class="font-headline-lg text-primary">Superfood Salad</h3><p class="font-body-md text-on-surface-variant">Quinoa, kale, açai berries, and toasted cashews.</p></div><span class="font-headline-lg text-secondary ml-4">$19</span></div></div></section><section class="lg:col-span-5" id="desserts"><div class="flex items-center gap-4 mb-stack-md"><h2 class="font-headline-xl text-primary text-right w-full">Desserts</h2><div class="h-[1px] flex-grow bg-border-subtle"></div></div><div class="space-y-gutter"><div class="bg-white rounded-2xl overflow-hidden shadow-lg group"><div class="h-48 overflow-hidden"><img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkUVgLZLXlvmPw9qR7Lx4GUPa8LQNVKMHf28lfLcO34c5qjqzMx2YsJblu36ww2Eqn681gwQ1bIEL6iPgHHgG9Pgu-IOpEcBbtdOElfdPkMF1hiq62R9BCY2T8dpU7SROA9Nb2GTxC0YNjao-yttaZ87XEhDQbz_fGAS8sjWJyJ6BQHqZLkUB55Wgct90KjBCAne25I562v_ZQnpRSgd87aWP-4bDNUlYYXDbZPnqTJsMcKZU3ky6I-NIBmpNPjxP0blvn0IwHkfRY"></div><div class="p-6"><div class="flex justify-between items-start mb-2"><h3 class="font-headline-lg text-primary">Açai Noir Torte</h3><span class="font-headline-lg text-secondary">$16</span></div><p class="font-body-md text-on-surface-variant">70% dark chocolate torte with an açai berry core.</p></div></div><div class="bg-white p-6 rounded-xl shadow-md flex justify-between items-center"><div><h3 class="font-headline-lg text-primary">Cupuaçu Pastry</h3><p class="font-body-md text-on-surface-variant">Flaky crust with creamy cupuaçu fruit filling.</p></div><span class="font-headline-lg text-secondary">$14</span></div></div></section></div></div>
                        </main>
                        <!-- Footer -->
                        <footer class="bg-primary dark:bg-deep-forest text-on-primary mt-stack-lg">
                            <div class="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
                                <div class="mb-stack-md md:mb-0">
                                    <div class="font-headline-xl text-headline-xl text-secondary-fixed mb-2">Amazonia</div>
                                    <p class="font-body-md opacity-80">© 2024 Amazonia Culinary Group. All rights reserved.</p>
                                </div>
                                <div class="flex flex-wrap justify-center gap-stack-md">
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Privacy Policy</a>
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Terms of Service</a>
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Sustainability</a>
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Careers</a>
                                </div>
                            </div>
                        </footer>
                        <!-- BottomNavBar (Mobile Only) -->
                        <nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface shadow-[0_-4px_20px_0_rgba(25,72,95,0.08)] rounded-t-xl">
                            <a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
                                <span class="material-symbols-outlined">home</span>
                                <span class="font-label-md text-label-md">Home</span>
                            </a>
                            <a class="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" href="#">
                                <span class="material-symbols-outlined">restaurant_menu</span>
                                <span class="font-label-md text-label-md">Menu</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
                                <span class="material-symbols-outlined">event_available</span>
                                <span class="font-label-md text-label-md">Book</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
                                <span class="material-symbols-outlined">person</span>
                                <span class="font-label-md text-label-md">Profile</span>
                            </a>
                        </nav>
                        <script>
        // Simple scroll behavior for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                                header.classList.add('shadow-sm', 'py-2');
                            header.classList.remove('py-base');
            } else {
                                header.classList.remove('shadow-sm', 'py-2');
                            header.classList.add('py-base');
            }
        });

        // Smooth scroll for sub-nav
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
                                anchor.addEventListener('click', function (e) {
                                    e.preventDefault();
                                    const targetId = this.getAttribute('href');
                                    const targetElement = document.querySelector(targetId);
                                    const offset = 120; // Sticky nav height + padding
                                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                                    window.scrollTo({
                                        top: targetPosition,
                                        behavior: 'smooth'
                                    });
                                });
        });
                        </script>


                    </body></html>

                <!-- Amazonia | Menu -->
                <!DOCTYPE html>

                <html class="scroll-smooth" lang="en"><head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Amazonia | The Menu</title>
                    <!-- Tailwind CSS -->
                    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                    <!-- Google Fonts: Poppins -->
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />
                    <!-- Material Symbols -->
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <!-- Theme Configuration -->
                    <script id="tailwind-config">
                        tailwind.config = {
                            darkMode: "class",
                        theme: {
                            extend: {
                            "colors": {
                            "secondary-container": "#e1e8ab",
                        "secondary": "#5c6232",
                        "on-surface": "#1c1b1b",
                        "surface-dim": "#dcd9d9",
                        "on-tertiary": "#ffffff",
                        "soft-lavender": "#FFDBED",
                        "on-tertiary-container": "#a7ace6",
                        "on-secondary-fixed-variant": "#444a1d",
                        "tertiary": "#232859",
                        "accent-pink": "#F8769C",
                        "surface-container-highest": "#e5e2e1",
                        "inverse-surface": "#313030",
                        "on-background": "#1c1b1b",
                        "on-error-container": "#93000a",
                        "surface-variant": "#e5e2e1",
                        "on-tertiary-fixed": "#101647",
                        "on-secondary": "#ffffff",
                        "inverse-primary": "#a1cce8",
                        "on-secondary-fixed": "#191e00",
                        "on-error": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#c4cb91",
                        "primary-fixed": "#c4e7ff",
                        "primary-container": "#19485f",
                        "outline-variant": "#c1c7cd",
                        "surface-container-lowest": "#ffffff",
                        "muted-gold": "#C49871",
                        "surface-container": "#f0edec",
                        "background": "#fcf9f8",
                        "primary": "#003145",
                        "surface-container-high": "#ebe7e7",
                        "secondary-fixed": "#e1e8ab",
                        "on-secondary-container": "#626837",
                        "tertiary-container": "#3a3f71",
                        "on-surface-variant": "#41484c",
                        "outline": "#71787d",
                        "surface-tint": "#38637b",
                        "surface-light": "#F8F8F8",
                        "deep-forest": "#002B1B",
                        "on-tertiary-fixed-variant": "#3d4375",
                        "on-primary-fixed": "#001e2c",
                        "on-primary-container": "#8bb6d1",
                        "tertiary-fixed": "#dfe0ff",
                        "surface-container-low": "#f6f3f2",
                        "border-subtle": "#E5E5E5",
                        "surface": "#fcf9f8",
                        "tertiary-fixed-dim": "#bdc2fd",
                        "primary-fixed-dim": "#a1cce8",
                        "inverse-on-surface": "#f3f0ef",
                        "surface-bright": "#fcf9f8",
                        "error-container": "#ffdad6",
                        "on-primary-fixed-variant": "#1d4b62"
            },
                        "borderRadius": {
                            "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
            },
                        "spacing": {
                            "stack-lg": "48px",
                        "stack-md": "24px",
                        "container-max": "1200px",
                        "stack-sm": "12px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "gutter": "24px",
                        "margin-desktop": "40px"
            },
                        "fontFamily": {
                            "label-md": ["Poppins"],
                        "headline-xl": ["Poppins"],
                        "headline-lg": ["Poppins"],
                        "body-md": ["Poppins"],
                        "body-lg": ["Poppins"],
                        "display-lg-mobile": ["Poppins"],
                        "display-lg": ["Poppins"],
                        "caption": ["Poppins"]
            },
                        "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}]
            }
          },
        },
      }
                    </script>
                    <style>
                        .material-symbols-outlined {
                            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
                        .soft-elevation {
                            shadow: 0 4px 20px 0 rgba(25, 72, 95, 0.08);
        }
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
        }
                        .hide-scrollbar {
                            -ms - overflow - style: none;
                        scrollbar-width: none;
        }
                    </style>
                </head>
                    <body class="bg-background text-on-surface font-body-md selection:bg-secondary-container">
                        <!-- TopNavBar -->
                        <header class="fixed top-0 w-full z-[100] transition-all duration-300 bg-background/95 backdrop-blur-md">
                            <nav class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto w-full">
                                <div class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary uppercase tracking-widest">
                                    Amazonia
                                </div>
                                <div class="hidden md:flex items-center gap-stack-md">
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">Home</a>
                                    <a class="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-primary-container transition-colors duration-300" href="#">Menu</a>
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">Reservations</a>
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">About</a>
                                    <a class="text-on-surface-variant font-medium hover:text-primary-container transition-colors duration-300" href="#">Order Online</a>
                                </div>
                                <button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:scale-105 transition-transform duration-200">
                                    Book a Table
                                </button>
                            </nav>
                        </header>
                        <main class="pt-20">
                            <!-- Hero Section -->
                            <section class="relative h-[409px] md:h-[512px] flex items-center justify-center overflow-hidden">
                                <div class="absolute inset-0 z-0">
                                    <div class="w-full h-full bg-cover bg-center scale-110 blur-sm" data-alt="A lush, cinematic close-up of tropical Amazonian foliage with deep emerald green leaves and soft dappled sunlight filtering through the canopy. The image has a premium, moody aesthetic with high atmospheric depth and a soft-focus background that evokes a sense of serene mystery. Soft shadows and subtle moisture on the leaves create a tactile, organic texture." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXcTPvIU_Ou1i5nlI3fGSl6WuLpYQd-Y9jyduRCX_UV_9V5PmJSPU2aNNpkL0OPVRY90V7-V2eSDO3SeUGOBzn3B5yzepO6j5oZnLwh5N7VMg75n_kVLKFQk6s0XqYtdFBlBZIarqjCMI0VjnjVgsV8auy6TbqYZxR6ftqRl2-WiuaLuplOEo87vqV-z8toWxskLBVN3OiDPwgqzqDbMS33yyyHcOHxgeVm6MAg74gxjM23rq9Ds0nepIu_LF34eNdXXEeiTag5952')">
                                    </div>
                                    <div class="absolute inset-0 bg-primary/20"></div>
                                </div>
                                <div class="relative z-10 text-center px-margin-mobile">
                                    <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-4">
                                        The Amazonia Menu
                                    </h1>
                                    <p class="font-body-lg text-white/90 max-w-xl mx-auto italic">
                                        Sourcing the treasures of the forest, delivered with modern sophistication.
                                    </p>
                                </div>
                            </section>
                            <!-- Category Navigation (Sticky) -->
                            <nav class="sticky top-[64px] z-50 bg-surface/90 backdrop-blur-md border-y border-border-subtle overflow-x-auto hide-scrollbar">
                                <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center gap-stack-md py-4 whitespace-nowrap">
                                    <a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#small-plates">Small Plates</a>
                                    <a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#signature-mains">Signature Mains</a>
                                    <a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#garden-greens">Garden Greens</a>
                                    <a class="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#desserts">Rainforest Desserts</a>
                                </div>
                            </nav>
                            <!-- Menu Grid Content -->
                            <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
                                <!-- Section: Small Plates -->
                                <section class="mb-stack-lg" id="small-plates">
                                    <div class="flex items-center gap-4 mb-stack-md">
                                        <h2 class="font-headline-xl text-primary">Small Plates</h2>
                                        <div class="h-[1px] flex-grow bg-border-subtle"></div>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                                        <!-- Item 1 -->
                                        <div class="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] hover:scale-[1.02] transition-transform duration-300">
                                            <div class="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                                <img class="w-full h-full object-cover" data-alt="Exquisite charred hearts of palm served on a dark ceramic plate, garnished with micro-greens and a drizzle of vibrant herb oil. The lighting is soft and directional, highlighting the charred texture of the palm against a minimalist, high-end cafe backdrop. The overall mood is sophisticated and culinary-focused." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrffPoZFjWGyXJKip0CCr8VEtZXXhY6InA93CeaWDtrasgi4STeXJmDWf_WrSgGcb5cI2sMxTUkufyiN5UQlVYOZsvgeYNhVKmxm6IRptHWO8MMTzvRCDyqdJnYgToNkZ6ROaewaRtDDkHHFiXJqC_eUpiLX1dtu-bMVzegi1TfJQYiMxhKQG8RUcn81EXAMCjrM0O6VLYjZXAtb1SbMdW5cMxsuvjwssjdXPfG7knUM1Y_nboCfH_IGcIc4XiojVUEvTPHhpIl-R4" />
                                            </div>
                                            <div class="flex flex-col justify-between">
                                                <div>
                                                    <div class="flex justify-between items-start mb-1">
                                                        <h3 class="font-headline-lg text-primary">Charred Hearts of Palm</h3>
                                                        <span class="font-headline-lg text-secondary">$18</span>
                                                    </div>
                                                    <p class="font-body-md text-on-surface-variant mb-2">Wild-harvested, grilled over open flame, served with Brazil nut gremolata and lime-infused aïoli.</p>
                                                </div>
                                                <div class="flex gap-2">
                                                    <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">Vegan</span>
                                                    <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">GF</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Item 2 -->
                                        <div class="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] hover:scale-[1.02] transition-transform duration-300">
                                            <div class="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                                <img class="w-full h-full object-cover" data-alt="Artisanal Cassava croquettes arranged artfully on a slate platter, dusted with smoked paprika and served with a small bowl of spicy guava dip. The presentation is modern and clean, with the warm golden-brown tones of the croquettes contrasting against the cool grey of the slate. Minimalist professional food photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jT0PTZo4iGBsYL6MMufnJgBaN3Hbv8FftjEshSnn9lbDOTipSY9LfU1PaFFHtQROi3GR9D6Qvc5LWRBGY0oou0hZMAReTQqB3uiv7TvJwQ8Ap9wN1XId3A6Ha09UD-7s6ZmiIDEuEkQHgAR91oasZs1W66AJtgCceEauuJN246fgStcRjGVJIpP4U-GX2fwsW-JhxeCUPQFxGC6gyNN723fhRhhKT2q2aF7K_mSQPnjuuDDDnyh61vb74gog-YBBw1_59_JqAlWj" />
                                            </div>
                                            <div class="flex flex-col justify-between">
                                                <div>
                                                    <div class="flex justify-between items-start mb-1">
                                                        <h3 class="font-headline-lg text-primary">Cassava Croquettes</h3>
                                                        <span class="font-headline-lg text-secondary">$16</span>
                                                    </div>
                                                    <p class="font-body-md text-on-surface-variant mb-2">Crispy yuca exterior with a molten heart of smoked Queijo Coalho and spicy guava reduction.</p>
                                                </div>
                                                <div class="flex gap-2">
                                                    <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">GF</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!-- Chef's Special (Asymmetric Large Featured) -->
                                <section class="mb-stack-lg bg-primary-container text-white rounded-2xl overflow-hidden shadow-xl">
                                    <div class="flex flex-col md:flex-row">
                                        <div class="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                                            <img class="w-full h-full object-cover" data-alt="A premium culinary masterpiece featuring Tucupi Glazed Sea Bass, artfully plated on a dark textured dish. The sea bass has a golden, glistening glaze of yellow tucupi, accompanied by delicate edible flowers and perfectly turned Amazonian vegetables. The lighting is cinematic and high-contrast, focusing on the texture of the fish and the vibrant yellow sauce." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVVF1whGYFxbuiHJ-7-pJv1ulwAQcslIav-KBjlfhwiCsW4LdK4h6kotMveUJ7vTMyxTcvB-J4K6IH7qmADz6Sz4p3KkXIRz7W57E3xko0TgT40IxIFHaooePbg_k2yDKyrxQJ26J6vgcQIEx5jJW2MDAZnRh5_6nnPGYX82U1NqTbkm0HF4HVDGfP4dy3NViO7i734qV4UFYDRjiLt-NZR_9UKQN7bF58TwyRcmEjU6KocPzKRE4i9piLd6gTgy9BUz1bQ2sy44Wi" />
                                        </div>
                                        <div class="w-full md:w-1/2 p-margin-desktop flex flex-col justify-center">
                                            <span class="font-label-md text-secondary-fixed mb-2 tracking-widest uppercase">Chef's Signature</span>
                                            <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg-mobile mb-4">Tucupi Glazed Sea Bass</h2>
                                            <p class="font-body-lg text-on-primary-container mb-6">Sustainable wild-caught sea bass glazed in fermented manioc juice (Tucupi), served atop a bed of creamy jambu risotto that creates a unique tingling sensation on the palate.</p>
                                            <div class="flex items-center gap-6">
                                                <span class="font-display-lg text-secondary-fixed">$42</span>
                                                <button class="px-6 py-3 border-2 border-secondary-fixed text-secondary-fixed rounded-full font-label-md hover:bg-secondary-fixed hover:text-primary transition-all">Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!-- Section: Signature Mains -->
                                <section class="mb-stack-lg" id="signature-mains">
                                    <div class="flex items-center gap-4 mb-stack-md">
                                        <h2 class="font-headline-xl text-primary">Signature Mains</h2>
                                        <div class="h-[1px] flex-grow bg-border-subtle"></div>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                                        <!-- Standard Menu Card style -->
                                        <div class="bg-white p-6 rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] flex flex-col justify-between">
                                            <div>
                                                <div class="flex justify-between items-baseline mb-2">
                                                    <h3 class="font-headline-lg text-primary">Picanha Steak</h3>
                                                    <span class="font-headline-lg text-secondary">$38</span>
                                                </div>
                                                <p class="font-body-md text-on-surface-variant mb-4">Premium Brazilian cut with a sea salt crust, farofa crumbs, and chimichurri made with wild Amazonian herbs.</p>
                                            </div>
                                            <div class="flex gap-2">
                                                <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">GF</span>
                                            </div>
                                        </div>
                                        <div class="bg-white p-6 rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] flex flex-col justify-between">
                                            <div>
                                                <div class="flex justify-between items-baseline mb-2">
                                                    <h3 class="font-headline-lg text-primary">Moqueca Royale</h3>
                                                    <span class="font-headline-lg text-secondary">$45</span>
                                                </div>
                                                <p class="font-body-md text-on-surface-variant mb-4">Traditional seafood stew with lobster tails, prawns, and mussels in a coconut milk and dendê oil broth.</p>
                                            </div>
                                            <div class="flex gap-2">
                                                <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">Seafood</span>
                                            </div>
                                        </div>
                                        <div class="bg-white p-6 rounded-xl shadow-[0_4px_20px_0_rgba(25,72,95,0.06)] flex flex-col justify-between border-2 border-secondary-container/30">
                                            <div>
                                                <div class="flex justify-between items-baseline mb-2">
                                                    <h3 class="font-headline-lg text-primary">Forest Mushroom Risotto</h3>
                                                    <span class="font-headline-lg text-secondary">$32</span>
                                                </div>
                                                <p class="font-body-md text-on-surface-variant mb-4">Arborio rice cooked in a rich porcini broth with foraged Amazonian mushrooms and truffle oil.</p>
                                            </div>
                                            <div class="flex gap-2">
                                                <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">Vegan</span>
                                                <span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container font-label-md text-[10px] uppercase">GF</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!-- Section: Garden Greens & Desserts (Bento Style Grid) -->
                                <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                                    <section class="lg:col-span-7" id="garden-greens">
                                        <div class="flex items-center gap-4 mb-stack-md">
                                            <h2 class="font-headline-xl text-primary">Garden Greens</h2>
                                            <div class="h-[1px] flex-grow bg-border-subtle"></div>
                                        </div>
                                        <div class="space-y-4">
                                            <div class="bg-surface-light p-6 rounded-xl flex items-center justify-between border-l-4 border-secondary transition-all hover:bg-white hover:shadow-md">
                                                <div>
                                                    <h3 class="font-headline-lg text-primary">Palm Heart Carpaccio</h3>
                                                    <p class="font-body-md text-on-surface-variant">Thinly sliced palm hearts, capers, citrus vinaigrette.</p>
                                                </div>
                                                <span class="font-headline-lg text-secondary ml-4">$22</span>
                                            </div>
                                            <div class="bg-surface-light p-6 rounded-xl flex items-center justify-between border-l-4 border-secondary transition-all hover:bg-white hover:shadow-md">
                                                <div>
                                                    <h3 class="font-headline-lg text-primary">Amazonian Superfood Salad</h3>
                                                    <p class="font-body-md text-on-surface-variant">Quinoa, kale, açai berries, and toasted cashews.</p>
                                                </div>
                                                <span class="font-headline-lg text-secondary ml-4">$19</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="lg:col-span-5" id="desserts">
                                        <div class="flex items-center gap-4 mb-stack-md">
                                            <h2 class="font-headline-xl text-primary text-right w-full">Desserts</h2>
                                            <div class="h-[1px] flex-grow bg-border-subtle"></div>
                                        </div>
                                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group">
                                            <div class="h-48 overflow-hidden">
                                                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A dark, indulgent Açai Noir Torte served on a light grey plate. The torte has multiple layers of dark chocolate ganache and deep purple açai berry mousse, topped with a single gold-dusted raspberry. The setting is a luxury dark-mode cafe with subtle warm lighting that highlights the glossy texture of the chocolate. Modern, premium dessert photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkUVgLZLXlvmPw9qR7Lx4GUPa8LQNVKMHf28lfLcO34c5qjqzMx2YsJblu36ww2Eqn681gwQ1bIEL6iPgHHgG9Pgu-IOpEcBbtdOElfdPkMF1hiq62R9BCY2T8dpU7SROA9Nb2GTxC0YNjao-yttaZ87XEhDQbz_fGAS8sjWJyJ6BQHqZLkUB55Wgct90KjBCAne25I562v_ZQnpRSgd87aWP-4bDNUlYYXDbZPnqTJsMcKZU3ky6I-NIBmpNPjxP0blvn0IwHkfRY" />
                                            </div>
                                            <div class="p-6">
                                                <div class="flex justify-between items-start mb-2">
                                                    <h3 class="font-headline-lg text-primary">Açai Noir Torte</h3>
                                                    <span class="font-headline-lg text-secondary">$16</span>
                                                </div>
                                                <p class="font-body-md text-on-surface-variant">70% dark chocolate torte with an açai berry core and Brazilian nut crust.</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </main>
                        <!-- Footer -->
                        <footer class="bg-primary dark:bg-deep-forest text-on-primary mt-stack-lg">
                            <div class="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
                                <div class="mb-stack-md md:mb-0">
                                    <div class="font-headline-xl text-headline-xl text-secondary-fixed mb-2">Amazonia</div>
                                    <p class="font-body-md opacity-80">© 2024 Amazonia Culinary Group. All rights reserved.</p>
                                </div>
                                <div class="flex flex-wrap justify-center gap-stack-md">
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Privacy Policy</a>
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Terms of Service</a>
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Sustainability</a>
                                    <a class="font-body-md text-on-primary-container hover:text-on-primary transition-opacity duration-200" href="#">Careers</a>
                                </div>
                            </div>
                        </footer>
                        <!-- BottomNavBar (Mobile Only) -->
                        <nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface shadow-[0_-4px_20px_0_rgba(25,72,95,0.08)] rounded-t-xl">
                            <a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
                                <span class="material-symbols-outlined">home</span>
                                <span class="font-label-md text-label-md">Home</span>
                            </a>
                            <a class="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" href="#">
                                <span class="material-symbols-outlined">restaurant_menu</span>
                                <span class="font-label-md text-label-md">Menu</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
                                <span class="material-symbols-outlined">event_available</span>
                                <span class="font-label-md text-label-md">Book</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
                                <span class="material-symbols-outlined">person</span>
                                <span class="font-label-md text-label-md">Profile</span>
                            </a>
                        </nav>
                        <script>
        // Simple scroll behavior for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                                header.classList.add('shadow-sm', 'py-2');
                            header.classList.remove('py-base');
            } else {
                                header.classList.remove('shadow-sm', 'py-2');
                            header.classList.add('py-base');
            }
        });

        // Smooth scroll for sub-nav
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
                                anchor.addEventListener('click', function (e) {
                                    e.preventDefault();
                                    const targetId = this.getAttribute('href');
                                    const targetElement = document.querySelector(targetId);
                                    const offset = 120; // Sticky nav height + padding
                                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                                    window.scrollTo({
                                        top: targetPosition,
                                        behavior: 'smooth'
                                    });
                                });
        });
                        </script>
                    </body></html>

                <!-- Amazonia | Your Order -->
                <!DOCTYPE html>

                <html class="scroll-smooth" lang="en"><head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Your Order | Amazonia Culinary Group</title>
                    <meta content="Review your selection of premium Amazonian-inspired dishes." name="description" />
                    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <script id="tailwind-config">
                        tailwind.config = {
                            darkMode: "class",
                        theme: {
                            extend: {
                            "colors": {
                            "primary-container": "#19485f",
                        "outline": "#71787d",
                        "on-primary": "#ffffff",
                        "inverse-on-surface": "#f3f0ef",
                        "error": "#ba1a1a",
                        "on-primary-fixed": "#001e2c",
                        "surface-container-high": "#ebe7e7",
                        "on-secondary-container": "#626837",
                        "on-tertiary": "#ffffff",
                        "border-subtle": "#E5E5E5",
                        "on-primary-container": "#8bb6d1",
                        "accent-pink": "#F8769C",
                        "primary": "#003145",
                        "surface-container-highest": "#e5e2e1",
                        "secondary-fixed-dim": "#c4cb91",
                        "surface-bright": "#fcf9f8",
                        "primary-fixed": "#c4e7ff",
                        "soft-lavender": "#FFDBED",
                        "primary-fixed-dim": "#a1cce8",
                        "secondary-container": "#e1e8ab",
                        "tertiary-fixed-dim": "#bdc2fd",
                        "inverse-primary": "#a1cce8",
                        "outline-variant": "#c1c7cd",
                        "inverse-surface": "#313030",
                        "secondary": "#5c6232",
                        "surface-container": "#f0edec",
                        "on-surface": "#1c1b1b",
                        "surface-container-lowest": "#ffffff",
                        "tertiary-fixed": "#dfe0ff",
                        "on-primary-fixed-variant": "#1d4b62",
                        "deep-forest": "#002B1B",
                        "on-tertiary-fixed-variant": "#3d4375",
                        "surface-container-low": "#f6f3f2",
                        "on-secondary-fixed-variant": "#444a1d",
                        "on-error": "#ffffff",
                        "on-error-container": "#93000a",
                        "background": "#fcf9f8",
                        "on-background": "#1c1b1b",
                        "on-tertiary-container": "#a7ace6",
                        "surface-tint": "#38637b",
                        "tertiary-container": "#3a3f71",
                        "surface-dim": "#dcd9d9",
                        "secondary-fixed": "#e1e8ab",
                        "tertiary": "#232859",
                        "on-surface-variant": "#41484c",
                        "error-container": "#ffdad6",
                        "on-secondary": "#ffffff",
                        "surface-variant": "#e5e2e1",
                        "surface-light": "#F8F8F8",
                        "surface": "#fcf9f8",
                        "muted-gold": "#C49871",
                        "on-tertiary-fixed": "#101647",
                        "on-secondary-fixed": "#191e00"
            },
                        "borderRadius": {
                            "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
            },
                        "spacing": {
                            "margin-mobile": "16px",
                        "container-max": "1200px",
                        "margin-desktop": "40px",
                        "stack-sm": "12px",
                        "stack-lg": "48px",
                        "gutter": "24px",
                        "stack-md": "24px",
                        "base": "8px"
            },
                        "fontFamily": {
                            "headline-lg": ["Poppins"],
                        "display-lg": ["Poppins"],
                        "body-md": ["Poppins"],
                        "body-lg": ["Poppins"],
                        "headline-xl": ["Poppins"],
                        "display-lg-mobile": ["Poppins"],
                        "label-md": ["Poppins"],
                        "caption": ["Poppins"]
            },
                        "fontSize": {
                            "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}]
            }
          },
        },
      }
                    </script>
                    <style>
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 4px;
        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                            background: transparent;
        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #E5E5E5;
                        border-radius: 10px;
        }
                        .drawer-blur-bg {
                            backdrop - filter: blur(8px);
                        background-color: rgba(0, 49, 69, 0.3);
        }
                        .material-symbols-outlined {
                            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
                        .active-scale:active {
                            transform: scale(0.95);
        }
                    </style>
                </head>
                    <body class="bg-background text-on-background font-body-md selection:bg-secondary-container">
                        <!-- Blurred Background Context (Simulating SCREEN_9) -->
                        <div class="fixed inset-0 z-0 overflow-hidden opacity-40 blur-md grayscale-[0.2]">
                            <div class="max-w-[1200px] mx-auto px-margin-desktop py-stack-lg">
                                <header class="flex justify-between items-center mb-stack-lg">
                                    <div class="font-display-lg text-display-lg text-primary">Amazonia</div>
                                    <div class="flex gap-gutter">
                                        <span class="font-label-md text-label-md">Menu</span>
                                        <span class="font-label-md text-label-md">Reservations</span>
                                    </div>
                                </header>
                                <div class="grid grid-cols-3 gap-gutter">
                                    <div class="h-80 bg-surface-container-high rounded-xl"></div>
                                    <div class="h-80 bg-surface-container-high rounded-xl"></div>
                                    <div class="h-80 bg-surface-container-high rounded-xl"></div>
                                    <div class="h-80 bg-surface-container-high rounded-xl"></div>
                                    <div class="h-80 bg-surface-container-high rounded-xl"></div>
                                    <div class="h-80 bg-surface-container-high rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Overlay / Backdrop -->
                        <div class="fixed inset-0 z-40 drawer-blur-bg transition-opacity duration-500 ease-in-out opacity-100"></div>
                        <!-- Right Side Shopping Bag Drawer -->
                        <aside class="fixed top-0 right-0 z-50 h-full w-full md:w-[480px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out transform translate-x-0">
                            <!-- Header -->
                            <div class="px-6 py-6 flex items-center justify-between border-b border-border-subtle shrink-0">
                                <div>
                                    <h2 class="font-headline-xl text-headline-xl text-primary">Your Order</h2>
                                    <p class="font-label-md text-label-md text-outline">3 Items Selected</p>
                                </div>
                                <button class="p-2 hover:bg-surface-container-low rounded-full transition-colors active-scale">
                                    <span class="material-symbols-outlined text-on-surface">close</span>
                                </button>
                            </div>
                            <!-- Scrollable Content -->
                            <div class="flex-grow overflow-y-auto custom-scrollbar px-6 py-4 space-y-stack-md">
                                <!-- Cart Items List -->
                                <div class="space-y-4">
                                    <!-- Item 1 -->
                                    <div class="flex gap-4 group">
                                        <div class="w-20 h-20 rounded-lg bg-surface-light overflow-hidden shrink-0">
                                            <img class="w-full h-full object-cover" data-alt="A top-down gourmet presentation of Tucupi Glazed Sea Bass, glistening with a golden-yellow Amazonian broth, garnished with fresh microgreens and delicate edible flowers. The fish sits on a dark ceramic plate, capturing a high-end culinary aesthetic with natural lighting and soft shadows, reflecting a premium cafe atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJduOijNMKEKwKzZf0GOvt-zr_iQY5hxM52tiy5fOHIGnc1ovmOttAQcV4KQbzJ5EzT8H0zjf-MqbtR5JHitYD_JDx6Rqwf4saXmkoQXQmfnkxlloK4FTZb5rw7qhCVoZhkIjgH6PVIkqnX9UZTndKCkHQrSC_bW5aUVlvTnBZYVc5ZGKns1t1lc-rjVdQRWxJuDJhum0bS4qu3Jxdc90KmGDHh8dbTuRUhnR0QC7HVQeJh61xy7uVBnp3kHqF9l8lHMMPu15qOKL7" />
                                        </div>
                                        <div class="flex-grow">
                                            <div class="flex justify-between items-start">
                                                <h3 class="font-headline-lg text-[18px] text-primary">Tucupi Glazed Sea Bass</h3>
                                                <span class="font-headline-lg text-[16px] text-secondary">$34.00</span>
                                            </div>
                                            <p class="font-caption text-caption text-outline italic mt-1">Extra Brazil Nut Gremolata</p>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center border border-border-subtle rounded-full px-2 py-1 bg-surface-bright">
                                                    <button class="p-1 hover:text-primary transition-colors active-scale">
                                                        <span class="material-symbols-outlined text-[18px]">remove</span>
                                                    </button>
                                                    <span class="px-3 font-label-md text-label-md">1</span>
                                                    <button class="p-1 hover:text-primary transition-colors active-scale">
                                                        <span class="material-symbols-outlined text-[18px]">add</span>
                                                    </button>
                                                </div>
                                                <button class="text-caption text-error hover:underline transition-all">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="border-border-subtle opacity-50" />
                                    <!-- Item 2 -->
                                    <div class="flex gap-4 group">
                                        <div class="w-20 h-20 rounded-lg bg-surface-light overflow-hidden shrink-0">
                                            <img class="w-full h-full object-cover" data-alt="A decadent slice of Açai Noir Torte, featuring layers of deep purple acai mousse and dark cacao sponge, topped with a dusting of gold leaf and fresh forest berries. The dessert is presented on a minimalist white porcelain plate in a moody, elegant restaurant setting with warm ambient lighting and soft-focus backgrounds." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAs84eeKPCtvl_dch6EtptLhRBQ26bVTnKiq6sqneFWvBB89f6ckRMuLhoJduNVM5WnEHdxVxzu7V2Q0kwDlNYBetDUDdzhWwTaJ_OIvlGo0VaPAxFxaxyWg_3lj4nJeJt0JIYtumucXKITvoeUq4oBCBafVIXx0Kb4sZLnWRgouRx9H_ZWD5nEkxvPWemU3YY5JcQSn2acDbOtJWGWkCfivmYG-uRl5FxfxezP2yzuKvXrn4bN0IqbvcD2ePlVh3gdBHBgTlzLKYF" />
                                        </div>
                                        <div class="flex-grow">
                                            <div class="flex justify-between items-start">
                                                <h3 class="font-headline-lg text-[18px] text-primary">Açai Noir Torte</h3>
                                                <span class="font-headline-lg text-[16px] text-secondary">$18.00</span>
                                            </div>
                                            <p class="font-caption text-caption text-outline italic mt-1">No Cilantro garnish</p>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center border border-border-subtle rounded-full px-2 py-1 bg-surface-bright">
                                                    <button class="p-1 hover:text-primary transition-colors active-scale">
                                                        <span class="material-symbols-outlined text-[18px]">remove</span>
                                                    </button>
                                                    <span class="px-3 font-label-md text-label-md">1</span>
                                                    <button class="p-1 hover:text-primary transition-colors active-scale">
                                                        <span class="material-symbols-outlined text-[18px]">add</span>
                                                    </button>
                                                </div>
                                                <button class="text-caption text-error hover:underline transition-all">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="border-border-subtle opacity-50" />
                                    <!-- Item 3 -->
                                    <div class="flex gap-4 group">
                                        <div class="w-20 h-20 rounded-lg bg-surface-light overflow-hidden shrink-0">
                                            <img class="w-full h-full object-cover" data-alt="A vibrant, refreshing Amazonian Heart of Palm Salad with sliced avocado and citrus dressing. The greens are lush and emerald-colored, served in a carved wooden bowl. Sunlight filters through tropical leaves in the background, creating a bright, serene, and organic atmosphere for a premium dining experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_IG2foLeE9HddLD01_V_FeWRMbH1QXPSyOMH4Ex3nFPcHU5Spyvm6JnM6aZdSpIMDpz2cf2LEabAMNwKXIW_ZhFh-J5YgERmVISFLKpEW0hkd5J9o20TRcedAAYTGvvQU49LAj-0xjXmBv4nPfav_eVa1uqrwHrv5cuWHjye2LesMduqYa1qiLi8xm-XLQT7lkgpCp2s2c7IzvcL0OeTtf8TQje_h1mWXdBOBcLsqgmtHWE1dA_lKmM0LTYXpp3dre6AIYY_ynJHs" />
                                        </div>
                                        <div class="flex-grow">
                                            <div class="flex justify-between items-start">
                                                <h3 class="font-headline-lg text-[18px] text-primary">Palm Heart Salad</h3>
                                                <span class="font-headline-lg text-[16px] text-secondary">$22.00</span>
                                            </div>
                                            <p class="font-caption text-caption text-outline italic mt-1">Standard preparation</p>
                                            <div class="flex items-center justify-between mt-3">
                                                <div class="flex items-center border border-border-subtle rounded-full px-2 py-1 bg-surface-bright">
                                                    <button class="p-1 hover:text-primary transition-colors active-scale">
                                                        <span class="material-symbols-outlined text-[18px]">remove</span>
                                                    </button>
                                                    <span class="px-3 font-label-md text-label-md">1</span>
                                                    <button class="p-1 hover:text-primary transition-colors active-scale">
                                                        <span class="material-symbols-outlined text-[18px]">add</span>
                                                    </button>
                                                </div>
                                                <button class="text-caption text-error hover:underline transition-all">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Frequently Added Section -->
                                <div class="pt-stack-md">
                                    <h4 class="font-label-md text-label-md text-primary mb-4 uppercase tracking-widest">Frequently Added</h4>
                                    <div class="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                                        <!-- Upsell 1 -->
                                        <div class="min-w-[140px] bg-surface-container-low p-3 rounded-xl flex flex-col">
                                            <div class="w-full aspect-square rounded-lg bg-white mb-2 overflow-hidden">
                                                <img class="w-full h-full object-cover" data-alt="A sophisticated botanical cocktail in a crystal coupe glass, infused with passionfruit and garnished with a sprig of fresh mint and a dried hibiscus petal. The drink has a soft amber glow under dim, warm mood lighting, suggesting a refined, tropical lounge environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMVjVLWQOaVB7bKE4jqTf1jzRIP2FjUiXJ9Lob6rreYyP7n-chmyxequgdqKGJOeQMI1dSPxm6vSm0CfsKsDvdTfcb5YVZR6KdyCnl92pMPhD_G2O3PEatGbf5EzQ5x2kBSYYesr0CKRGX8ID21F9-x5pohWDPNIUtIUSHS58fwqjN0vbVjZ6ri2vktvXgvzaGzb1Q8lSn1ZR59W_iODGJAmzOBLJlC0uyvJXNaQb2d2e2GAmaIdMPF5rRYtJAsjKmANxftZh8Fs_w" />
                                            </div>
                                            <span class="font-label-md text-[12px] text-on-surface truncate">Guarana Gin Fizz</span>
                                            <div class="flex justify-between items-center mt-auto pt-2">
                                                <span class="text-secondary font-bold text-[14px]">$14</span>
                                                <button class="w-7 h-7 flex items-center justify-center bg-primary text-white rounded-full active-scale">
                                                    <span class="material-symbols-outlined text-[16px]">add</span>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- Upsell 2 -->
                                        <div class="min-w-[140px] bg-surface-container-low p-3 rounded-xl flex flex-col">
                                            <div class="w-full aspect-square rounded-lg bg-white mb-2 overflow-hidden">
                                                <img class="w-full h-full object-cover" data-alt="A small side dish of golden-roasted cassava fries, perfectly crispy on the outside, served with a small bowl of spicy lime aioli. The setting is bright and organic, using light wood textures and a minimalist plate to emphasize a clean, premium cafe aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApthFXPxyuaZVSN0-g7RzPLWE5LKQGlqmLi5Hs6B39L1YODkYHWHNONPbd_c_NfQlPn12dhCB5kK4bNipSSbqUw6dQziUmgSYKtsw9Qj_loDuJRtRzXEFwLSOoMVgZBvGIihRwMkact7HhH8-UjVw_SWR8lmHPqGyzQOMj3_2koze1szkwiHq6dQnGm5PKjaz4107IPHDm41IQ7nOtMxbqs78QzjLY6mjNO-m1h_sY4rsxxH52hBLxwFTwxmVik-tYZF9A9WBikWH7" />
                                            </div>
                                            <span class="font-label-md text-[12px] text-on-surface truncate">Cassava Crisp</span>
                                            <div class="flex justify-between items-center mt-auto pt-2">
                                                <span class="text-secondary font-bold text-[14px]">$9</span>
                                                <button class="w-7 h-7 flex items-center justify-center bg-primary text-white rounded-full active-scale">
                                                    <span class="material-symbols-outlined text-[16px]">add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Custom Options / Toggles -->
                                <div class="space-y-4 pt-4 border-t border-border-subtle">
                                    <label class="flex items-center justify-between cursor-pointer group">
                                        <div class="flex flex-col">
                                            <span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Make it a Gift</span>
                                            <span class="font-caption text-caption text-outline">Include a handwritten note &amp; ribbon</span>
                                        </div>
                                        <div class="relative inline-flex items-center">
                                            <input class="sr-only peer" type="checkbox" />
                                            <div class="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                        </div>
                                    </label>
                                    <label class="flex items-center justify-between cursor-pointer group">
                                        <div class="flex flex-col">
                                            <span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Eco-friendly Packaging</span>
                                            <span class="font-caption text-caption text-outline">100% compostable materials</span>
                                        </div>
                                        <div class="relative inline-flex items-center">
                                            <input checked="" class="sr-only peer" type="checkbox" />
                                            <div class="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <!-- Footer / Summary -->
                            <div class="px-6 py-6 bg-surface-light border-t border-border-subtle space-y-4 shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                                <div class="space-y-2">
                                    <div class="flex justify-between font-body-md text-on-surface-variant">
                                        <span>Subtotal</span>
                                        <span>$74.00</span>
                                    </div>
                                    <div class="flex justify-between font-body-md text-on-surface-variant">
                                        <span>Estimated Delivery</span>
                                        <span>$4.50</span>
                                    </div>
                                    <div class="flex justify-between items-center bg-secondary-container/30 px-3 py-2 rounded-lg mt-2">
                                        <div class="flex items-center gap-2">
                                            <span class="material-symbols-outlined text-secondary text-[20px]" style="font-variation-settings: 'FILL' 1;">stars</span>
                                            <span class="font-label-md text-label-md text-secondary">Loyalty Points Earned</span>
                                        </div>
                                        <span class="font-bold text-secondary">+74 pts</span>
                                    </div>
                                    <div class="flex justify-between font-headline-xl text-headline-xl text-primary pt-2">
                                        <span>Total</span>
                                        <span>$78.50</span>
                                    </div>
                                </div>
                                <!-- Primary CTA -->
                                <button class="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-lg text-[18px] flex items-center justify-center gap-3 hover:bg-primary-container transition-all active-scale shadow-lg shadow-primary/10">
                                    Proceed to Checkout
                                    <span class="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p class="text-center font-caption text-caption text-outline">Secure payment processed by Amazonia Culinary Group</p>
                            </div>
                        </aside>
                        <!-- Global Nav Shell (Suppressed as per task focusing on the Drawer, but keeping structure for layout integrity if needed) -->
                        <nav class="hidden md:flex fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md items-center justify-between px-margin-desktop py-4 pointer-events-none opacity-0 transition-opacity duration-300">
                            <div class="text-headline-lg font-display-lg font-semibold text-primary">Amazonia</div>
                            <div class="flex gap-gutter items-center">
                                <span class="font-label-md text-primary-container">Menu</span>
                                <span class="font-label-md">Reservations</span>
                                <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                                    <span class="material-symbols-outlined">person</span>
                                </div>
                            </div>
                        </nav>
                        <script>
        // Simple Interaction logic for Quantity Selectors (UI Only)
        document.querySelectorAll('button').forEach(btn => {
                                btn.addEventListener('click', (e) => {
                                    const icon = btn.querySelector('.material-symbols-outlined');
                                    if (icon && (icon.innerText === 'add' || icon.innerText === 'remove')) {
                                        const container = btn.closest('div');
                                        const span = container.querySelector('span');
                                        let val = parseInt(span.innerText);
                                        if (icon.innerText === 'add') val++;
                                        if (icon.innerText === 'remove' && val > 1) val--;
                                        span.innerText = val;
                                    }
                                });
        });

        // Toggle state logic for switches
        document.querySelectorAll('input[type="checkbox"]').forEach(toggle => {
                                toggle.addEventListener('change', function () {
                                    const label = this.closest('label').querySelector('.font-body-md');
                                    if (this.checked) {
                                        label.classList.add('text-primary');
                                    } else {
                                        label.classList.remove('text-primary');
                                    }
                                });
        });
                        </script>
                    </body></html>

                <!-- Design System -->
                <!DOCTYPE html>

                <html class="scroll-smooth" lang="en"><head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Reservation Confirmed | Amazonia</title>
                    <link href="https://fonts.googleapis.com" rel="preconnect" />
                    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                    <script id="tailwind-config">
                        tailwind.config = {
                            darkMode: "class",
                        theme: {
                            extend: {
                            "colors": {
                            "surface-light": "#F8F8F8",
                        "primary-container": "#19485f",
                        "on-tertiary-fixed": "#101647",
                        "on-secondary": "#ffffff",
                        "inverse-surface": "#313030",
                        "inverse-on-surface": "#f3f0ef",
                        "on-surface": "#1c1b1b",
                        "surface-container": "#f0edec",
                        "inverse-primary": "#a1cce8",
                        "primary-fixed-dim": "#a1cce8",
                        "outline-variant": "#c1c7cd",
                        "on-primary": "#ffffff",
                        "tertiary-fixed-dim": "#bdc2fd",
                        "tertiary-container": "#3a3f71",
                        "on-tertiary": "#ffffff",
                        "secondary-fixed": "#e1e8ab",
                        "surface-tint": "#38637b",
                        "surface": "#fcf9f8",
                        "surface-dim": "#dcd9d9",
                        "surface-container-high": "#ebe7e7",
                        "surface-bright": "#fcf9f8",
                        "tertiary-fixed": "#dfe0ff",
                        "on-primary-container": "#8bb6d1",
                        "tertiary": "#232859",
                        "muted-gold": "#C49871",
                        "secondary-fixed-dim": "#c4cb91",
                        "secondary-container": "#e1e8ab",
                        "on-tertiary-fixed-variant": "#3d4375",
                        "soft-lavender": "#FFDBED",
                        "on-tertiary-container": "#a7ace6",
                        "primary-fixed": "#c4e7ff",
                        "on-primary-fixed": "#001e2c",
                        "on-secondary-fixed-variant": "#444a1d",
                        "outline": "#71787d",
                        "on-primary-fixed-variant": "#1d4b62",
                        "secondary": "#5c6232",
                        "surface-container-low": "#f6f3f2",
                        "error": "#ba1a1a",
                        "on-secondary-fixed": "#191e00",
                        "on-error-container": "#93000a",
                        "surface-container-highest": "#e5e2e1",
                        "on-surface-variant": "#41484c",
                        "surface-container-lowest": "#ffffff",
                        "primary": "#003145",
                        "on-secondary-container": "#626837",
                        "accent-pink": "#F8769C",
                        "error-container": "#ffdad6",
                        "on-error": "#ffffff",
                        "background": "#fcf9f8",
                        "deep-forest": "#002B1B",
                        "on-background": "#1c1b1b",
                        "border-subtle": "#E5E5E5",
                        "surface-variant": "#e5e2e1"
            },
                        "borderRadius": {
                            "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
            },
                        "spacing": {
                            "gutter": "24px",
                        "stack-sm": "12px",
                        "margin-desktop": "40px",
                        "stack-lg": "48px",
                        "stack-md": "24px",
                        "base": "8px",
                        "margin-mobile": "16px",
                        "container-max": "1200px"
            },
                        "fontFamily": {
                            "display-lg": ["Poppins"],
                        "body-lg": ["Poppins"],
                        "body-md": ["Poppins"],
                        "label-md": ["Poppins"],
                        "headline-lg": ["Poppins"],
                        "display-lg-mobile": ["Poppins"],
                        "caption": ["Poppins"],
                        "headline-xl": ["Poppins"]
            },
                        "fontSize": {
                            "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                        "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}]
            }
          },
        },
      }
                    </script>
                    <style>
                        .material-symbols-outlined {
                            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
                        .bg-pattern {
                            background - color: #003145;
                        background-image: radial-gradient(circle at 2px 2px, rgba(217, 224, 164, 0.05) 1px, transparent 0);
                        background-size: 40px 40px;
        }
                    </style>
                </head>
                    <body class="bg-background text-on-background font-body-md overflow-x-hidden">
                        <!-- TopAppBar -->
                        <header class="w-full top-0 sticky z-50 bg-surface dark:bg-background shadow-sm dark:shadow-none">
                            <div class="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4">
                                <div class="text-headline-lg font-display-lg font-semibold text-primary dark:text-primary-fixed">Amazonia</div>
                                <nav class="hidden md:flex items-center gap-gutter">
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md" href="#">Home</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md" href="#">Menu</a>
                                    <a class="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-label-md text-label-md" href="#">Reservations</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md" href="#">About</a>
                                </nav>
                                <div class="flex items-center gap-4">
                                    <button class="material-symbols-outlined text-primary dark:text-primary-fixed text-[28px] hover:opacity-80 transition-opacity">account_circle</button>
                                    <button class="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Book a Table</button>
                                </div>
                            </div>
                        </header>
                        <main class="min-h-screen pb-stack-lg">
                            <!-- Hero Section -->
                            <section class="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-pattern">
                                <div class="absolute inset-0 z-0">
                                    <div class="w-full h-full object-cover opacity-40 bg-cover bg-center" data-alt="A moody, high-end restaurant interior at night with lush tropical greenery, soft golden ambient lighting, and elegant dark wood furniture. The atmosphere is sophisticated and cinematic, featuring deep teal and emerald tones with subtle highlights of warm gold. Smoke from a distant kitchen adds a slight atmospheric haze to the upscale, modern jungle-themed decor." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmucZ5yVONGweVjOncDrMCE2F3CuZZX4HI3-EUIf99hqtqdIEeUIju_mgdSqrIQXhCGQHhUrqji8afZSMiiwD92aDLNlbBXd_wKhjyutyFMqc5T0NiyQPF6qXkdnLFVHMzZQRHmekn3wGNfMYAn6QMxzH6vDedDu-xL-DcYJDyDL9QH2jz5Tr-6eWklg6wpN-H9dsui04z7stOvqHzaD7EqmS3-h_s4IYGYkbM_i5P4IzVU-dA5E9OfeKP691UMSg0A_OwoIBJsiIM')"></div>
                                    <div class="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-background"></div>
                                </div>
                                <div class="relative z-10 text-center px-margin-mobile flex flex-col items-center">
                                    <div class="w-16 h-16 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center mb-6 animate-bounce shadow-lg">
                                        <span class="material-symbols-outlined text-[32px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                    </div>
                                    <h1 class="text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg max-w-2xl">Your Table in the Wild Awaits.</h1>
                                    <p class="text-on-primary/80 font-body-lg text-body-lg mt-4 max-w-xl">We’ve secured your spot in our urban oasis. A confirmation email has been sent to your inbox.</p>
                                </div>
                            </section>
                            <!-- Confirmation Card -->
                            <section class="max-w-[800px] mx-auto px-margin-mobile -mt-24 relative z-20">
                                <div class="bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(25,72,95,0.12)] p-6 md:p-10 border border-border-subtle">
                                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border-subtle pb-8 mb-8 gap-4">
                                        <div>
                                            <span class="text-primary font-label-md text-label-md uppercase tracking-widest opacity-60">Reservation ID</span>
                                            <h2 class="text-primary font-headline-xl text-headline-xl">AMZ-8829-X</h2>
                                        </div>
                                        <div class="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-md text-label-md">
                                            Status: Confirmed
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined">calendar_today</span>
                                            </div>
                                            <div>
                                                <p class="text-on-surface-variant font-label-md text-label-md">Date</p>
                                                <p class="text-primary font-headline-lg text-headline-lg">Oct 25, 2024</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined">schedule</span>
                                            </div>
                                            <div>
                                                <p class="text-on-surface-variant font-label-md text-label-md">Time</p>
                                                <p class="text-primary font-headline-lg text-headline-lg">19:30</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-primary">
                                                <span class="material-symbols-outlined">groups</span>
                                            </div>
                                            <div>
                                                <p class="text-on-surface-variant font-label-md text-label-md">Guests</p>
                                                <p class="text-primary font-headline-lg text-headline-lg">4 People</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col sm:flex-row gap-4">
                                        <button class="flex-1 bg-primary text-on-primary py-4 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                                            View Menu <span class="material-symbols-outlined">restaurant_menu</span>
                                        </button>
                                        <button class="flex-1 border-2 border-primary text-primary py-4 rounded-full font-label-md text-label-md hover:bg-primary/5 active:scale-95 transition-all flex items-center justify-center gap-2">
                                            Add to Calendar <span class="material-symbols-outlined">event</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <!-- Preparation Section -->
                            <section class="max-w-[800px] mx-auto px-margin-mobile mt-stack-lg">
                                <h3 class="text-primary font-headline-xl text-headline-xl text-center mb-8">Preparing for your visit</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                                    <div class="bg-surface-light p-6 rounded-xl border-l-4 border-secondary-fixed">
                                        <div class="flex items-start gap-4">
                                            <span class="material-symbols-outlined text-secondary text-[24px]">styler</span>
                                            <div>
                                                <h4 class="text-primary font-headline-lg text-headline-lg mb-2">Dress Code</h4>
                                                <p class="text-on-surface-variant font-body-md text-body-md">We suggest Smart Casual attire to complement our botanical atmosphere. Effortless elegance is always welcomed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-surface-light p-6 rounded-xl border-l-4 border-secondary-fixed">
                                        <div class="flex items-start gap-4">
                                            <span class="material-symbols-outlined text-secondary text-[24px]">timer</span>
                                            <div>
                                                <h4 class="text-primary font-headline-lg text-headline-lg mb-2">Arrival Time</h4>
                                                <p class="text-on-surface-variant font-body-md text-body-md">We hold tables for 15 minutes. If you are running late, please let us know so we can keep your spot in the canopy.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-surface-light p-6 rounded-xl border-l-4 border-secondary-fixed">
                                        <div class="flex items-start gap-4">
                                            <span class="material-symbols-outlined text-secondary text-[24px]">cast_warning</span>
                                            <div>
                                                <h4 class="text-primary font-headline-lg text-headline-lg mb-2">Valet Service</h4>
                                                <p class="text-on-surface-variant font-body-md text-body-md">Complimentary valet parking is available at the main entrance. Follow the signs for Amazonia Preferred Guest parking.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-surface-light p-6 rounded-xl border-l-4 border-secondary-fixed">
                                        <div class="flex items-start gap-4">
                                            <span class="material-symbols-outlined text-secondary text-[24px]">info</span>
                                            <div>
                                                <h4 class="text-primary font-headline-lg text-headline-lg mb-2">Dietary Notes</h4>
                                                <p class="text-on-surface-variant font-body-md text-body-md">Our culinary team is prepared for your specific requests. Feel free to update any allergies via the app before arriving.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-stack-md text-center">
                                    <p class="text-on-surface-variant font-body-md text-body-md italic mb-6">Need to make a change? You can modify or cancel up to 24 hours in advance.</p>
                                    <a class="text-primary font-label-md text-label-md underline hover:opacity-80 transition-opacity" href="#">Manage Reservation</a>
                                </div>
                            </section>
                        </main>
                        <!-- Footer -->
                        <footer class="w-full bg-primary dark:bg-primary-container mt-stack-lg">
                            <div class="w-full py-stack-lg px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-base">
                                <div class="flex flex-col items-center md:items-start gap-2">
                                    <div class="text-headline-lg font-display-lg text-on-primary">Amazonia</div>
                                    <p class="text-on-primary/60 font-body-md text-body-md max-w-[300px] text-center md:text-left">Bringing the heart of the jungle to your culinary journey.</p>
                                </div>
                                <div class="flex flex-wrap justify-center gap-gutter my-8 md:my-0">
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md hover:underline" href="#">Privacy Policy</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md hover:underline" href="#">Terms of Service</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md hover:underline" href="#">Contact Us</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md hover:underline" href="#">Careers</a>
                                </div>
                                <div class="text-on-primary/60 font-label-md text-label-md text-center md:text-right">
                                    © 2024 Amazonia Culinary Group. All rights reserved.
                                </div>
                            </div>
                        </footer>
                        <!-- BottomNavBar (Mobile Only) -->
                        <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-surface-container-lowest dark:bg-inverse-surface shadow-[0_-4px_12px_rgba(25,72,95,0.08)] md:hidden rounded-t-xl">
                            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high transition-colors px-4 py-1 rounded-full" href="#">
                                <span class="material-symbols-outlined">home</span>
                                <span class="font-label-md text-label-md mt-1">Home</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high transition-colors px-4 py-1 rounded-full" href="#">
                                <span class="material-symbols-outlined">restaurant_menu</span>
                                <span class="font-label-md text-label-md mt-1">Menu</span>
                            </a>
                            <a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 transition-transform" href="#">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">event_available</span>
                                <span class="font-label-md text-label-md mt-1">Bookings</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high transition-colors px-4 py-1 rounded-full" href="#">
                                <span class="material-symbols-outlined">person</span>
                                <span class="font-label-md text-label-md mt-1">Profile</span>
                            </a>
                        </nav>
                        <script>
        // Micro-interactions and simple state handling
        document.querySelectorAll('button, a').forEach(el => {
                                el.addEventListener('mousedown', () => {
                                    el.style.transform = 'scale(0.95)';
                                });
            el.addEventListener('mouseup', () => {
                                el.style.transform = 'scale(1)';
            });
            el.addEventListener('mouseleave', () => {
                                el.style.transform = 'scale(1)';
            });
        });

        // Simple scroll appearance for top bar
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                                header.classList.add('shadow-md');
            } else {
                                header.classList.remove('shadow-md');
            }
        });
                        </script>
                    </body></html>

                <!-- Amazonia | Booking Confirmed -->
                <!DOCTYPE html>

                <html class="scroll-smooth" lang="en"><head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>User Profile | Amazonia Culinary Group</title>
                    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <!-- Theme Configuration -->
                    <script id="tailwind-config">
                        tailwind.config = {
                            darkMode: "class",
                        theme: {
                            extend: {
                            "colors": {
                            "on-tertiary-fixed": "#101647",
                        "primary-fixed-dim": "#a1cce8",
                        "on-secondary-fixed-variant": "#444a1d",
                        "muted-gold": "#C49871",
                        "error": "#ba1a1a",
                        "surface-tint": "#38637b",
                        "surface-container-low": "#f6f3f2",
                        "on-tertiary": "#ffffff",
                        "secondary-fixed": "#e1e8ab",
                        "on-tertiary-container": "#a7ace6",
                        "surface-bright": "#fcf9f8",
                        "outline-variant": "#c1c7cd",
                        "background": "#fcf9f8",
                        "surface": "#fcf9f8",
                        "accent-pink": "#F8769C",
                        "primary-container": "#19485f",
                        "on-primary": "#ffffff",
                        "soft-lavender": "#FFDBED",
                        "inverse-primary": "#a1cce8",
                        "on-surface-variant": "#41484c",
                        "on-error-container": "#93000a",
                        "on-surface": "#1c1b1b",
                        "tertiary-fixed-dim": "#bdc2fd",
                        "surface-container-high": "#ebe7e7",
                        "border-subtle": "#E5E5E5",
                        "on-background": "#1c1b1b",
                        "tertiary-fixed": "#dfe0ff",
                        "secondary-container": "#e1e8ab",
                        "on-primary-fixed-variant": "#1d4b62",
                        "on-primary-container": "#8bb6d1",
                        "secondary": "#5c6232",
                        "tertiary": "#232859",
                        "outline": "#71787d",
                        "on-secondary-fixed": "#191e00",
                        "surface-container": "#f0edec",
                        "on-error": "#ffffff",
                        "surface-light": "#F8F8F8",
                        "secondary-fixed-dim": "#c4cb91",
                        "on-secondary": "#ffffff",
                        "error-container": "#ffdad6",
                        "on-secondary-container": "#626837",
                        "inverse-on-surface": "#f3f0ef",
                        "deep-forest": "#002B1B",
                        "inverse-surface": "#313030",
                        "surface-dim": "#dcd9d9",
                        "primary-fixed": "#c4e7ff",
                        "primary": "#003145",
                        "surface-variant": "#e5e2e1",
                        "on-tertiary-fixed-variant": "#3d4375",
                        "tertiary-container": "#3a3f71",
                        "surface-container-highest": "#e5e2e1",
                        "surface-container-lowest": "#ffffff",
                        "on-primary-fixed": "#001e2c"
            },
                        "borderRadius": {
                            "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
            },
                        "spacing": {
                            "stack-lg": "48px",
                        "gutter": "24px",
                        "container-max": "1200px",
                        "margin-mobile": "16px",
                        "base": "8px",
                        "stack-sm": "12px",
                        "stack-md": "24px",
                        "margin-desktop": "40px"
            },
                        "fontFamily": {
                            "display-lg": ["Poppins"],
                        "label-md": ["Poppins"],
                        "body-lg": ["Poppins"],
                        "headline-xl": ["Poppins"],
                        "caption": ["Poppins"],
                        "headline-lg": ["Poppins"],
                        "display-lg-mobile": ["Poppins"],
                        "body-md": ["Poppins"]
            },
                        "fontSize": {
                            "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                        "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
                    </script>
                    <style>
                        .material-symbols-outlined {
                            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
                        .active-nav-dot::after {
                            content: '';
                        position: absolute;
                        bottom: -8px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 4px;
                        height: 4px;
                        background-color: currentColor;
                        border-radius: 50%;
        }
                        .profile-backdrop {
                            background: linear-gradient(rgba(0, 49, 69, 0.7), rgba(0, 49, 69, 0.7)), url('placeholder');
        }
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 4px;
        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #19485f;
                        border-radius: 10px;
        }
                    </style>
                </head>
                    <body class="bg-background text-on-background font-body-md min-h-screen pb-20 md:pb-0">
                        <!-- TopAppBar -->
                        <header class="w-full top-0 sticky z-50 bg-surface shadow-sm transition-all duration-300">
                            <div class="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4">
                                <div class="text-headline-lg font-display-lg font-semibold text-primary">Amazonia</div>
                                <nav class="hidden md:flex items-center gap-base">
                                    <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md px-4 py-2" href="#">Home</a>
                                    <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md px-4 py-2" href="#">Menu</a>
                                    <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md px-4 py-2" href="#">Reservations</a>
                                    <a class="text-on-surface-variant hover:text-primary transition-colors font-body-md px-4 py-2" href="#">About</a>
                                </nav>
                                <div class="flex items-center gap-4">
                                    <button class="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all">
                                        Book a Table
                                    </button>
                                    <div class="text-primary dark:text-primary-fixed border-b-2 border-primary pb-1 cursor-pointer">
                                        <span class="material-symbols-outlined align-middle" data-icon="account_circle">account_circle</span>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-md">
                            <!-- User Overview -->
                            <section class="relative overflow-hidden rounded-xl mb-stack-lg shadow-sm border border-border-subtle bg-surface-container-lowest">
                                <div class="h-32 md:h-48 w-full profile-backdrop bg-cover bg-center" data-alt="A cinematic, wide-angle shot of a lush tropical dining environment with deep green palm leaves and soft, warm ambient lighting. The atmosphere is sophisticated and premium, using a color palette of deep veridian and subtle gold highlights. The visual style is high-end architectural photography, capturing the essence of a serene Amazonian escape."></div>
                                <div class="px-6 pb-6 md:px-10 md:pb-10 -mt-12 md:-mt-16 flex flex-col md:flex-row items-end gap-6">
                                    <div class="relative">
                                        <div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-surface overflow-hidden shadow-lg bg-surface-variant">
                                            <img class="w-full h-full object-cover" data-alt="A professional, high-end studio portrait of a sophisticated person with a warm and approachable expression. The lighting is soft and flattering, with a clean and minimalist background that emphasizes the person's refined and modern aesthetic. The overall mood is elegant and consistent with a premium lifestyle brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo951oDgXqW3KVDs13dMXhFosFHzAsxZth2hE3NCx-gqIWAMz8msaTtwqaS3n2RXwjUgDUubPgQVpTCpq1G_ZIt1kMlNl06TU0r1pndaBnsywOFbQuC_H__EDkjk3BbqaKqhsr09kL6k-l4uUSo6zqN97xRpqb6JCdYsvLUY7EPeprS9kR4C4lQuctwPRn-Rv8vB9MV5FjgjiiYM2q80xvyJp5rTxcXHSJ4jnbIOh8gVEs9MUDssUvec4TMFds96vriE9q2cbDpv04" />
                                        </div>
                                    </div>
                                    <div class="flex-1 text-center md:text-left mb-2">
                                        <h1 class="font-headline-xl text-headline-xl text-primary">Alex Montgomery</h1>
                                        <div class="flex items-center justify-center md:justify-start gap-2 mt-1">
                                            <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-caption font-label-md">Wild Explorer | Level 2</span>
                                            <span class="text-on-surface-variant text-caption flex items-center gap-1">
                                                <span class="material-symbols-outlined text-[16px]" data-icon="verified">verified</span>
                                                Member since 2022
                                            </span>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-auto">
                                        <button class="w-full md:w-auto border-2 border-primary text-primary px-8 py-3 rounded-full font-label-md hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <!-- Main Content Grid -->
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-stack-md items-start">
                                <!-- Column Left: Reservations & Visits -->
                                <div class="lg:col-span-2 space-y-stack-md">
                                    <!-- Active Reservations -->
                                    <div class="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-border-subtle">
                                        <div class="flex justify-between items-center mb-6">
                                            <h2 class="font-headline-lg text-headline-lg text-primary flex items-center gap-2">
                                                <span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
                                                Active Reservations
                                            </h2>
                                        </div>
                                        <div class="space-y-4">
                                            <!-- Reservation Card 1 -->
                                            <div class="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-surface-light border border-border-subtle hover:shadow-md transition-all group">
                                                <div class="flex items-center gap-4 mb-4 md:mb-0">
                                                    <div class="w-16 h-16 rounded-lg bg-primary-container flex flex-col items-center justify-center text-on-primary-container">
                                                        <span class="text-caption font-bold uppercase">Oct</span>
                                                        <span class="text-headline-lg">24</span>
                                                    </div>
                                                    <div>
                                                        <h3 class="font-headline-md text-primary font-semibold">Dinner at Amazonia</h3>
                                                        <div class="flex items-center gap-3 text-on-surface-variant text-caption mt-1">
                                                            <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span> 19:30</span>
                                                            <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]" data-icon="group">group</span> 4 Guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex gap-2">
                                                    <button class="flex-1 md:flex-none px-4 py-2 rounded-lg bg-surface text-primary border border-primary font-label-md hover:bg-primary-fixed-dim transition-colors">Manage</button>
                                                    <button class="flex-1 md:flex-none px-4 py-2 rounded-lg text-error hover:bg-error-container transition-colors font-label-md">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Past Visits -->
                                    <div class="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-border-subtle">
                                        <h2 class="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-2">
                                            <span class="material-symbols-outlined" data-icon="history">history</span>
                                            Past Visits
                                        </h2>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <!-- Past Visit Card 1 -->
                                            <div class="p-4 rounded-lg bg-surface border border-border-subtle flex items-start gap-4">
                                                <div class="w-20 h-20 rounded shadow-sm overflow-hidden flex-shrink-0">
                                                    <img class="w-full h-full object-cover" data-alt="A close-up, artistic shot of a vibrant Amazonian appetizer, featuring exotic fruits and fresh herbs. The plate is artisanal ceramic, set against a dark, textured wood surface. The lighting is moody and focused, highlighting the rich textures and colors of the food. The style is premium food photography found in high-end culinary magazines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ohTw-7sGdqidvPhpMHdwhrbjSRRs2dE4sLtPdOIoyjX64rUUcvReaNBaKmXSmpQIWoj64vE6IZQvd5FjbvPtUpJhNvw_WXmzYHlJHDaj_edz9vTvIq_ug_QQwN0y8n1_-avNa41qdGHCNIHBuavP44Qo08BOpXHd6LUT7elaVs-2ov_u1Wsa0wrfsJUPaMgm55pq13LNtJXTvTrht5BfY5ODL2fgbtlD7dyVmEDlK1slkIe1tGUnHqVqJbwPiMSMoKPfUxpB_gd9" />
                                                </div>
                                                <div class="flex-1">
                                                    <p class="text-caption text-on-surface-variant mb-1">September 12, 2024</p>
                                                    <h4 class="font-label-md text-primary truncate">The Explorer's Menu</h4>
                                                    <div class="flex gap-1 mt-2 mb-3">
                                                        <span class="material-symbols-outlined text-muted-gold text-[16px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
                                                        <span class="material-symbols-outlined text-muted-gold text-[16px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
                                                        <span class="material-symbols-outlined text-muted-gold text-[16px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
                                                        <span class="material-symbols-outlined text-muted-gold text-[16px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
                                                        <span class="material-symbols-outlined text-muted-gold text-[16px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
                                                    </div>
                                                    <button class="text-primary text-caption font-semibold flex items-center gap-1 hover:underline">
                                                        Rebook This Experience
                                                        <span class="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- Past Visit Card 2 -->
                                            <div class="p-4 rounded-lg bg-surface border border-border-subtle flex items-start gap-4">
                                                <div class="w-20 h-20 rounded shadow-sm overflow-hidden flex-shrink-0">
                                                    <img class="w-full h-full object-cover" data-alt="A beautifully presented signature cocktail with tropical garnishes, served in a crystal glass. The drink has a vibrant color and is surrounded by a gentle mist or botanical elements. The background is a blurred, high-end bar setting with warm, golden lighting. The photography style is modern, elegant, and atmospheric." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv9jOJ7gK_ijoszSKGNB37-y-VDivW0KIC0Ex2iB-28StnAauCHJBQrB798mJqg22b_vZ_9i51yig3CqwOUs1WV48-C_cYI7o42ZAcCCbT6u_F5r0Sn8jYBzGWuZ3UOIKx0Xd1UY_lml-p4hllzsIdbGm_CClFpHdJSQxLaFSyHl3ULJK9I2ffP1u6KC7StT-nh6VHMi0sDmXAjwUzE39RTdNVTQJATZtGapy5ZIzIQS3CTHZ0hGZNxTp2VwI1-AjAgRLAPaIOF6Xr" />
                                                </div>
                                                <div class="flex-1">
                                                    <p class="text-caption text-on-surface-variant mb-1">August 05, 2024</p>
                                                    <h4 class="font-label-md text-primary truncate">Rainforest Cocktail Evening</h4>
                                                    <p class="text-caption text-outline mt-2">No rating provided</p>
                                                    <button class="text-primary text-caption font-semibold mt-1 hover:underline">Rate Experience</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Column Right: Rewards & Preferences -->
                                <div class="space-y-stack-md">
                                    <!-- Loyalty/Rewards Card -->
                                    <div class="bg-primary text-on-primary p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden">
                                        <!-- Subtle pattern overlay -->
                                        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
                                        <div class="relative z-10">
                                            <div class="flex justify-between items-start mb-6">
                                                <div>
                                                    <h2 class="font-label-md uppercase tracking-widest opacity-80 mb-1">Amazonia Points</h2>
                                                    <p class="text-display-lg-mobile font-bold">1,850</p>
                                                </div>
                                                <span class="material-symbols-outlined text-[40px] text-secondary" data-icon="eco">eco</span>
                                            </div>
                                            <div class="mb-4">
                                                <div class="flex justify-between text-caption mb-2">
                                                    <span>Next Reward Progress</span>
                                                    <span>150 pts left</span>
                                                </div>
                                                <div class="w-full h-2 bg-on-primary/20 rounded-full overflow-hidden">
                                                    <div class="bg-secondary h-full rounded-full" style="width: 85%;"></div>
                                                </div>
                                            </div>
                                            <p class="text-caption italic opacity-90 leading-snug">
                                                "150 points until your next Chef's Special complimentary tasting"
                                            </p>
                                            <button class="w-full mt-6 bg-secondary text-on-secondary-fixed px-4 py-2 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                                                View Rewards Catalog
                                            </button>
                                        </div>
                                    </div>
                                    <!-- Dining Preferences -->
                                    <div class="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-border-subtle">
                                        <h2 class="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-2">
                                            <span class="material-symbols-outlined" data-icon="restaurant">restaurant</span>
                                            Dining Preferences
                                        </h2>
                                        <!-- Dietary Preferences -->
                                        <div class="mb-8">
                                            <h3 class="text-caption font-bold text-outline uppercase tracking-wider mb-4">Dietary Needs</h3>
                                            <div class="flex flex-wrap gap-2">
                                                <button class="px-4 py-2 rounded-full border border-border-subtle bg-surface text-on-surface-variant font-label-md hover:border-primary transition-all active:scale-95 flex items-center gap-2">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="check_box_outline_blank">check_box_outline_blank</span> Vegan
                                                </button>
                                                <button class="px-4 py-2 rounded-full border border-primary bg-primary-fixed text-on-primary-fixed-variant font-label-md transition-all active:scale-95 flex items-center gap-2">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="check_box">check_box</span> Gluten-Free
                                                </button>
                                                <button class="px-4 py-2 rounded-full border border-border-subtle bg-surface text-on-surface-variant font-label-md hover:border-primary transition-all active:scale-95 flex items-center gap-2">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="check_box_outline_blank">check_box_outline_blank</span> Nut Allergy
                                                </button>
                                            </div>
                                        </div>
                                        <!-- Seating Preferences -->
                                        <div>
                                            <h3 class="text-caption font-bold text-outline uppercase tracking-wider mb-4">Preferred Seating</h3>
                                            <div class="space-y-3">
                                                <label class="flex items-center justify-between p-3 rounded-lg border border-border-subtle cursor-pointer hover:bg-surface-light transition-colors group">
                                                    <span class="flex items-center gap-3">
                                                        <span class="material-symbols-outlined text-primary" data-icon="window">window</span>
                                                        Window Side
                                                    </span>
                                                    <input class="text-primary focus:ring-primary h-4 w-4" name="seating" type="radio" />
                                                </label>
                                                <label class="flex items-center justify-between p-3 rounded-lg border border-primary bg-primary-fixed-dim/10 cursor-pointer transition-colors group">
                                                    <span class="flex items-center gap-3">
                                                        <span class="material-symbols-outlined text-primary" data-icon="chair">chair</span>
                                                        Private Booth
                                                    </span>
                                                    <input checked="" class="text-primary focus:ring-primary h-4 w-4" name="seating" type="radio" />
                                                </label>
                                                <label class="flex items-center justify-between p-3 rounded-lg border border-border-subtle cursor-pointer hover:bg-surface-light transition-colors group">
                                                    <span class="flex items-center gap-3">
                                                        <span class="material-symbols-outlined text-primary" data-icon="deck">deck</span>
                                                        Outdoor Terrace
                                                    </span>
                                                    <input class="text-primary focus:ring-primary h-4 w-4" name="seating" type="radio" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <!-- Footer -->
                        <footer class="w-full mt-stack-lg bg-primary dark:bg-primary-container">
                            <div class="w-full py-stack-lg px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-base">
                                <div class="text-headline-lg font-display-lg text-on-primary">Amazonia</div>
                                <div class="flex flex-wrap justify-center gap-6 my-6 md:my-0">
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-body-md hover:underline" href="#">Privacy Policy</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-body-md hover:underline" href="#">Terms of Service</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-body-md hover:underline" href="#">Contact Us</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-body-md hover:underline" href="#">Careers</a>
                                </div>
                                <div class="text-on-primary/60 font-label-md text-center md:text-right">
                                    © 2024 Amazonia Culinary Group. All rights reserved.
                                </div>
                            </div>
                        </footer>
                        <!-- BottomNavBar (Mobile Only) -->
                        <nav class="fixed bottom-0 w-full z-50 rounded-t-xl md:hidden bg-surface-container-lowest shadow-[0_-4px_12px_rgba(25,72,95,0.08)] flex justify-around items-center px-4 py-2 pb-safe">
                            <a class="flex flex-col items-center justify-center text-on-surface-variant py-1" href="#">
                                <span class="material-symbols-outlined" data-icon="home">home</span>
                                <span class="text-label-md mt-1">Home</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant py-1" href="#">
                                <span class="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
                                <span class="text-label-md mt-1">Menu</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant py-1" href="#">
                                <span class="material-symbols-outlined" data-icon="event_available">event_available</span>
                                <span class="text-label-md mt-1">Bookings</span>
                            </a>
                            <a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1" href="#">
                                <span class="material-symbols-outlined" data-icon="person" style="font-variation-settings: 'FILL' 1;">person</span>
                                <span class="text-label-md mt-1">Profile</span>
                            </a>
                        </nav>
                        <script>
        // Micro-interactions and effects
        document.addEventListener('DOMContentLoaded', () => {
            // Scroll shadow effect for header
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                                header.classList.add('shadow-md', 'py-2');
                            header.classList.remove('shadow-sm', 'py-4');
                } else {
                                header.classList.remove('shadow-md', 'py-2');
                            header.classList.add('shadow-sm', 'py-4');
                }
            });

                            // Toggle logic for dietary buttons (simulation)
                            const dietaryButtons = document.querySelectorAll('[data-icon="check_box_outline_blank"], [data-icon="check_box"]');
            dietaryButtons.forEach(btn => {
                const parent = btn.closest('button');
                parent.addEventListener('click', () => {
                    const icon = parent.querySelector('.material-symbols-outlined');
                            const isActive = icon.getAttribute('data-icon') === 'check_box';

                            if (isActive) {
                                icon.setAttribute('data-icon', 'check_box_outline_blank');
                            icon.textContent = 'check_box_outline_blank';
                            parent.classList.remove('border-primary', 'bg-primary-fixed', 'text-on-primary-fixed-variant');
                            parent.classList.add('border-border-subtle', 'bg-surface', 'text-on-surface-variant');
                    } else {
                                icon.setAttribute('data-icon', 'check_box');
                            icon.textContent = 'check_box';
                            parent.classList.add('border-primary', 'bg-primary-fixed', 'text-on-primary-fixed-variant');
                            parent.classList.remove('border-border-subtle', 'bg-surface', 'text-on-surface-variant');
                    }
                });
            });
        });
                        </script>
                    </body></html>

                <!-- Amazonia | My Profile -->
                <!DOCTYPE html>

                <html class="scroll-smooth" lang="en"><head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Checkout | Amazonia Culinary Group</title>
                    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <!-- Shared Style & Theme Configuration -->
                    <script id="tailwind-config">
                        tailwind.config = {
                            darkMode: "class",
                        theme: {
                            extend: {
                            "colors": {
                            "on-primary-container": "#8bb6d1",
                        "tertiary-fixed": "#dfe0ff",
                        "muted-gold": "#C49871",
                        "on-surface": "#1c1b1b",
                        "inverse-on-surface": "#f3f0ef",
                        "error": "#ba1a1a",
                        "on-primary": "#ffffff",
                        "surface-variant": "#e5e2e1",
                        "secondary-container": "#e1e8ab",
                        "border-subtle": "#E5E5E5",
                        "surface-light": "#F8F8F8",
                        "on-secondary-container": "#626837",
                        "surface-container": "#f0edec",
                        "secondary-fixed-dim": "#c4cb91",
                        "surface": "#fcf9f8",
                        "secondary": "#5c6232",
                        "primary-container": "#19485f",
                        "surface-container-low": "#f6f3f2",
                        "on-tertiary-fixed": "#101647",
                        "on-error-container": "#93000a",
                        "primary-fixed-dim": "#a1cce8",
                        "tertiary-fixed-dim": "#bdc2fd",
                        "error-container": "#ffdad6",
                        "primary-fixed": "#c4e7ff",
                        "on-background": "#1c1b1b",
                        "accent-pink": "#F8769C",
                        "on-primary-fixed": "#001e2c",
                        "outline-variant": "#c1c7cd",
                        "tertiary": "#232859",
                        "on-tertiary-container": "#a7ace6",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-fixed-variant": "#3d4375",
                        "surface-bright": "#fcf9f8",
                        "deep-forest": "#002B1B",
                        "inverse-primary": "#a1cce8",
                        "on-secondary-fixed": "#191e00",
                        "surface-container-lowest": "#ffffff",
                        "surface-container-high": "#ebe7e7",
                        "secondary-fixed": "#e1e8ab",
                        "on-secondary": "#ffffff",
                        "inverse-surface": "#313030",
                        "outline": "#71787d",
                        "on-error": "#ffffff",
                        "surface-tint": "#38637b",
                        "tertiary-container": "#3a3f71",
                        "surface-dim": "#dcd9d9",
                        "soft-lavender": "#FFDBED",
                        "on-surface-variant": "#41484c",
                        "surface-container-highest": "#e5e2e1",
                        "primary": "#003145",
                        "background": "#fcf9f8",
                        "on-primary-fixed-variant": "#1d4b62",
                        "on-secondary-fixed-variant": "#444a1d"
            },
                        "borderRadius": {
                            "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
            },
                        "spacing": {
                            "stack-sm": "12px",
                        "stack-md": "24px",
                        "base": "8px",
                        "stack-lg": "48px",
                        "container-max": "1200px",
                        "margin-desktop": "40px",
                        "gutter": "24px",
                        "margin-mobile": "16px"
            },
                        "fontFamily": {
                            "caption": ["Poppins"],
                        "body-md": ["Poppins"],
                        "label-md": ["Poppins"],
                        "headline-lg": ["Poppins"],
                        "body-lg": ["Poppins"],
                        "display-lg": ["Poppins"],
                        "headline-xl": ["Poppins"],
                        "display-lg-mobile": ["Poppins"]
            },
                        "fontSize": {
                            "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}]
            }
          },
        },
      }
                    </script>
                    <style>
                        body {font - family: 'Poppins', sans-serif; background-color: #fcf9f8; }
                        .material-symbols-outlined {font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                        .checkout-card {border: 1px solid #E5E5E5; box-shadow: 0 4px 12px rgba(25, 72, 95, 0.04); }
                        .active-tab {border - color: #19485F; color: #19485F; background-color: #e1e8ab; }
                        input:focus {outline: none; border-color: #19485F; ring: 2px; ring-color: #19485f33; }
                        .sticky-summary {top: 120px; }
                    </style>
                </head>
                    <body class="text-on-surface">
                        <!-- TopAppBar -->
                        <header class="w-full top-0 sticky z-50 bg-surface dark:bg-background shadow-sm dark:shadow-none">
                            <div class="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4">
                                <div class="text-headline-lg font-display-lg font-semibold text-primary dark:text-primary-fixed">Amazonia</div>
                                <nav class="hidden md:flex items-center gap-stack-md">
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#">Home</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#">Menu</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#">Reservations</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#">About</a>
                                </nav>
                                <div class="flex items-center gap-4">
                                    <button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:opacity-80 active:scale-95 transition-all">Book a Table</button>
                                    <span class="material-symbols-outlined text-primary dark:text-primary-fixed text-2xl cursor-pointer">account_circle</span>
                                </div>
                            </div>
                        </header>
                        <main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-screen">
                            <div class="mb-stack-md">
                                <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Checkout</h1>
                                <p class="font-body-md text-body-md text-on-surface-variant">Review your Amazonian feast and finalize your order.</p>
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                                <!-- Left Column: Checkout Details -->
                                <div class="lg:col-span-7 space-y-stack-md">
                                    <!-- Delivery/Pickup Details -->
                                    <section class="bg-surface-container-lowest rounded-xl p-stack-md checkout-card">
                                        <div class="flex items-center gap-base mb-stack-md">
                                            <span class="material-symbols-outlined text-primary">local_shipping</span>
                                            <h2 class="font-headline-xl text-headline-xl text-primary">Delivery Details</h2>
                                        </div>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                                            <div class="col-span-full">
                                                <label class="block font-label-md text-label-md mb-2">Delivery Address</label>
                                                <input class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md" placeholder="123 Jungle Canopy Way, Apt 4B" type="text" />
                                            </div>
                                            <div>
                                                <label class="block font-label-md text-label-md mb-2">Contact Number</label>
                                                <input class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md" placeholder="+1 (555) 000-0000" type="tel" />
                                            </div>
                                            <div>
                                                <label class="block font-label-md text-label-md mb-2">Estimated Arrival</label>
                                                <select class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md bg-white">
                                                    <option>As soon as possible (45-60 min)</option>
                                                    <option>Schedule for later</option>
                                                </select>
                                            </div>
                                        </div>
                                    </section>
                                    <!-- Payment Method -->
                                    <section class="bg-surface-container-lowest rounded-xl p-stack-md checkout-card">
                                        <div class="flex items-center gap-base mb-stack-md">
                                            <span class="material-symbols-outlined text-primary">payments</span>
                                            <h2 class="font-headline-xl text-headline-xl text-primary">Payment Method</h2>
                                        </div>
                                        <div class="flex gap-stack-sm mb-stack-md">
                                            <button class="flex-1 border-2 active-tab rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-all">
                                                <span class="material-symbols-outlined">credit_card</span>
                                                <span class="font-label-md">Card</span>
                                            </button>
                                            <button class="flex-1 border-2 border-border-subtle hover:border-primary rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-all">
                                                <span class="material-symbols-outlined">account_balance_wallet</span>
                                                <span class="font-label-md">Apple Pay</span>
                                            </button>
                                        </div>
                                        <div class="space-y-stack-sm">
                                            <div>
                                                <label class="block font-label-md text-label-md mb-2">Cardholder Name</label>
                                                <input class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md" placeholder="Alex Amazon" type="text" />
                                            </div>
                                            <div>
                                                <label class="block font-label-md text-label-md mb-2">Card Number</label>
                                                <div class="relative">
                                                    <input class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md pl-12" placeholder="**** **** **** 1234" type="text" />
                                                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-stack-sm">
                                                <div>
                                                    <label class="block font-label-md text-label-md mb-2">Expiry Date</label>
                                                    <input class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md" placeholder="MM/YY" type="text" />
                                                </div>
                                                <div>
                                                    <label class="block font-label-md text-label-md mb-2">CVV</label>
                                                    <input class="w-full px-4 py-3 rounded-lg border border-border-subtle font-body-md text-body-md" placeholder="***" type="password" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <!-- Loyalty Points -->
                                    <section class="bg-surface-container-lowest rounded-xl p-stack-md checkout-card">
                                        <div class="flex items-center justify-between mb-4">
                                            <div class="flex items-center gap-base">
                                                <span class="material-symbols-outlined text-muted-gold" style="font-variation-settings: 'FILL' 1;">stars</span>
                                                <h2 class="font-headline-xl text-headline-xl text-primary">Loyalty Rewards</h2>
                                            </div>
                                            <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-caption font-label-md">1,240 pts available</span>
                                        </div>
                                        <p class="font-body-md text-body-md text-on-surface-variant mb-stack-sm">Apply 500 points to save $5.00 on this order.</p>
                                        <button class="w-full py-3 border-2 border-dashed border-muted-gold text-muted-gold rounded-xl font-label-md hover:bg-surface-light transition-colors">Apply Points</button>
                                    </section>
                                </div>
                                <!-- Right Column: Order Summary -->
                                <div class="lg:col-span-5">
                                    <aside class="sticky-summary bg-surface-container-lowest rounded-xl p-stack-md checkout-card lg:sticky">
                                        <h2 class="font-headline-xl text-headline-xl text-primary mb-stack-md">Order Summary</h2>
                                        <!-- Item List -->
                                        <div class="space-y-stack-sm mb-stack-md border-b border-border-subtle pb-stack-md">
                                            <div class="flex gap-4">
                                                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img class="w-full h-full object-cover" data-alt="A premium close-up of Tucupi Glazed Sea Bass, served on a dark ceramic plate with vibrant yellow sauce and edible Amazonian flowers. High-end food photography with dramatic lighting and a lush tropical fine-dining aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO46gYS19fpZrzg9sG27vED34PdQNSHpjvUSAY7oNiClA12qObY4zdoNdI853w6u17Ri2fK6x8H6Z7RLF6sqbk0Lbp5qbR6uGACZolIMxE_OUolyiXnpMUF35bM9l-sPalBgpE8kz-TgT4YQhc2k6ILubDTpDvs1Vxv5y2BANHnLQGmsZdZqQw8UdGX0Z7e1mMSVq5DxQxW2b5eSrwv06zcwJb82HEXBsJZ1gPikM_Fc3KoN0bJguPQWtpODkvPJupk6MD-WQGDxXy" />
                                                </div>
                                                <div class="flex-1">
                                                    <p class="font-label-md text-primary">Tucupi Glazed Sea Bass</p>
                                                    <p class="text-caption text-on-surface-variant">Qty: 1</p>
                                                    <p class="font-body-md text-secondary mt-1">$38.00</p>
                                                </div>
                                            </div>
                                            <div class="flex gap-4">
                                                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img class="w-full h-full object-cover" data-alt="A sophisticated Açai Noir Torte dessert with deep purple layers and dark chocolate ganache, garnished with exotic berries. The lighting is moody and elegant, emphasizing the rich textures and premium presentation of a gourmet Amazonian restaurant." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh7pdze5Du6fx9aRy1tFHWIuBYy_bWYbZMANISBycgMid47WKyKt11sOo_eVAbZIaSL-Z27hRV1OMUCV77HOEOwEZv-In88S5nnLH_cQJ0apxcDVPi726YRuL7fvXCIaQJkyh-5I0RtbKqG488TznVoPvo9ErF4tumezWGBUuFPU7wVAQT3z9Tvlv7sV7_ANcOem8gUPA6xQh3XyhbCnFon8NTTVLR_RcMvalJudGtzNUiTETkFCq9NgCRjJo9hEJp65gjuFzyi-1T" />
                                                </div>
                                                <div class="flex-1">
                                                    <p class="font-label-md text-primary">Açai Noir Torte</p>
                                                    <p class="text-caption text-on-surface-variant">Qty: 1</p>
                                                    <p class="font-body-md text-secondary mt-1">$14.00</p>
                                                </div>
                                            </div>
                                            <div class="flex gap-4">
                                                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img class="w-full h-full object-cover" data-alt="A fresh and vibrant Palm Heart Salad featuring thin ribbons of heart of palm, zesty citrus dressing, and microgreens. The image has a clean, airy, light-mode feel with soft shadows and high-fidelity culinary detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEVZHXjfzdjfIWKW4PDL7ScATh1LUizyTRaQb3Pa5XaqNvlf-rF1-zC6v1lbCqpU3SA3jIRppYatgXvPGFo2klZNwQsu7o6fRiTvNNC27L2zMMAscsPTn2WbhTL2A95HjdDQSpjF13fJ8gVe2N4MdLgpOxogFFJtoTTkKyE3lc1328fQHmH31X09_b4WAAsYvRfmLsH8vXUNuvpRrQkN-aWLGQsiOMfzq9U4wILsVJwjEp58xLnxetJablUvuhvzLqzxjH_FVN2ncu" />
                                                </div>
                                                <div class="flex-1">
                                                    <p class="font-label-md text-primary">Palm Heart Salad</p>
                                                    <p class="text-caption text-on-surface-variant">Qty: 1</p>
                                                    <p class="font-body-md text-secondary mt-1">$16.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Breakdown -->
                                        <div class="space-y-3 mb-stack-md">
                                            <div class="flex justify-between font-body-md text-body-md">
                                                <span class="text-on-surface-variant">Subtotal</span>
                                                <span>$68.00</span>
                                            </div>
                                            <div class="flex justify-between font-body-md text-body-md">
                                                <span class="text-on-surface-variant">Delivery Fee</span>
                                                <span>$4.50</span>
                                            </div>
                                            <div class="flex justify-between font-body-md text-body-md">
                                                <span class="text-on-surface-variant">Taxes (8%)</span>
                                                <span>$5.44</span>
                                            </div>
                                            <div class="flex justify-between font-headline-lg text-headline-lg text-primary pt-2">
                                                <span>Total</span>
                                                <span>$77.94</span>
                                            </div>
                                        </div>
                                        <!-- Loyalty Earned -->
                                        <div class="bg-surface-light p-3 rounded-lg flex items-center gap-3 mb-stack-md">
                                            <span class="material-symbols-outlined text-muted-gold">add_task</span>
                                            <p class="text-caption font-label-md text-muted-gold">You'll earn 78 points with this order!</p>
                                        </div>
                                        <!-- CTA -->
                                        <button class="w-full bg-primary text-on-primary py-4 rounded-full font-headline-lg text-headline-lg-mobile hover:opacity-90 active:scale-95 transition-all shadow-lg">
                                            Place Order
                                        </button>
                                        <p class="text-center text-caption text-outline mt-4 flex items-center justify-center gap-1">
                                            <span class="material-symbols-outlined text-[14px]">verified_user</span>
                                            Secure Encrypted Checkout
                                        </p>
                                    </aside>
                                </div>
                            </div>
                        </main>
                        <!-- Footer -->
                        <footer class="w-full mt-stack-lg bg-primary dark:bg-primary-container">
                            <div class="w-full py-stack-lg px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-base">
                                <div class="text-headline-lg font-display-lg text-on-primary">Amazonia</div>
                                <div class="flex flex-wrap justify-center gap-stack-md my-stack-md md:my-0">
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Privacy Policy</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Terms of Service</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Contact Us</a>
                                    <a class="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md" href="#">Careers</a>
                                </div>
                                <p class="text-on-primary/60 font-caption text-caption">© 2024 Amazonia Culinary Group. All rights reserved.</p>
                            </div>
                        </footer>
                        <!-- BottomNavBar (Mobile Only) -->
                        <nav class="fixed bottom-0 w-full z-50 rounded-t-xl md:hidden bg-surface-container-lowest dark:bg-inverse-surface shadow-[0_-4px_12px_rgba(25,72,95,0.08)] flex justify-around items-center px-4 py-2 pb-safe">
                            <div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant group cursor-pointer">
                                <span class="material-symbols-outlined">home</span>
                                <span class="font-label-md text-label-md">Home</span>
                            </div>
                            <div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant group cursor-pointer">
                                <span class="material-symbols-outlined">restaurant_menu</span>
                                <span class="font-label-md text-label-md">Menu</span>
                            </div>
                            <div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant group cursor-pointer">
                                <span class="material-symbols-outlined">event_available</span>
                                <span class="font-label-md text-label-md">Bookings</span>
                            </div>
                            <div class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
                                <span class="font-label-md text-label-md">Profile</span>
                            </div>
                        </nav>
                        <script>
        // Simple Interaction logic
        document.querySelectorAll('input, select').forEach(el => {
                                el.addEventListener('focus', () => {
                                    el.parentElement.classList.add('scale-[1.01]');
                                    el.parentElement.style.transition = 'transform 0.2s ease';
                                });
            el.addEventListener('blur', () => {
                                el.parentElement.classList.remove('scale-[1.01]');
            });
        });

                            // Toggle Payment Tabs
                            const payTabs = document.querySelectorAll('button.border-2');
        payTabs.forEach(tab => {
                                tab.addEventListener('click', () => {
                                    payTabs.forEach(t => {
                                        t.classList.remove('active-tab');
                                        t.classList.add('border-border-subtle');
                                    });
                                    tab.classList.add('active-tab');
                                    tab.classList.remove('border-border-subtle');
                                });
        });
                        </script>
                    </body></html>

                <!-- Amazonia | Checkout -->
                <!DOCTYPE html>

                <html class="light" lang="en"><head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Order Tracking | Amazonia</title>
                    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                    <script id="tailwind-config">
                        tailwind.config = {
                            darkMode: "class",
                        theme: {
                            extend: {
                            "colors": {
                            "tertiary-fixed-dim": "#bdc2fd",
                        "tertiary-container": "#3a3f71",
                        "on-primary": "#ffffff",
                        "inverse-primary": "#a1cce8",
                        "outline-variant": "#c1c7cd",
                        "primary-fixed-dim": "#a1cce8",
                        "surface-container": "#f0edec",
                        "on-surface": "#1c1b1b",
                        "inverse-on-surface": "#f3f0ef",
                        "primary-container": "#19485f",
                        "on-tertiary-fixed": "#101647",
                        "surface-light": "#F8F8F8",
                        "on-secondary": "#ffffff",
                        "inverse-surface": "#313030",
                        "tertiary-fixed": "#dfe0ff",
                        "on-primary-container": "#8bb6d1",
                        "tertiary": "#232859",
                        "muted-gold": "#C49871",
                        "surface-bright": "#fcf9f8",
                        "surface-dim": "#dcd9d9",
                        "surface-container-high": "#ebe7e7",
                        "surface-tint": "#38637b",
                        "surface": "#fcf9f8",
                        "secondary-fixed": "#e1e8ab",
                        "on-tertiary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-secondary-fixed": "#191e00",
                        "on-error-container": "#93000a",
                        "on-primary-fixed-variant": "#1d4b62",
                        "surface-container-low": "#f6f3f2",
                        "secondary": "#5c6232",
                        "on-secondary-fixed-variant": "#444a1d",
                        "outline": "#71787d",
                        "primary-fixed": "#c4e7ff",
                        "on-primary-fixed": "#001e2c",
                        "on-tertiary-container": "#a7ace6",
                        "secondary-fixed-dim": "#c4cb91",
                        "secondary-container": "#e1e8ab",
                        "on-tertiary-fixed-variant": "#3d4375",
                        "soft-lavender": "#FFDBED",
                        "border-subtle": "#E5E5E5",
                        "on-background": "#1c1b1b",
                        "surface-variant": "#e5e2e1",
                        "deep-forest": "#002B1B",
                        "background": "#fcf9f8",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "primary": "#003145",
                        "on-secondary-container": "#626837",
                        "accent-pink": "#F8769C",
                        "surface-container-highest": "#e5e2e1",
                        "on-surface-variant": "#41484c",
                        "surface-container-lowest": "#ffffff"
            },
                        "borderRadius": {
                            "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
            },
                        "spacing": {
                            "stack-lg": "48px",
                        "margin-desktop": "40px",
                        "margin-mobile": "16px",
                        "container-max": "1200px",
                        "stack-md": "24px",
                        "base": "8px",
                        "gutter": "24px",
                        "stack-sm": "12px"
            },
                        "fontFamily": {
                            "body-lg": ["Poppins"],
                        "display-lg": ["Poppins"],
                        "headline-lg": ["Poppins"],
                        "display-lg-mobile": ["Poppins"],
                        "caption": ["Poppins"],
                        "headline-xl": ["Poppins"],
                        "body-md": ["Poppins"],
                        "label-md": ["Poppins"]
            },
                        "fontSize": {
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "headline-lg": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "display-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                        "headline-xl": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}]
            }
          },
        },
      }
                    </script>
                    <style>
                        .material-symbols-outlined {
                            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
                        .nav-shadow {
                            box - shadow: 0 -4px 12px rgba(25, 72, 95, 0.08);
        }
                        .timeline-step::before {
                            content: '';
                        position: absolute;
                        left: 19px;
                        top: 40px;
                        bottom: -8px;
                        width: 2px;
                        background: #E5E5E5;
                        z-index: 0;
        }
                        .timeline-step:last-child::before {
                            display: none;
        }
                        .step-active::before {
                            background: linear-gradient(to bottom, #003145, #E5E5E5);
        }
                        .step-completed::before {
                            background: #003145;
        }
                    </style>
                </head>
                    <body class="bg-background text-on-surface font-body-md selection:bg-primary-fixed-dim">
                        <!-- Top Navigation (Shell Implementation) -->
                        <header class="w-full top-0 sticky z-50 bg-surface dark:bg-background shadow-sm dark:shadow-none">
                            <div class="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4">
                                <h1 class="text-headline-lg font-display-lg font-semibold text-primary dark:text-primary-fixed">Amazonia</h1>
                                <nav class="hidden md:flex gap-base">
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md px-4 py-2" href="#">Home</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md px-4 py-2" href="#">Menu</a>
                                    <a class="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-label-md text-label-md px-4 py-2" href="#">Bookings</a>
                                    <a class="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-md text-label-md px-4 py-2" href="#">About</a>
                                </nav>
                                <div class="flex items-center gap-4">
                                    <button class="material-symbols-outlined text-primary dark:text-primary-fixed p-2 hover:opacity-80 transition-opacity active:scale-95" data-icon="account_circle">account_circle</button>
                                </div>
                            </div>
                        </header>
                        <main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-stack-md pb-32">
                            <!-- Success Hero -->
                            <section class="mb-stack-lg">
                                <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-border-subtle flex flex-col md:flex-row">
                                    <div class="p-8 md:w-1/2 flex flex-col justify-center">
                                        <div class="flex items-center gap-2 mb-4">
                                            <span class="material-symbols-outlined text-secondary" data-icon="check_circle" data-weight="fill" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                            <p class="text-label-md font-label-md text-secondary uppercase tracking-widest">Order Confirmed</p>
                                        </div>
                                        <h2 class="font-headline-xl text-headline-xl text-primary mb-2 md:text-display-lg md:font-display-lg">Your Amazonian Feast is on its Way</h2>
                                        <p class="text-on-surface-variant mb-6">Order ID: <span class="font-bold text-on-surface">#AMZ-882194</span></p>
                                        <div class="flex flex-wrap gap-4">
                                            <button class="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">Support</button>
                                            <button class="border-2 border-primary text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary/5 transition-all">Download Receipt</button>
                                        </div>
                                    </div>
                                    <div class="md:w-1/2 h-64 md:h-auto min-h-[300px]">
                                        <img class="w-full h-full object-cover" data-alt="A professional culinary photograph of a Tucupi Glazed Sea Bass, beautifully plated with vibrant edible flowers and exotic vegetables in a high-end Amazonian restaurant setting. The lighting is soft and golden, highlighting the moist texture of the fish and the deep green botanical background. The image has a premium, serene atmosphere with rich azure and veridian color tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV4AsFmQZS8FiY-YbzF8IqNWNK6r3rNh7bykBa-yVsl5hAxzJsl-LN2Dx-iT4ulkXKEBAqAOnA5pqYC5txwVfT-LIglBH-7XquRA9l-AlBFhq06DWtkQiPcw-MNHxGuQa52_eYWKfwJct1Gt0L1OpqkEckZ7IaGDoIG1tw8_WPUm7WKZjGXtx_VI3g69nnBhUdFU8rfSi0gZBBj2n_7WTQOLiZdfB57wRVzKX9JJmVgRlIFXUggXcMiO8nztUDV_sKv_YNuHlUseQ" />
                                    </div>
                                </div>
                            </section>
                            <!-- Dynamic Tracking Row -->
                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                                <!-- Tracking & Status -->
                                <div class="lg:col-span-4 space-y-gutter">
                                    <!-- Estimated Arrival -->
                                    <div class="bg-primary-container text-on-primary-container p-6 rounded-xl shadow-sm relative overflow-hidden">
                                        <div class="absolute top-0 right-0 p-4 opacity-10">
                                            <span class="material-symbols-outlined text-[80px]" data-icon="schedule">schedule</span>
                                        </div>
                                        <p class="text-label-md font-label-md opacity-80 uppercase mb-1">Estimated Arrival</p>
                                        <div class="flex items-baseline gap-2">
                                            <h3 class="font-headline-xl text-[48px]" id="timer">17:42</h3>
                                            <span class="text-label-md font-label-md">MINS</span>
                                        </div>
                                        <p class="text-caption mt-2 text-on-primary-container/80">Arrival at approximately 8:45 PM</p>
                                    </div>
                                    <!-- Order Status Timeline -->
                                    <div class="bg-surface-container-lowest p-8 rounded-xl border border-border-subtle">
                                        <h4 class="font-headline-lg text-headline-lg text-primary mb-8">Order Status</h4>
                                        <div class="space-y-12">
                                            <!-- Step 1 -->
                                            <div class="timeline-step step-completed relative flex items-start gap-6">
                                                <div class="z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                                                    <span class="material-symbols-outlined" data-icon="eco">eco</span>
                                                </div>
                                                <div>
                                                    <p class="font-headline-lg text-body-md font-semibold text-primary">Order Received</p>
                                                    <p class="text-caption text-on-surface-variant">Confirmed at 8:05 PM</p>
                                                </div>
                                            </div>
                                            <!-- Step 2 -->
                                            <div class="timeline-step step-completed relative flex items-start gap-6">
                                                <div class="z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                                                    <span class="material-symbols-outlined" data-icon="skillet">skillet</span>
                                                </div>
                                                <div>
                                                    <p class="font-headline-lg text-body-md font-semibold text-primary">Preparing in our Kitchen</p>
                                                    <p class="text-caption text-on-surface-variant">Chef Sofia is crafting your dish</p>
                                                </div>
                                            </div>
                                            <!-- Step 3 -->
                                            <div class="timeline-step step-active relative flex items-start gap-6">
                                                <div class="z-10 w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container ring-4 ring-secondary-container/20">
                                                    <span class="material-symbols-outlined" data-icon="delivery_dining">delivery_dining</span>
                                                </div>
                                                <div>
                                                    <p class="font-headline-lg text-body-md font-semibold text-secondary">Out for Delivery</p>
                                                    <p class="text-caption text-on-surface-variant">Courier is 2.4km away</p>
                                                </div>
                                            </div>
                                            <!-- Step 4 -->
                                            <div class="timeline-step relative flex items-start gap-6">
                                                <div class="z-10 w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant/40">
                                                    <span class="material-symbols-outlined" data-icon="restaurant">restaurant</span>
                                                </div>
                                                <div>
                                                    <p class="font-headline-lg text-body-md font-semibold text-on-surface-variant/40">Arrived</p>
                                                    <p class="text-caption text-on-surface-variant/40">Pending arrival</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Support Card -->
                                    <div class="grid grid-cols-2 gap-4">
                                        <button class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface-light border border-border-subtle hover:border-primary transition-colors group">
                                            <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="call">call</span>
                                            <span class="text-label-md font-label-md text-on-surface">Call Courier</span>
                                        </button>
                                        <button class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface-light border border-border-subtle hover:border-primary transition-colors group">
                                            <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="forum">forum</span>
                                            <span class="text-label-md font-label-md text-on-surface">Contact Shop</span>
                                        </button>
                                    </div>
                                </div>
                                <!-- Map & Summary -->
                                <div class="lg:col-span-8 space-y-gutter">
                                    <!-- Live Map -->
                                    <div class="bg-inverse-surface rounded-xl overflow-hidden h-[400px] relative shadow-lg group">
                                        <div class="absolute inset-0 bg-[#121212] opacity-20 pointer-events-none"></div>
                                        <!-- Map Placeholder -->
                                        <div class="w-full h-full flex items-center justify-center" data-location="Manaus, Brazil" style="">
                                            <!-- Simulated Map Elements -->
                                            <div class="relative w-full h-full bg-[#1c1b1b]">
                                                <!-- Animated Route Path -->
                                                <svg class="absolute inset-0 w-full h-full stroke-primary/30" fill="none" viewbox="0 0 800 400">
                                                    <path d="M100 300 Q 250 150 400 300 T 700 100" stroke-dasharray="10 5" stroke-width="4"></path>
                                                    <path d="M100 300 Q 250 150 400 300 T 700 100" id="delivery-path" stroke="#a1cce8" stroke-linecap="round" stroke-width="4"></path>
                                                </svg>
                                                <!-- Restaurant Marker -->
                                                <div class="absolute left-[80px] top-[280px] flex flex-col items-center">
                                                    <div class="bg-primary p-2 rounded-full shadow-lg border-2 border-on-primary scale-100 hover:scale-110 transition-transform cursor-pointer">
                                                        <span class="material-symbols-outlined text-on-primary text-[18px]" data-icon="restaurant">restaurant</span>
                                                    </div>
                                                    <div class="bg-surface px-2 py-1 rounded text-[10px] mt-1 font-bold text-primary">Amazonia Hub</div>
                                                </div>
                                                <!-- Delivery Marker -->
                                                <div class="absolute left-[380px] top-[280px] flex flex-col items-center transition-all duration-1000 ease-linear" id="courier-marker">
                                                    <div class="bg-secondary p-2 rounded-full shadow-lg border-2 border-on-primary ring-4 ring-secondary/20">
                                                        <span class="material-symbols-outlined text-on-secondary text-[24px]" data-icon="moped">moped</span>
                                                    </div>
                                                    <div class="bg-secondary px-3 py-1 rounded-full text-[10px] mt-1 font-bold text-on-secondary whitespace-nowrap">Raimundo (Courier)</div>
                                                </div>
                                                <!-- Destination Marker -->
                                                <div class="absolute right-[80px] top-[80px] flex flex-col items-center">
                                                    <div class="bg-error p-2 rounded-full shadow-lg border-2 border-on-primary animate-pulse">
                                                        <span class="material-symbols-outlined text-on-error text-[18px]" data-icon="home" data-weight="fill" style="font-variation-settings: 'FILL' 1;">home</span>
                                                    </div>
                                                    <div class="bg-surface px-2 py-1 rounded text-[10px] mt-1 font-bold text-on-surface">Your Home</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-border-subtle max-w-[200px]">
                                            <p class="text-caption font-bold text-primary mb-1">LIVE UPDATES</p>
                                            <p class="text-[11px] text-on-surface-variant leading-tight">Courier is bypassing traffic via Av. Djalma Batista.</p>
                                        </div>
                                    </div>
                                    <!-- Order Summary -->
                                    <div class="bg-surface-container-lowest p-8 rounded-xl border border-border-subtle shadow-sm">
                                        <div class="flex justify-between items-center mb-6">
                                            <h4 class="font-headline-lg text-headline-lg text-primary">Order Summary</h4>
                                            <span class="text-label-md font-label-md text-on-surface-variant">2 Items</span>
                                        </div>
                                        <div class="space-y-4 mb-8">
                                            <div class="flex justify-between items-center py-2 border-b border-border-subtle">
                                                <div class="flex gap-4 items-center">
                                                    <div class="w-12 h-12 rounded-lg bg-surface-light flex items-center justify-center font-bold text-primary">1x</div>
                                                    <div>
                                                        <p class="font-body-md font-semibold text-on-surface">Tucupi Glazed Sea Bass</p>
                                                        <p class="text-caption text-on-surface-variant">Special Request: Extra Farofa</p>
                                                    </div>
                                                </div>
                                                <p class="font-body-md text-primary font-semibold">$38.00</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2 border-b border-border-subtle">
                                                <div class="flex gap-4 items-center">
                                                    <div class="w-12 h-12 rounded-lg bg-surface-light flex items-center justify-center font-bold text-primary">1x</div>
                                                    <div>
                                                        <p class="font-body-md font-semibold text-on-surface">Açai Noir Torte</p>
                                                        <p class="text-caption text-on-surface-variant">Handcrafted Dark Chocolate</p>
                                                    </div>
                                                </div>
                                                <p class="font-body-md text-primary font-semibold">$14.50</p>
                                            </div>
                                        </div>
                                        <div class="bg-surface-light p-6 rounded-lg space-y-2">
                                            <div class="flex justify-between text-body-md">
                                                <span class="text-on-surface-variant">Subtotal</span>
                                                <span class="text-on-surface font-medium">$52.50</span>
                                            </div>
                                            <div class="flex justify-between text-body-md">
                                                <span class="text-on-surface-variant">Delivery Fee</span>
                                                <span class="text-on-surface font-medium">$4.99</span>
                                            </div>
                                            <div class="flex justify-between text-body-md">
                                                <span class="text-on-surface-variant">Sustainable Packaging</span>
                                                <span class="text-secondary font-medium">$0.00</span>
                                            </div>
                                            <div class="flex justify-between text-headline-lg font-bold border-t border-border-subtle pt-4 mt-2">
                                                <span class="text-primary">Total</span>
                                                <span class="text-primary">$57.49</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <!-- Footer (Shell Implementation) -->
                        <footer class="w-full bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container">
                            <div class="w-full py-stack-lg px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-base">
                                <div class="text-center md:text-left">
                                    <h2 class="text-headline-lg font-display-lg text-on-primary mb-2">Amazonia</h2>
                                    <p class="font-body-md text-body-md opacity-80 max-w-xs">Connecting the heart of the Amazon with the soul of modern gastronomy.</p>
                                </div>
                                <div class="flex flex-wrap justify-center gap-8 mt-8 md:mt-0">
                                    <a class="font-label-md text-label-md text-on-primary/80 hover:text-on-primary transition-colors hover:underline" href="#">Privacy Policy</a>
                                    <a class="font-label-md text-label-md text-on-primary/80 hover:text-on-primary transition-colors hover:underline" href="#">Terms of Service</a>
                                    <a class="font-label-md text-label-md text-on-primary/80 hover:text-on-primary transition-colors hover:underline" href="#">Contact Us</a>
                                    <a class="font-label-md text-label-md text-on-primary/80 hover:text-on-primary transition-colors hover:underline" href="#">Careers</a>
                                </div>
                            </div>
                            <div class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-on-primary/10 text-center md:text-left">
                                <p class="font-label-md text-label-md opacity-60">© 2024 Amazonia Culinary Group. All rights reserved.</p>
                            </div>
                        </footer>
                        <!-- Bottom Nav (Mobile Only) -->
                        <nav class="md:hidden fixed bottom-0 w-full z-50 bg-surface-container-lowest dark:bg-inverse-surface nav-shadow px-4 py-2 pb-safe flex justify-around items-center">
                            <a class="flex flex-col items-center justify-center text-on-surface-variant p-2" href="#">
                                <span class="material-symbols-outlined" data-icon="home">home</span>
                                <span class="text-[10px] mt-1">Home</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant p-2" href="#">
                                <span class="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
                                <span class="text-[10px] mt-1">Menu</span>
                            </a>
                            <a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-6 py-2" href="#">
                                <span class="material-symbols-outlined" data-icon="event_available" data-weight="fill" style="font-variation-settings: 'FILL' 1;">event_available</span>
                                <span class="text-[10px] font-bold mt-1">Bookings</span>
                            </a>
                            <a class="flex flex-col items-center justify-center text-on-surface-variant p-2" href="#">
                                <span class="material-symbols-outlined" data-icon="person">person</span>
                                <span class="text-[10px] mt-1">Profile</span>
                            </a>
                        </nav>
                        <script>
        // Micro-interaction: Countdown Timer
                            function startTimer(duration, display) {
                                let timer = duration, minutes, seconds;
                            setInterval(function () {
                                minutes = parseInt(timer / 60, 10);
                            seconds = parseInt(timer % 60, 10);

                            minutes = minutes < 10 ? "0" + minutes : minutes;
                            seconds = seconds < 10 ? "0" + seconds : seconds;

                            display.textContent = minutes + ":" + seconds;

                            if (--timer < 0) {
                                timer = 0;
                }
            }, 1000);
        }

                            window.onload = function () {
            const seventeenMinutes = 60 * 17 + 42;
                            const display = document.querySelector('#timer');
                            startTimer(seventeenMinutes, display);
        };

                            // Micro-interaction: Smooth floating markers on map
                            const courier = document.getElementById('courier-marker');
                            const path = document.getElementById('delivery-path');
                            let progress = 0;

                            function animateCourier() {
                                progress += 0.005;
            if (progress > 1) progress = 0;

                            // Simplified interpolation for the demo
                            const startX = 380;
                            const endX = 700;
                            const startY = 280;
                            const endY = 80;

                            const currentX = startX + (endX - startX) * progress;
                            const currentY = startY + (endY - startY) * progress;

                            courier.style.left = `${currentX}px`;
                            courier.style.top = `${currentY}px`;

                            requestAnimationFrame(animateCourier);
        }

                        // Start map animation
                        // animateCourier(); // Disabled for static presentation fidelity, but ready for logic
                        </script>
                    </body></html>