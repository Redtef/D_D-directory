
## Developer Dao Minimum Viable Contribution 

TODO list
- add a small explanation below the divider to explain what is it
- write down the process to be done (merge request process to get your name on it)
- if needed there needs to be a small guide on how to :
    - what is git and why is it used
    - install git 
    - create a github account 
    - what are forks , branches , commits

- things need to look a lil bit better visually 
- next steps after finishing this task (add your own touch , change the front end stuff etc..)

## How to contribute ? 

-------
### Not Familiar with Git and Github 

If you are familiar with how Git & Github works , or would like to test another way of doing things , click [here](#familiar-with-git-and-github) 

1. First you will need a Github [account](https://github.com/signup)
    * Click [here](#what-is-git-and-github) for a small explanation of what is forking what is Git and Github  ? 
2. On the project page , at the top right there will be a button to `Fork` the project 
    * Click [here](#what-is-forking) for a small explanation of what is forking what is Forking ? 
3. In your version of the project navigate to the public Directory -> Contributors Directory 
4. Add new file with this format : `name.json`
5. paste inside of it this code : 
```
{
    "name":"Your-Name",
    "discord":"Your-Discord-Name",
    "NFT":"Your-NFT-Number"
 }
```
6. replace the placeholder information with your relevant information 
7. Scroll down and click on commit new file
   * Click [here](#what-is-a-commit) for a small explanation of what is a commit ? 
8. Pat yourself on the back 🎉 , you just made your first open source commit.
9. Go back to your version of the projects main page 
10. click on contribute -> Open Pull Request 
   * Click [here](#what-is-a-pull-request) for a small explanation of what is a pull Request ?
11. check that the only file changes you have done are adding the new file that contains your relevant informations 
12. Create Pull Request
13. 🥳 Celebrate 🥳 ! you have just made your first Pull Request to an open source project! 
14. Your changes will soon be accepted by one of the D_D members and you will see your name shine in the [Website](d-d-directory.vercel.app/)

------

### Familiar with Git and Github 

If you are not familiar with how Git & Github works, or can't access edit your code on your machine , you can do all of these steps from withing the github browser by following the steps [here](#not-familiar-with-git-and-github) 


1. First you will need a Github [account](https://github.com/signup)
    * Click [here](#what-is-git-and-github) for a small explanation of what is forking what is Git and Github  ? 
2. On the project page , at the top right there will be a button to `Fork` the project 
    * Click [here](#what-is-forking) for a small explanation of what is forking what is Forking ? 
3. At this point you will need to have `Git` installed in your machine. Click [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for more info on how to do that
4. Go to your version of the project and click on the `Code` button, copy the link that it displays.
5. Open your terminal and type `git clone <URL you copied from the last step>`.  This will create a new directory with the same name as the Repository
6.  Open that directory in your favorite IDE or text Editor -> navigate to `public/contributors` 

7. Add new file with this format : `name.json`
8. paste inside of it this code : 
```
{
    "name":"Your-Name",
    "discord":"Your-Discord-Name",
    "NFT":"Your-NFT-Number"
 }
```
9. replace the placeholder information with your relevant information 
10. Go back to your terminal and add the file you just create to the changes to be commited 
    - `git status` will display the modified files (normally there should only be one file)
    - `git add .` (The dot is part of the commant) will add your file to the changes to be commited 
    - `git commit -m "create <YOUR NAME>.json` will commit your changes locally with the message `create <YOUR NAME>.json`
    - `git push` will push your changes to your remote repository in github
11. Congratulations 🎉 , you just made your first open source commit.
12. Go back to your version of the projects main page 
13. click on contribute -> Open Pull Request 
   * Click [here](#what-is-a-pull-request) for a small explanation of what is a pull Request ?
14. check that the only file changes you have done are adding the new file that contains your relevant informations 
15. Create Pull Request
16. 🥳 Celebrate 🥳 ! you have just made your first Pull Request to an open source project! 
17. Your changes will soon be accepted by one of the D_D members and you will see your name shine in the [Website](d-d-directory.vercel.app/)

-----------------
#### What is Git and Github 
<details>
  <summary>Click to expand!</summary>
  
  ## Git
  TODO
  ## Github
  TODO
</details>


#### What is a commit 
<details>
  <summary>Click to expand!</summary>
  
  ## Forking
  TODO
</details>


#### What is forking 
<details>
  <summary>Click to expand!</summary>
  
  ## Forking
  TODO
</details>

#### What is a pull request 
<details>
  <summary>Click to expand!</summary>
  
  ## Forking
  TODO
</details>

---------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.