document.addEventListener("DOMContentLoaded", async function () {
    
    const indexList = document.getElementById("index-list");
    const contentContainer = document.getElementsByClassName("md-loader")[0];
    const chapterTitle = document.getElementById("chapter-title");
    const prevButton = document.getElementById("prev-chapter");
    const nextButton = document.getElementById("next-chapter");
    const loadingOverlay = document.getElementById("loading-overlay");
    const toastNotification = document.getElementById("toast-notification");
    const toggleIndex = document.getElementById("toggle-index");
    const indexContainer = document.getElementsByClassName("index-container")[0];
    const indexTitle = document.getElementById("index-title");
    const backdrop = document.getElementById("backdrop");
    const footer = document.getElementsByClassName("footer")[0];
    const themeSwitch = document.getElementsByClassName("theme")[0];

    let currentChapter = 0;
    let chapters = [];

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function loadJSON() {
        new Promise((resolve, reject) => {
            fetch(`${window.location.origin}/chapters/list.json`) // Finding all chapters
                .then(response => response.json())
                .then(data => {
                    chapters = data.chapters;
                    generateIndex();
                    const savedChapter = localStorage.getItem('savedChapter'); // Loading the saved chapter and if not found, loading the first chapter
                    if (savedChapter) {
                        currentChapter = parseInt(savedChapter, 10);
                        showToast();
                    }
                    loadChapter(currentChapter);
                })
                .finally(async () => {
                    loadingOverlay.classList.remove('faded-in'); // Removing the loading animation
                    loadingOverlay.classList.add('faded-out');
                    await wait(300);
                    loadingOverlay.classList.add('hidden');
                    resolve();
                });
        });
    }

    function generateIndex() {
        chapters.forEach((chapter, index) => {
            const chapterElement = document.createElement("li");
            chapterElement.textContent = chapter;
            chapterElement.addEventListener("click", () => loadChapter(index));
            indexList.appendChild(chapterElement);
        });
    }

    async function loadChapter(index) {
        const chapter = chapters[index];
        const markdownPath = `${window.location.origin}/chapters/${chapter.toLowerCase().replace(/[^a-z0-9 ]+/g, '').replace(/ /g, '_')}.md`; // Loading the markdown file with the same name as the chapter
        if (markdownPath == contentContainer.src) {
            return;
        }
        contentContainer.classList.add('faded-out');
        contentContainer.classList.remove('faded-in');
        footer.classList.add('faded-out');
        footer.classList.remove('faded-in');
        await wait(300);
        chapterTitle.textContent = chapter;
        document.title = `Chapter ${index + 1} - ${chapter}`;
        contentContainer.innerText = `${chapter} was not found! Please reload the page.`;
        contentContainer.src = markdownPath;
        contentContainer.classList.add('faded-in');
        contentContainer.classList.remove('faded-out');
        footer.classList.add('faded-in');
        footer.classList.remove('faded-out');
        updateNavButtons(index);
        localStorage.setItem('savedChapter', index);
        currentChapter = index;
        const listItems = indexList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('active');
        }
        listItems[index].classList.add('active');

    }

    function updateNavButtons(index) {
        prevButton.classList.toggle('hidden', index === 0);
        nextButton.classList.toggle('hidden', index === chapters.length - 1);
    }

    function showToast() {
        toastNotification.classList.remove('hidden');
        toastNotification.classList.add('faded-in');
        toastNotification.classList.remove('faded-out');
        let toastCloser = document.getElementById('close-toast');
        toastCloser.addEventListener('click', () => {
            toastNotification.classList.remove('faded-in');
            toastNotification.classList.add('faded-out');
            setTimeout(() => toastNotification.classList.add('hidden'), 300);
        });
        setTimeout(() => {
            toastCloser.click();
        }, 5000);
    }

    toggleIndex.addEventListener('click', async () => {
        if (indexList.classList.contains('hidden')) {
            indexList.classList.remove('hidden');
            indexTitle.classList.remove('hidden');
            backdrop.classList.remove('hidden');
            themeSwitch.classList.remove('hidden');
            await wait(1);
            indexContainer.classList.remove('condensed');
            indexList.classList.add('faded-in');
            indexList.classList.remove('faded-out');
            indexTitle.classList.add('faded-in');
            indexTitle.classList.remove('faded-out');
            // add a backdrop to the index div that darkens the background and on click over there collapses the index by emulating clicking the index
            backdrop.classList.add('faded-in');
            backdrop.classList.remove('faded-out');
            themeSwitch.classList.add('faded-in');
            themeSwitch.classList.remove('faded-out');
            backdrop.addEventListener('click', () => {
                toggleIndex.click();
            });
        }
        else {
            indexContainer.classList.add('condensed');
            indexList.classList.remove('faded-in');
            indexList.classList.add('faded-out');
            indexTitle.classList.remove('faded-in');
            indexTitle.classList.add('faded-out');
            backdrop.classList.remove('faded-in');
            backdrop.classList.add('faded-out');
            themeSwitch.classList.remove('faded-in');
            themeSwitch.classList.add('faded-out');
            await wait(300);
            indexList.classList.add('hidden');
            indexTitle.classList.add('hidden');
            backdrop.classList.add('hidden');
            themeSwitch.classList.add('hidden');
        }
    });

    prevButton.addEventListener('click', () => loadChapter(currentChapter - 1));
    nextButton.addEventListener('click', () => loadChapter(currentChapter + 1));

    await loadJSON();

    // Code for when I add code-highlighting
    // setTimeout(() => {
    //     let tags = document.getElementsByTagName("pre");
    //     for (let i=0;i<tags.length;i++) {
    //         let temp = tags[i].classList[0];
    //         let codeTag = tags[i].children[0];
    //         tags[i].classList.remove(temp);
    //         codeTag.classList.add(temp);
    //         hljs.highlightElement(codeTag);
    //     }
    // }, 1000);
});
