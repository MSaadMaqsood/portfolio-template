
cd /var/www/html/cyber
find . -mindepth 1 ! -path './portfolio-php*' -exec rm -rf {} +


cd ~/portfolio-template
sudo cp -r ./out/* /var/www/html/cyber/
