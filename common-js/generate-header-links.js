var div = document.createElement("div");
div.className = "header-links-div";

// GitHub
var githubLink = document.createElement("a");
githubLink.href = "https://github.com/sysc0";
githubLink.title = "GitHub";

// Home
var homeText = document.createElement("h1");

var homeLink = document.createElement("a");
homeLink.href = document.location.origin + "/sysc0.github.io";
homeLink.className = "header-link";
homeLink.textContent = "Fivem Personnal Resources";

homeText.appendChild(homeLink);


div.appendChild(githubLink);
div.appendChild(youtubeLink);
div.appendChild(homeText);

document.body.appendChild(div);

/* output html
 <div class="header-links-div">
     <a href="https://github.com/alexguirre" ><img style="float: right" src="images/github.png" width="32" height="32"/></a>
     <a href="https://www.youtube.com/channel/UCJxYR4tBSP6dP9fJica6uuw" ><img style="float: right" src="images/youtube.png" width="32" height="32"/></a>
     <h1><a href="./" class="header-link">alexguirre</a></h1>
 </div>
*/
