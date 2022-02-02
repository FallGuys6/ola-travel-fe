#Step 1: Remove floder "build"
rm -rf build

#Step 2: Run script "npm run build"
npm run build

#Step 3: Chose floder build
cd build

#Step 4: Copy file index.html to 200.html
cp index.html 200.html

#Step 5: Run deploy 
surge . olatravels.surge.sh