## [1.2.0](https://github.com/Ryuukae/ryuukae.github.io/compare/v1.1.1...v1.2.0) (2026-09-24)

### ✨ Features

* **modal:** author DefaultModalView blueprint and interactions ([1cd1ba7](https://github.com/Ryuukae/ryuukae.github.io/commit/1cd1ba7474e02f5144eabace400eb2862a78bdb2))
* **modal:** author modal base styles and deprecate legacy UI CSS ([c64f546](https://github.com/Ryuukae/ryuukae.github.io/commit/c64f5469d2aaa19279accee2427bcdbef3759554))
* **modal:** implement focus trap utility for accessibility ([c383330](https://github.com/Ryuukae/ryuukae.github.io/commit/c3833304fb8676828b7efd961034418784d4e751))
* **modal:** implement ModalController and wire application entry ([cbff7b8](https://github.com/Ryuukae/ryuukae.github.io/commit/cbff7b899ece1084ca0b1aed979925774bee7b6a))
* **modal:** implement ModalRenderer for DOM lifecycle management ([ef8905b](https://github.com/Ryuukae/ryuukae.github.io/commit/ef8905bfa2ca43868818a17e77902ba5874bf5e0))
* **modal:** introduce modal MVC architecture & WCAG focus trap ([#25](https://github.com/Ryuukae/ryuukae.github.io/issues/25)) ([c767236](https://github.com/Ryuukae/ryuukae.github.io/commit/c7672365b6d1634f742d6484e7c9f3b8f48e9359))
* **release:** merge modal architecture into main ([#26](https://github.com/Ryuukae/ryuukae.github.io/issues/26)) ([09870ed](https://github.com/Ryuukae/ryuukae.github.io/commit/09870edb9c2582582d7f61fd83d703687ad217c1))

### 🐛 Bug Fixes

* **modal:** resolve jsdoc eslint warning for focusTrap return type ([e5a21a8](https://github.com/Ryuukae/ryuukae.github.io/commit/e5a21a83e12a00f5b416ea483dee436117df8943))
* **test:** add anchor to playwright href regex to resolve codeql warning ([1db4141](https://github.com/Ryuukae/ryuukae.github.io/commit/1db41417437c0d6431280ff45aedc41a24d14d57))

### 🏗️ Architecture & Refactoring

* **assets:** reorganize repository screenshots into subdirectories ([de1ccd3](https://github.com/Ryuukae/ryuukae.github.io/commit/de1ccd39582e2a507c4b5757c2f5647c1606e0f6))
* **data:** expand repository schema with detailed modal content ([18ab280](https://github.com/Ryuukae/ryuukae.github.io/commit/18ab2801f2635f37b386c95fa3b9fbb5fbdae749))
* **ui:** update repository cards and deprecate legacy accordion ([0efd802](https://github.com/Ryuukae/ryuukae.github.io/commit/0efd802743ce479ead0b32841e7b731d2dff31d9))

### 📦 Build System & Dependencies

* **ci:** configure cspell to respect gitignore rules ([1627eae](https://github.com/Ryuukae/ryuukae.github.io/commit/1627eaefbf9c2a1c180872e82f2e7c3df1f60e2f))
* **ci:** consolidate visual snapshot workflows ([1903b53](https://github.com/Ryuukae/ryuukae.github.io/commit/1903b539d3f31ea10e82a8259db6c8363a73e4ce))
* **ci:** enforce zero warnings in lint-staged eslint checks ([40e1f38](https://github.com/Ryuukae/ryuukae.github.io/commit/40e1f38ebe448247c515127daa3d2ffa50cbc37a))
* **ci:** fix visual snapshot file pattern for git-auto-commit ([6917537](https://github.com/Ryuukae/ryuukae.github.io/commit/69175379a621bb0a04af82301aea1949e042e9eb))
* **ci:** migrate commitlint and update linting configurations ([eab94e2](https://github.com/Ryuukae/ryuukae.github.io/commit/eab94e2a7fa7f6d11a52f8d0332923b43f30e3a2))

### 🧪 Testing & Coverage

* **e2e:** update linux visual regression snapshots ([713f4ba](https://github.com/Ryuukae/ryuukae.github.io/commit/713f4ba673c0987534ca6220412e14fec8884684))
* **modal:** restructure e2e test suite into domain-specific files ([1ff13fc](https://github.com/Ryuukae/ryuukae.github.io/commit/1ff13fc3f18e75f388347c67b48c34ac32756aa0))

## [1.1.1](https://github.com/Ryuukae/ryuukae.github.io/compare/v1.1.0...v1.1.1) (2026-09-23)

### 🐛 Bug Fixes

* **core:** relocate `resources/` directory & repo data structures ([#24](https://github.com/Ryuukae/ryuukae.github.io/issues/24)) ([0620023](https://github.com/Ryuukae/ryuukae.github.io/commit/06200230dd12a9fab49faf67dcebea78f1a449c6))
* **data:** update repository dataset properties and paths ([a94a78c](https://github.com/Ryuukae/ryuukae.github.io/commit/a94a78ce690ad7eb90ea4b4861b2fd34c20734c2))
* **resources:** relocate resources directory to public path ([298278a](https://github.com/Ryuukae/ryuukae.github.io/commit/298278a824e61b5008297a440eb197fd252f57d2))
* **resources:** restore broken repo card images ([#22](https://github.com/Ryuukae/ryuukae.github.io/issues/22)) ([68c8e06](https://github.com/Ryuukae/ryuukae.github.io/commit/68c8e060a5cc9c2f56a5bf252820c86caf3fdc8b))
* **ui:** correct `RepoCardFactory` property bindings for asset loading ([875ea57](https://github.com/Ryuukae/ryuukae.github.io/commit/875ea575a67d1ddf3203def3629811ef5a7f3f94))

### 🛡️ CI/CD & Automation

* **release:** automate JSDoc version synchronization ([#23](https://github.com/Ryuukae/ryuukae.github.io/issues/23)) ([eebd39c](https://github.com/Ryuukae/ryuukae.github.io/commit/eebd39cf2ea5d0993df0c607f0d012edeaa05b06))
* **release:** integrate exec plugin for automated jsdoc versioning ([ade1fa2](https://github.com/Ryuukae/ryuukae.github.io/commit/ade1fa21cdc53c252211e9891618ea11a2000231))

### 🧪 Testing & Coverage

* **e2e:** align end-to-end and unit test suites with data schema ([41ca6c5](https://github.com/Ryuukae/ryuukae.github.io/commit/41ca6c59281d0ea924d74d8a9f95657eeaedb734))

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
