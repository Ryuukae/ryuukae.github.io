## [1.1.0](https://github.com/Ryuukae/ryuukae.github.io/compare/v1.0.0...v1.1.0) (2026-09-23)

* **animations:** introduce core configuration and utility helpers ([dc0b4f8](https://github.com/Ryuukae/ryuukae.github.io/commit/dc0b4f84324f8a54b69efa58cb9e214c36e13e78))
* **ci:** implement ci/cd pipeline & quality gates ([#12](https://github.com/Ryuukae/ryuukae.github.io/issues/12)) ([437841c](https://github.com/Ryuukae/ryuukae.github.io/commit/437841c999d51667d1a335440dc97ac9ef9fc42e))
* **ci:** update dictionary for animation terminology ([f884620](https://github.com/Ryuukae/ryuukae.github.io/commit/f8846205fb7ff510fb410c04fc08b68f5ce0f560))
* **config:** implement size-limit and lighthouse configurations ([88f3dee](https://github.com/Ryuukae/ryuukae.github.io/commit/88f3dee4d73de0823db4f97ec43ffacb35370f9e))
* **e2e:** update visual regression baseline ([f1b18da](https://github.com/Ryuukae/ryuukae.github.io/commit/f1b18da1df6a5588d21b0c7f1af556d2dd7256a6))
* **lint:** implement stylelint, cspell, and lint-staged configs ([b41d27c](https://github.com/Ryuukae/ryuukae.github.io/commit/b41d27ce60fb9bffffe0085502cd5c184e32692c))
* **security:** comply to codeql vulnerability warning ([b77ad34](https://github.com/Ryuukae/ryuukae.github.io/commit/b77ad34aa12fea91451c78e3eac94f30731b9b63))

### ✨ Features

* **animations:** activate modular animation framework in main ([40b34c6](https://github.com/Ryuukae/ryuukae.github.io/commit/40b34c62da7ff27751a05cc5f5ed67f664069564))
* **animations:** implement AbstractStrand base entity ([06ed445](https://github.com/Ryuukae/ryuukae.github.io/commit/06ed44565758153dfd8ae9fd7bfe20cf1c999ada))
* **animations:** implement AmbientConstellation system ([5384919](https://github.com/Ryuukae/ryuukae.github.io/commit/53849190d3e6749e82e8c07c7b93b38bd067e508))
* **animations:** implement CircuitTracks system ([7ed67bd](https://github.com/Ryuukae/ryuukae.github.io/commit/7ed67bd3e9765419b634a024dcbeae7f00867f6b))
* **animations:** implement GeometricSphere entity ([14780bc](https://github.com/Ryuukae/ryuukae.github.io/commit/14780bcaa3ac213a9250bf5d6b145d1c15a7e836))
* **animations:** implement HeaderNetwork orchestrator ([62ef6f7](https://github.com/Ryuukae/ryuukae.github.io/commit/62ef6f796e125163bf79c0c6edd3c9992caf9f0b))
* **animations:** implement modular canvas animation framework ([#17](https://github.com/Ryuukae/ryuukae.github.io/issues/17)) ([d8d624d](https://github.com/Ryuukae/ryuukae.github.io/commit/d8d624d3714f706619553bca0441e296bab49910))
* **animations:** implement NetworkBackground orchestrator ([02badda](https://github.com/Ryuukae/ryuukae.github.io/commit/02badda337c71ad58b3f11453559e50b49795af0))
* **animations:** implement PageGrid system ([13af0c4](https://github.com/Ryuukae/ryuukae.github.io/commit/13af0c4ca7064f8fc536dfce8af266119e08cdb2))
* **animations:** implement Particle entity ([7ebc356](https://github.com/Ryuukae/ryuukae.github.io/commit/7ebc3564ad851486e23fed9ff5ee6b2112b15619))
* **assets:** add interactive web quiz resource ([7089b7c](https://github.com/Ryuukae/ryuukae.github.io/commit/7089b7cff422bbb33de2e5f67f8c5480397eb7ef))
* **release:** launch cyber-glass portfolio w/canvas animations ([#20](https://github.com/Ryuukae/ryuukae.github.io/issues/20)) ([187377a](https://github.com/Ryuukae/ryuukae.github.io/commit/187377ae6203ae1fb7912844c9aed22439f803ca))
* **ui:** implement cyber-glass keyframe animations ([3a42369](https://github.com/Ryuukae/ryuukae.github.io/commit/3a4236905029da3327f564f54798aa6e63d503f6))
* **ui:** implement glass aesthetics & modernize DOM architecture ([#16](https://github.com/Ryuukae/ryuukae.github.io/issues/16)) ([02a5c95](https://github.com/Ryuukae/ryuukae.github.io/commit/02a5c951439ec6d9027efcf844544073dd16fac9))

### 🐛 Bug Fixes

* **ui:** resolve missing repo card hover animations and layout gap ([e141505](https://github.com/Ryuukae/ryuukae.github.io/commit/e14150562b8ef73a2cea211f523a739351bf2510))

### 🎨 Styling & UI Polish

* **config:** apply prettier formatting to configuration files ([ccae101](https://github.com/Ryuukae/ryuukae.github.io/commit/ccae10199c8fe399a5613a0a685906bbc05d4002))

### 🏗️ Architecture & Refactoring

* **architecture:** decouple canvas & ui domains ([#18](https://github.com/Ryuukae/ryuukae.github.io/issues/18)) ([232b18d](https://github.com/Ryuukae/ryuukae.github.io/commit/232b18dae3548569cec9dec4c109ecf70ed8f4a5))
* **assets:** standardize image resource filenames to kebab-case ([804b85b](https://github.com/Ryuukae/ryuukae.github.io/commit/804b85b789158d1453c3051d751fc508ac546527))
* **assets:** standardize resources and baseline snapshots ([#14](https://github.com/Ryuukae/ryuukae.github.io/issues/14)) ([1e15fc0](https://github.com/Ryuukae/ryuukae.github.io/commit/1e15fc0de3a26b0f452ce661d29dfc78c0ef7949))
* **canvas:** migrate components to dedicated canvas domain ([b0eab2d](https://github.com/Ryuukae/ryuukae.github.io/commit/b0eab2d527e1fe7b919f555eefb3082aa698c6ad))
* **controllers:** separate state management from DOM manipulation ([ce1c613](https://github.com/Ryuukae/ryuukae.github.io/commit/ce1c6132b15892c3dda3910a0d38b5fb6cc0c8ba))
* **css:** modernize color palette and typography variables ([1a7cee8](https://github.com/Ryuukae/ryuukae.github.io/commit/1a7cee8be07f1c42705cd0dc33ceb60053169333))
* **css:** polish base layout styling and responsive behavior ([2326524](https://github.com/Ryuukae/ryuukae.github.io/commit/2326524a10b8444d421d6f38fad8a02eea6c23e6))
* **data:** update repositories data store with new asset paths ([f01c28e](https://github.com/Ryuukae/ryuukae.github.io/commit/f01c28e2636e384751a72bf57a785fd6f564566a))
* **html:** adjust DOM structure to support new visual layout ([bc1926c](https://github.com/Ryuukae/ryuukae.github.io/commit/bc1926ca56e769c6bb2ade79f1b9b07e34f27aa9))
* **ui:** extract RepoCardFactory to dedicated ui domain ([6a4d90b](https://github.com/Ryuukae/ryuukae.github.io/commit/6a4d90b1403756152d73779e3a21d633365b03c9))

### 📦 Build System & Dependencies

* **npm:** implement dependencies and scripts for new audit tooling ([bd47eac](https://github.com/Ryuukae/ryuukae.github.io/commit/bd47eacbe4b5fbf3d04cdae77fe35a585dc5c537))

### 🛡️ CI/CD & Automation

* **github:** implement automated visual snapshot update workflow ([0120949](https://github.com/Ryuukae/ryuukae.github.io/commit/012094901e63e964359effd44861962bbfe2f404))
* **github:** implement automated visual snapshot update workflow ([#15](https://github.com/Ryuukae/ryuukae.github.io/issues/15)) ([b4831b3](https://github.com/Ryuukae/ryuukae.github.io/commit/b4831b33c89d1cdff0893bade0453f1b60082967))
* **github:** implement main and PR pipelines ([3cbd611](https://github.com/Ryuukae/ryuukae.github.io/commit/3cbd6117b6e950e4c7a87e4282957c32cc4e738d))
* **husky:** configure git hooks for branch flow and commit-msg validation ([f16198a](https://github.com/Ryuukae/ryuukae.github.io/commit/f16198a719971efa961ce1bdec1a51954e876f17))
* update github actions and resolve deprecation warnings ([73281d1](https://github.com/Ryuukae/ryuukae.github.io/commit/73281d12d03c5770894303c4d37a4b634c5e7260))

### 🧪 Testing & Coverage

* **canvas:** implement unit tests for animation orchestrators ([368b2ef](https://github.com/Ryuukae/ryuukae.github.io/commit/368b2ef89efca3d7b63b078744e95fda13e1c330))
* **coverage:** achieve comprehensive unit & e2e testing coverage ([#19](https://github.com/Ryuukae/ryuukae.github.io/issues/19)) ([6a68fa0](https://github.com/Ryuukae/ryuukae.github.io/commit/6a68fa0e135b370d048495ea24fd888e7288073c))
* **e2e:** update playwright configuration and baseline snapshots ([41fe7b8](https://github.com/Ryuukae/ryuukae.github.io/commit/41fe7b8bb8258d5fcf10d87846fa1c01ffd314c0))
* **e2e:** update visual regression baseline snapshot ([062331b](https://github.com/Ryuukae/ryuukae.github.io/commit/062331b208deb86230eb39a45d4c496726fa44ba))
* **visuals:** update playwright baseline snapshots ([a553bfa](https://github.com/Ryuukae/ryuukae.github.io/commit/a553bfab12a1818c6c2908697bbd5a75a655e5aa))

# 1.0.0 (2026-09-16)


### Features

* **infrastructure:** merge auto-release deployment architecture ([#10](https://github.com/Ryuukae/ryuukae.github.io/issues/10)) ([ad2dc14](https://github.com/Ryuukae/ryuukae.github.io/commit/ad2dc147e41e7da52ede9412895dae48f2d8c121))
