---
layout: default
title: How To Pull Request
author: BCNGeeks
date: 22nd June 2022
---

# How To Pull Request

1. Do a Fork of the original project.

    This will create a copy of the project under your possession. It is your responsability to keep that project up to date.

    [WHAT HAPPENS IF THE PROJECT IS NOT UP TO DATE?](./uptodate.md)

![Fork Button](./img/Fork.png)    

2. Clone the project in your machine. 

        git clone `https://github.com/<YourUserName>/<ProjectName>`

3. Create a new branch where you will do the changes.

    **WHAT HAPPENS IF YOU DON'T CREATE A NEW BRANCH?**

        git checkout -b new_branch
    
4. Do your changes in your local project. Then push it to your own project. You can do this using console or Visual Studio

        git remote add origin `https://github.com/<YourUserName>/<ProjectName>`

        git add .

        git commit -m "BlaBlaBla"

        git push https://<GITHUB_ACCESS_TOKEN>@github.com/<GITHUB_USERNAME>/<REPOSITORY_NAME>.git

![Visual-Studio-Push](./img/Push.png)

5. Go to your Github project and you will find the button "Compare & Pull Request". Click it to request the changes to be pushed into the original project!

![Pull-Request](./img/ComparePullRequest.png)

![Open-Request](./img/OpenPullRequest.png)

6. Finally when you are done with the Pull Request we will ask of you to fill in a Summary of Changes just like the one in the image:

![Summary Of Changes](./img/Pull%20Request%20Summary.png)
