@ECHO OFF
ECHO [INFO] Starting respository download.
git clone https://github.com/ishawng/JIC-2102.git
ECHO [INFO] Download complete.
cd JIC-2102
ECHO [INFO] Starting package installation.
npm install
ECHO [INFO] Installation complete.
ECHO [INFO] Setup complete.
PAUSE