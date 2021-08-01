<!--- STARTEXCLUDE --->
# JAMStack + Netlify + Astra DB + Cassandra 📒
*10 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/todo-astra-jamstack-netlify#prerequisites)*

This is an example React To-Do application using a [DataStax Astra](https://astra.datastax.com/register?utm_source=devplay&utm_medium=github&utm_campaign=todo-astra-jamstack-netlify) free tier database.
<!--- ENDEXCLUDE --->

![image](https://monosnap.com/image/Fv0yPAznbeNJD3vYlQfztME6yogzFT)

## Objectives
* Provide a fullstack development example using Astra DB as the storage backend

## How this works
Once the Astra DB credentials are provided, the necessary tables are created in the database. The webservice will be available on port 8080 once the application has been deployed.

[JAMstack](https://jamstack.org/) is a big leap forward in how we can write web applications that are easy to write, deploy, scale, and also maintain. Using this approach means that newly created content is rendered from a content API, while a static render of it is being built into the site for future.

## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/todo-astra-jamstack-netlify](https://github.com/DataStax-Examples/todo-astra-jamstack-netlify#prerequisites)

<!--- STARTEXCLUDE --->
# Running JAMStack + Netlify + Astra DB + Cassandra 
Follow the instructions below to get started.

## Prerequisites
Let's do some initial setup by creating a serverless(!) database.

### DataStax Astra
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=todo-astra-jamstack-netlify) if you don't already have one:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-register-basic-auth.png)

2. On the home page. Locate the button **`Create Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Locate the **`Get Started`** button to continue
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-select-plan.png)

4. Define a **database name**, **keyspace name** and select a database **region**, then click **create database**.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, we need to generate an Application Token for our App. Go to the `Settings` tab in the database home screen.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings.png)

1. Select `Admin User` for the role for this Sample App and then generate the token. Download the CSV so that we can use the credentials we need later.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings-token.png)

1. After you have your Application Token, head to the database connect screen and copy the connection information that we'll need later. We'll replace `ASTRA_DB_APPLICATION_TOKEN` with the `Token` value that is part of your Application Token.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect.png)

### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/todo-astra-jamstack-netlify):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)

## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Gitpod](#running-on-gitpod)
  - [Deploying to Netlify](#deploying-to-netlify)

### Running on your local machine
1. `cd` to the cloned repository, and install Node dependencies: `npm install`.

2. Populate your environment variables into a .env file
```
cp .env-template .env
```

and modify .env to include your database specific values (you can find these in the database detail screen in the Astra UI).

```
ASTRA_DB_ID=REPLACE-ME
ASTRA_DB_REGION=REPLACE-ME
ASTRA_DB_KEYSPACE=REPLACE-ME
ASTRA_DB_APPLICATION_TOKEN=REPLACE-ME
```

1. In the cloned repository, build the app: `npm run dev`.

2. Open http://localhost:8080 to view your application:
![image](https://user-images.githubusercontent.com/3254549/88739693-fdadac00-d0ef-11ea-9f95-d2ee643b5431.png)

### Running on Gitpod
1. Click the 'Open in Gitpod' link:
[![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://dtsx.io/3gtADSq)

2. Wait for your Gitpod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/88744125-5171c280-d0fb-11ea-9676-de4589e42589.png)

3. Set your Astra DB details in the Gitpod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/88744148-64849280-d0fb-11ea-9b20-52d5226a14c6.png)

4. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/88744346-ebd20600-d0fb-11ea-9853-cf370dfcf143.png)

5. View your application:
6. ![image](https://user-images.githubusercontent.com/3254549/88744380-04422080-d0fc-11ea-93a1-fe40854f428c.png)

### Deploying to Netlify
1. Click the 'Deploy to Netlify' button:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://dtsx.io/2EtfGty)

2. Connect your GitHub account:
![image](https://user-images.githubusercontent.com/3254549/88744656-d9a49780-d0fc-11ea-97ad-f05aa0ace11e.png)

3. Fill in the Netlify environment variables with information on your Astra DB:
![image](https://user-images.githubusercontent.com/3254549/88744704-fb9e1a00-d0fc-11ea-8d92-4182aed4499d.png)

4. Click 'Save and Deploy':
![image](https://user-images.githubusercontent.com/3254549/88744776-2c7e4f00-d0fd-11ea-8530-71e2a85e34a2.png)

5. Wait for your app to deploy (this will take a minute or two, the screen will auto-refresh when the deployment is complete):
![image](https://user-images.githubusercontent.com/3254549/88744798-3bfd9800-d0fd-11ea-8858-281bd0d4ff70.png)

6. Click your Netlify app link to view your live app:
![image](https://user-images.githubusercontent.com/3254549/88744822-4fa8fe80-d0fd-11ea-97dd-9f9611b332dc.png)

7. You've deployed your app to Netlify!
![image](https://user-images.githubusercontent.com/3254549/88744842-62233800-d0fd-11ea-8e20-29aa71027885.png)

### Things to Note:
 - The contents of this repo are based on [Jake's port](https://github.com/tjake/todo-astra-react-serverless/) of the [TodoMVC code](https://github.com/tastejs/todomvc/tree/master/examples/react) originally written by [Pete Hunt](https://github.com/petehunt).
 - The example is modified from https://github.com/huksley/todo-react-ssr-serverless.
<!--- ENDEXCLUDE --->
