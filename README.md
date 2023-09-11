# A Computer for You
---
This is an indevelopment website made for teaching people about the interesting parts of tech and computers. The inspiration for this site was [**CPU.land**](https://cpu.land/). If you are seeing this currently, you have probably been invited by Muhammad Usman Mithani (a.k.a. iammithani) to view the code for this repository, or you have somehow gained access to older builds and older code of this site.

---
## Running the website
This build may partially work loading it as a static HTML file as the markdown support for it is pretty broken and thus it does not load the markdown anyways due to CORS issues. That is why it is highly preferable that you launch the site on a web server (either by making an express.js/flask or any other backend for a server where you host all the files or preferably using the other method shown).

Steps to launch the files on a web server
- Clone the repository using `git clone` in cmd to any preferable folder.
- Open the repository in Visual Studio Code.
- Open the extensions tab from the left pane and search for "Live Preview" (by Microsoft) or "Live Server" (third-party). I am going to give the steps for using Live Preview.
- Go to `{root}/index.html` and right click, and then select "Show Preview"
- A pane on the side to preview the website linked to `localhost` port `3000`, and will automatically update on any state change
- If you want to view the website in a browser, click on the hamburger menu on the top right and click on "Open in Browser". Closing the pane should not shut down the server (I think so as it did not close for me but maybe thats due to some other settings).
- If you do stick with the pane on the side of your VSCode screen, you can click on the hamburger menu on the top right of the pane and select "Open DevTools Pane" to open DevTools for the preview in VSCode

### Please give your honest feedback about the website and the code. I am open to any suggestions and improvements. Thank you for reading this far! If you want to contact me, you probably already have a method to contact me and thus contact me on those respective platforms.