# More about variables - TypeScript

Open Terminal and create new folder called typescript. Go into that folder and create a folder called src.



mkdir typescript
cd typescript
mkdir src
Initialize your Node.js project (if not already done):
Run npm init -y to create a package.json file.

* Install TypeScript:
    * Run npm install typescript --save-dev to install TypeScript as a development dependency.

* Install type definitions for Node.js:
    - Run npm install @types/node --save-dev to install Node.js type definitions.

* Create a TypeScript configuration file:
    - Run npx tsc --init to generate a tsconfig.json file. This file allows you to customize TypeScript settings.

** Open your project in VS Code **
When you are in your terminal and inside typescript folder
matti@LAPTOP-RE9S5TPO:~/typescript$ code .

Copy & paste following code to tsconfig.json (replace existing code)