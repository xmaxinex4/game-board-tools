## To Run App Locally and recompiles as you develop:

run "npm run start"

Project Description:

- Provide users with a tool that returns board game search results
- Users can filter by minimum publish date, number of players, player age, game complexity, multiple mechanics & categories, and game duration.
- Users can click on each result to see more detailed information that BGG API provides

Data resources:
BGG XML API: https://boardgamegeek.com/wiki/page/BGG_XML_API2
Challenge: Only supports search functionality by a single string query

Data Retrieval:
We need to collect data to support expanded search options

Solution 1: Create a static JSON file with all board game information so that we can implement our own filter and search functionality

Cons: BGG currently has 1527 pages of 100 games per page. Dynamic search time on this file would be O(1) because this is a static number, but performance must be reviewed

    Steps for data retrieval:
    1. Create Node.js script to scrape BGG board game pages
    2. Use Axios and Cheerio to process HTML on BGG browse pages (https://boardgamegeek.com/browse/boardgame)
    3. Collect all board game ids and run them through BGG API’s ‘thing’ endpoint to compile a json file with game data (year published, number of players, player age, complexity, mechanics & categories, game duration)

    		JSON object format:
    		{
    			games: [
          {
    				bggId: string;
    				name: string;
            minYearPublished?: string;
            complexityRange?: number[];
            minPlayers?: number;
            maxPlayers?: number;
            minPlayTime?: number;
            maxPlayTime?: number;
            minAge?: number;
            categoriesAndMechanics?: string[];
            rating: number;
            description: string;
            complexity: number;
            urlThumb: string;
            urlImage: string;
          }
    			]
      }
    4. Store JSON file within project code ‘boardgameData.json’
    5. There is a node.js project stored in a github repository (https://github.com/xmaxinex4/bgg-web-scrapper-nodejs) that creates the JSON data file located in this project (/src/pages/game-tools/data/boardgames.js)

React Application:
This project is a React application. It uses react scripts to build compiled code.

Notable Dependencies:
Material UI - A React styling and component library to help style the website
Json-Query - A library that offers tools to query our large JSON data file containing over 1000 board games

Repository:
Project code is saved as a public repository on Github: https://github.com/xmaxinex4/game-board-tools

Deployment:
GameBoardTools.com is currently deployed using AWS. Precompiled files are uploaded to an S3 Bucket. The files are served via Cloudfront. You may have to invalidate the cloudfront distribution cache if the site is not loading correctly.

Steps to deploy:

1. Run npm install locally
2. Copy contents of the build folder to the S3 bucket for gameboardtools.com
3. Invalidate the cache on Cloudfront if neccessary
