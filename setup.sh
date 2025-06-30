#!/bin/bash

# Create necessary directories
mkdir -p src/app src/components src/styles src/utils public/images

# Install dependencies
npm install

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here" > .env.local
    echo "Created .env.local file. Please update with your Google Maps API key."
fi

# Make the script executable
chmod +x setup.sh

echo "Setup complete! You can now run 'npm run dev' to start the development server." 