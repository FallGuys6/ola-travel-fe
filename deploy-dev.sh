rm -rf build
npm run build
cd build

cp index.html 200.html

surge . olatravel.surge.sh