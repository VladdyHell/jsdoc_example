# JSDoc Example

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




JSDoc Example

## Description

JSDoc sample for learning purposes 

## Getting Started

`git clone <thisRepository>`

### Prerequisites

- Node.js
- NPM
- Bash Shell

### Dependencies(Any versions as long as it's compatible)

```bash
├── @babel/cli@7.18.10 (Optional)                            
├── @babel/core@7.19.1 (Optional)                      
├── @babel/node@7.19.1 (Optional)
├── @babel/preset-env@7.19.1 (Optional)
├── clean-jsdoc-theme@4.1.8
├── eslint-config-airbnb-base@15.0.0
├── eslint-config-prettier@8.5.0
├── eslint-plugin-import@2.26.0
├── eslint-plugin-jsdoc@39.3.6
├── eslint-plugin-prettier@4.2.1
├── eslint@8.23.1
├── ink-docstrap@1.3.2
├── jsdoc@3.6.11
├── live-server@1.2.2
└── prettier@2.7.1
```

### Installing

* `npm install`

### Executing program

Run one of the script
- `npm run doc` - Generate docs normally 
- `npm run resetDoc` - Cleans up the docs, backup the image directory and generate docs
- `npm run resetDocstrap` - Cleans up the docs, backup the image directory and generate docs with Docstrap template
- `npm run resetDocClean` - Runs cleanse from package script, cleans up the docs, backup the image directory and generate docs with JSDoc3Template(Clean)
- `npm run docBabelExp` - To run import statement in directives(experimental)
- `npm run liveDoc` - Runs live-reload(experimental)
- `npm run checkjs` - Checks with typescript CLI
- `npm run backupSrc` - Backs up `src/` folder into `srcCopy/` to prevent it from `JSDoc3Template`'s pre-built preprocessor for deleting `src/` folder
- `npm run resetSrc` - Copies the `srcCopy/` backup to `src/`
- `npm run tempGen` - Executes bash script for `JSDoc3Template`(Currently not working)
- `npm run cleanse` - Executes node code for cleaning and unescaping both `API References.html` and `Full Notes.md` from `Notes/` directory on a specific project

## Author

Vladd Cantor
[@VladdCantor](https://example.com)

## License

This project is licensed under the Vladd Cantor License - see the LICENSE.md file for details

## Acknowledgments

* [Brad's Project Sample](https://github.com/lyhd/jsdoc-crash-course))
* [Brad's Crash Course](https://youtube.com/watch?v=YK-GurROGIg)