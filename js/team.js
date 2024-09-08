// fetch json from [SPECIFIED_URL], then remove loading animation and generate team list to put in [TEAM_GRID_CLASS]. The JSON will have a team attribute which is an array with an image file name, person's name and the position described. This should be added to the flexbox grid in the html. The image should have a class member-image, the name should have the class member-name and the position should have the class member-position. The name and position should be under the image in each div. each member div in the flexbox grid should have the class team-member
async function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
fetch(`${window.location.origin}/assets/images/team/list.json`).then(response => response.json()).then(data => {
    let loadingOverlay = document.getElementById("loading-overlay");
    const teamList = document.getElementsByClassName("team-grid")[0];
    data.members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.className = "team-member";
        const memberImage = document.createElement("img");
        memberImage.className = "member-img";
        memberImage.src = `assets/images/team/${member.img}`;
        memberImage.alt = `${member.name}'s image`;
        const memberName = document.createElement("p");
        memberName.className = "member-name";
        memberName.textContent = member.name;
        // member.textDesc should go into a paragraph tag below the name above the position
        const memberDesc = document.createElement("p");
        memberDesc.className = "text-description"
        memberDesc.textContent = member.textDesc;
        const memberPosition = document.createElement("p");
        memberPosition.className = "member-position";
        memberPosition.textContent = member.position;

        memberDiv.appendChild(memberImage);
        memberDiv.appendChild(memberName);
        memberDiv.appendChild(memberDesc);
        memberDiv.appendChild(memberPosition);
        teamList.appendChild(memberDiv);
        if (member.links) {
            const memberLinks = document.createElement("div");
            memberLinks.className = "member-links";
            member.links.forEach(link => {
                const icon = document.createElement("a");
                let modifier = "b"
                if (link.name == "link" || link.name == "envelope") {
                    modifier = "s"
                }
                icon.innerHTML = `<i class="fa${modifier} fa-${link.name}"></i>`;
                icon.href = link.url;
                memberLinks.appendChild(icon);
            });
            memberDiv.appendChild(memberLinks);
        }
    });
    loadingOverlay.classList.add('faded-out');
    loadingOverlay.classList.remove('faded-in');
    wait(300).then(() => {
        loadingOverlay.classList.add('hidden');
    });
});