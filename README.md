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

{
  "compilerOptions": {
    "target": "es2023",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
* Update package.json:
Add the following scripts to automate the build and run processes:

{
  "name": "typescript",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": { 
    "build": "tsc", 
    "start": "node dist/index.js" 
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/node": "^22.7.8",
    "typescript": "^5.6.3"
  }
}

<details>
  <summary> Create your source files in TypeScript: </summary>
    Create new empty file called index.ts in src folder
    
    Now you can build and run your TypeScript app using following commands in terminal:
npm run build
npm run start
</details>
