let url = `${window.location.origin}/chapters/list.json`
fetch(url).then(response => response.json()).then(data => {
    chapters = data.chapters;
    // let filename = window.location.href.split('/').pop().split(".html")[0].split('#')[0].split('?')[0];
    let filename = "bashing_bits" // CHANGE THIS WHEN THE CHAPTERS ARE MADE PROPERLY!!
    for (let i=0;i<chapters.length;i++) {
        chapters[i] = chapters[i].toLowerCase()
        chapters[i] = chapters[i].split(" ").join("_")
    }
    let chapter = chapters.filter(chapter => chapter == filename);
    document.getElementsByClassName("md")[0].setAttribute("src", `chapters/${chapter[0]}.md`);
    setTimeout(() => {
        let footer = document.getElementsByTagName("footer")[0];
        footer.classList.remove("hide")
    }, 200);
    setTimeout(() => {
        let tags = document.getElementsByTagName("pre");
        for (let i=0;i<tags.length;i++) {
            let temp = tags[i].classList[0];
            let codeTag = tags[i].children[0];
            tags[i].classList.remove(temp);
            codeTag.classList.add(temp);
            hljs.highlightElement(codeTag);
        }
    }, 1000);
})