/**
 * Builds the visual content that you actually see inside the modal window.
 * This class acts as a helpful middleman for creating modals, meaning we don't
 * have to manually write out a unique modal for every single project card on the page.
 * Instead, it takes a single HTML blueprint and dynamically fills it in with the
 * correct project data on demand. It also makes sure to use native DOM properties
 * to inject that data safely, keeping us protected from XSS vulnerabilities.
 * @author Adam Ross DeStafeno
 * @version 1.1.1
 */
export class DefaultModalView {
  /**
   * Initializes the view with repository data and constructs the DOM node.
   * @param {object} repoData - The repository data object.
   */
  constructor(repoData) {
    this.repoData = repoData;
    this.content = repoData.modalContent || {};
    this.images =
      this.content.images && this.content.images.length > 0
        ? this.content.images
        : [this.repoData.image];
    this.currentImageIndex = 0;

    this.view = this.buildBlueprint();

    this.hydrateText();
    this.hydrateLists();
    this.hydrateImages();
    this.bindCarouselEvents();
  }

  /**
   * Returns the fully constructed DOM view.
   * @public
   * @returns {HTMLElement} - The generated HTML view ready for DOM insertion.
   */
  render() {
    return this.view;
  }

  /**
   * Converts the raw HTML template string into a real, safe DOM view.
   * @private
   * @returns {HTMLElement} - The root container view.
   */
  buildBlueprint() {
    const template = `
      <div class="modal-content-container relative w-[98vw] h-[98vh] max-w-[1900px] overflow-y-auto bg-black/90 backdrop-blur-3xl border border-cyan-500/50 shadow-[0_8px_32px_rgba(0,255,255,0.15)] rounded-3xl p-6 md:p-10 m-4 flex flex-col gap-6 animate-border-pulse" role="document">
        <button class="modal-close-btn absolute top-4 right-4 text-cyan-400 hover:text-white hover:scale-110 transition-all duration-300 text-3xl w-10 h-10 flex items-center justify-center bg-black/50 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] cursor-pointer z-50" aria-label="Close modal">&times;</button>
        
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full h-full">
          
          <!-- Left Column: Carousel Wrapper -->
          <div class="lg:w-3/5 flex flex-col gap-4 min-h-[40vh] lg:min-h-full">
            
            <!-- Image Container -->
            <div class="modal-carousel-section relative flex-1 w-full rounded-2xl border border-cyan-500/20 bg-black/40 overflow-hidden shadow-inner group">
              <div class="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
              
              <img class="modal-main-image w-full h-full object-cover object-center drop-shadow-[0_0_10px_rgba(0,255,255,0.1)] transition-opacity duration-300 ease-in-out z-10" src="" alt="Project Screenshot">
              
              <button class="carousel-prev hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-cyan-500/50 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-900/60 hover:scale-110 transition-all duration-300 z-20 shadow-[0_0_15px_rgba(0,255,255,0.2)]" aria-label="Previous image">
                <i class="fas fa-chevron-left"></i>
              </button>
              <button class="carousel-next hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-cyan-500/50 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-900/60 hover:scale-110 transition-all duration-300 z-20 shadow-[0_0_15px_rgba(0,255,255,0.2)]" aria-label="Next image">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>

            <!-- Indicators beneath the border box -->
            <div class="carousel-indicators hidden items-center justify-center gap-3 z-20 shrink-0 h-6"></div>
          </div>

          <!-- Right Column: Content & Tech Stack -->
          <div class="modal-details-section lg:w-2/5 flex flex-col overflow-y-auto pr-4 custom-scrollbar">
            
            <h2 class="[animation:flash-pulse-blue_2.5s_infinite_ease-in-out] text-3xl md:text-4xl font-extrabold tracking-wide mb-8 shrink-0">
              <span class="modal-title name-pulse-gradient"></span>
            </h2>
            
            <div class="modal-body flex-1 flex flex-col gap-10 pb-8">
              
              <!-- 1. Feature Overview -->
              <div class="shrink-0 flex flex-col">
                <h3 class="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-500/80 mb-3 flex items-center"><i class="fas fa-bolt mr-2 opacity-80"></i>Feature Overview</h3>
                <p class="modal-features-text text-[15px] leading-relaxed text-slate-300/90 font-sans whitespace-pre-wrap"></p>
              </div>

              <!-- 2. Technology & Architecture -->
              <div class="modal-tech-section shrink-0 flex flex-col relative">
                <!-- Subtle background glow -->
                <div class="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                <h3 class="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-500/80 mb-5 flex items-center relative z-10"><i class="fas fa-layer-group mr-2 opacity-80"></i>Technology & Design</h3>
                
                <div class="flex flex-col gap-6 relative z-10">
                  <!-- Core Row -->
                  <div class="flex flex-col shrink-0">
                    <span class="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-600 mb-2">Foundation</span>
                    <ul class="modal-technologies flex flex-wrap gap-2"></ul>
                  </div>
                  
                  <!-- Libraries Row (Infrastructure) -->
                  <div class="flex flex-col shrink-0">
                    <span class="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-600 mb-2">Infrastructure</span>
                    <ul class="modal-libraries flex flex-wrap gap-2"></ul>
                  </div>

                  <!-- Concepts Row (Architecture) -->
                  <div class="flex flex-col shrink-0">
                    <span class="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 mb-2">Architecture</span>
                    <ul class="modal-architectures flex flex-wrap gap-2"></ul>
                  </div>
                </div>
              </div>

              <!-- 3. Pipeline & Deployment -->
              <div class="shrink-0 flex flex-col">
                <h3 class="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-500/80 mb-3 flex items-center"><i class="fas fa-rocket mr-2 opacity-80"></i>Testing & Deployment</h3>
                <p class="modal-cicd-text text-[15px] leading-relaxed text-slate-300/90 font-sans whitespace-pre-wrap"></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    return doc.body.firstElementChild;
  }

  /**
   * Fills in the text areas like the title and the detailed descriptions.
   * @private
   */
  hydrateText() {
    const titleNode = this.view.querySelector('.modal-title');
    if (titleNode) titleNode.textContent = this.repoData.title;

    const featuresNode = this.view.querySelector('.modal-features-text');
    if (featuresNode) {
      featuresNode.textContent = this.content.featuresText || this.repoData.description;
    }

    const cicdNode = this.view.querySelector('.modal-cicd-text');
    if (cicdNode) {
      if (!this.content.cicdText || this.content.cicdText.trim() === '') {
        cicdNode.parentElement.classList.add('hidden');
      } else {
        cicdNode.textContent = this.content.cicdText;
      }
    }
  }

  /**
   * Creates the small badges for technologies, architectures, and libraries.
   * @private
   */
  hydrateLists() {
    let hasTech = false;
    let hasArch = false;
    let hasLibs = false;

    const techList = this.view.querySelector('.modal-technologies');
    if (techList) {
      const technologies = this.content.technologies || [];
      if (technologies.length === 0) {
        techList.parentElement.classList.add('hidden');
      } else {
        hasTech = true;
        technologies.forEach((tech) => {
          const li = document.createElement('li');
          li.textContent = tech;
          li.className =
            'px-3 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/30 text-cyan-100 text-xs font-medium shadow-[0_0_10px_rgba(0,255,255,0.05)] cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:bg-cyan-900/50 hover:text-white';
          techList.appendChild(li);
        });
      }
    }

    const archList = this.view.querySelector('.modal-architectures');
    if (archList) {
      const architectures = this.content.architectures || [];
      if (architectures.length === 0) {
        archList.parentElement.classList.add('hidden');
      } else {
        hasArch = true;
        architectures.forEach((arch) => {
          const li = document.createElement('li');
          li.textContent = arch;
          li.className =
            'px-3 py-1.5 rounded-full border border-emerald-900/50 bg-emerald-950/30 text-emerald-100 text-xs font-medium shadow-[0_0_10px_rgba(16,185,129,0.05)] cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:bg-emerald-900/50 hover:text-white';
          archList.appendChild(li);
        });
      }
    }

    const libsList = this.view.querySelector('.modal-libraries');
    if (libsList) {
      const libs = this.content.libs || [];
      if (libs.length === 0) {
        libsList.parentElement.classList.add('hidden');
      } else {
        hasLibs = true;
        libs.forEach((tool) => {
          const li = document.createElement('li');
          li.textContent = tool;
          li.className =
            'px-3 py-1.5 rounded-full border border-purple-900/50 bg-purple-950/30 text-purple-100 text-xs font-medium shadow-[0_0_10px_rgba(128,0,128,0.05)] cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:bg-purple-900/50 hover:text-white';
          libsList.appendChild(li);
        });
      }
    }

    if (!hasTech && !hasArch && !hasLibs) {
      const techSection = this.view.querySelector('.modal-tech-section');
      if (techSection) {
        techSection.classList.add('hidden');
      }
    }
  }

  /**
   * Sets up the initial image and renders carousel indicators if multiple images exist.
   * @private
   */
  hydrateImages() {
    this.updateMainImage();

    if (this.images.length <= 1) return;

    this.view.querySelector('.carousel-prev').classList.remove('hidden');
    this.view.querySelector('.carousel-next').classList.remove('hidden');

    const indicatorsContainer = this.view.querySelector('.carousel-indicators');
    indicatorsContainer.classList.remove('hidden');
    indicatorsContainer.classList.add('flex');

    this.images.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
        idx === 0
          ? 'bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(0,255,255,0.8)]'
          : 'bg-gray-600 hover:bg-gray-400'
      }`;
      dot.setAttribute('aria-label', `Go to image ${idx + 1}`);
      dot.dataset.index = idx;
      indicatorsContainer.appendChild(dot);
    });
  }

  /**
   * Updates the main image source and indicator dots based on currentImageIndex.
   * @private
   */
  updateMainImage() {
    const mainImg = this.view.querySelector('.modal-main-image');
    if (!mainImg) return;

    mainImg.style.opacity = '0';

    setTimeout(() => {
      const src = this.images[this.currentImageIndex];
      if (src) {
        mainImg.setAttribute('src', src);
        mainImg.setAttribute(
          'alt',
          `Screenshot ${this.currentImageIndex + 1} for ${this.repoData.title}`
        );
      }
      mainImg.style.opacity = '1';
    }, 150);

    const dots = this.view.querySelectorAll('.carousel-indicators button');
    dots.forEach((dot, idx) => {
      if (idx === this.currentImageIndex) {
        dot.className =
          'w-3 h-3 rounded-full transition-all duration-300 bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(0,255,255,0.8)]';
      } else {
        dot.className =
          'w-3 h-3 rounded-full transition-all duration-300 bg-gray-600 hover:bg-gray-400';
      }
    });
  }

  /**
   * Attaches click listeners for the next/prev buttons and indicator dots.
   * @private
   */
  bindCarouselEvents() {
    if (this.images.length <= 1) return;

    const prevBtn = this.view.querySelector('.carousel-prev');
    const nextBtn = this.view.querySelector('.carousel-next');
    const indicatorsContainer = this.view.querySelector('.carousel-indicators');

    prevBtn.addEventListener('click', () => {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.updateMainImage();
    });

    nextBtn.addEventListener('click', () => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.updateMainImage();
    });

    indicatorsContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        this.currentImageIndex = parseInt(e.target.dataset.index, 10);
        this.updateMainImage();
      }
    });
  }
}
