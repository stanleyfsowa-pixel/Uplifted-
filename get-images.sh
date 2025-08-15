#!/bin/bash

# Image Collection Script for Uplifted Beauty Boutique
echo "==================================================="
echo "Uplifted Beauty Boutique - Image Collection Guide"
echo "==================================================="
echo ""

echo "📱 STEP 1: Visit Social Media Pages"
echo "Open these links in your browser:"
echo "• Facebook: https://www.facebook.com/hairbykristen1/"
echo "• Instagram: Search for 'Uplifted Beauty Boutique Merlin Oregon'"
echo "• Yelp: Search for the business on Yelp for customer photos"
echo ""

echo "📸 STEP 2: Save Images"
echo "Right-click on images and 'Save Image As...' to this folder:"
echo "$(pwd)/assets/images/"
echo ""

echo "🖼️  STEP 3: Required Images"
echo "Save these specific files with exact names:"
echo ""
echo "HERO SECTION:"
echo "• hero-image-placeholder.jpg (best salon photo, 1200x800px)"
echo "• hero-background.jpg (atmospheric shot, 1920x1080px)"
echo ""
echo "TEAM PHOTOS (400x400px each):"
echo "• kristen-placeholder.jpg (Kristen Loprieno)"
echo "• gabby-placeholder.jpg (Gabby)"
echo "• katie-placeholder.jpg (Katie)"
echo ""
echo "GALLERY (500x500px each):"
echo "• gallery-1-placeholder.jpg (hair transformation)"
echo "• gallery-2-placeholder.jpg (color work)"
echo "• gallery-3-placeholder.jpg (salon interior)"
echo "• gallery-4-placeholder.jpg (hair styling)"
echo "• gallery-5-placeholder.jpg (pedicure station)"
echo "• gallery-6-placeholder.jpg (team or client photo)"
echo ""

echo "⚡ STEP 4: Quick Commands"
echo "After saving images, run these commands:"
echo ""
echo "# Make images web-optimized (if you have ImageMagick installed):"
echo "for img in assets/images/*.jpg; do"
echo "  convert \"\$img\" -quality 85 -resize '800x800>' \"\$img\""
echo "done"
echo ""
echo "# Check if all images are present:"
echo "ls -la assets/images/*.jpg"
echo ""

echo "🌐 STEP 5: Test Website"
echo "Open index.html in your browser to see the updated images"
echo ""

echo "📞 NEED HELP?"
echo "Contact the salon for high-quality images:"
echo "• Phone: (708) 256-5435"
echo "• Email: K10dandra@gmail.com"
echo ""
echo "==================================================="

# Check if images directory exists
if [ ! -d "assets/images" ]; then
    echo "❌ Error: assets/images directory not found!"
    echo "Make sure you're running this from the project root directory."
    exit 1
fi

echo "✅ Ready to collect images!"
echo "Current directory: $(pwd)"
echo "Images will be saved to: $(pwd)/assets/images/"