## Link to Devpost
https://devpost.com/software/storyquest-8ojpv9

## Inspiration
Learning isn’t easy, and with the increasing distractions of online games and videos, it can be difficult to ensure that kids are learning the education that they need. Some common problems that we noted were that it is easy for children to become distracted when they see learning as “boring.” In addition, it is also often difficult for parents to be involved in children’s independent learning progress. Our app tackles both of these problems through incentivizing learning through a reward system, while also giving parents access to their children’s progress and goals.

## What it does
StoryQuest is a web application designed to enrich children's learning experiences in literature through a book catalog of interactive children's stories and a child-friendly design. It allows parents to create an account and establish reading goals for their child in the form of stars and custom rewards. While reading, the child can highlight challenging words to view their definitions, as well as complete a multiple-choice question at the end of each story to earn stars for their goal. Parents can view their child's progress and statistics in a separate parent portal and set future goals and rewards to keep motivating their child.

## How we built it
StoryQuest was built using **React.js** and **TailwindCSS** for the front end, **Google Firebase** for the back end, and **Express.js** for managing the routing between both. To customize their child's learning experiences, parents can create an account with an email and password. This data is stored in the Firebase database, alongside the data for the child's stars, reading progress, and goals. When the child reads a short story, the definitions, multiple-choice questions, and responses are generated and handled through customized calls to the **OpenAI API**.

## Challenges we ran into
A challenge that we overcame was using OpenAI’s API. Using .env files in both the frontend and backend, we were able to connect the API to the backend port and send the data to the frontend which was presented on the BookView webpage. Connecting the API with both backend and frontend took quite a while but we were eventually able to overcome that challenge and present a nice result. Another challenge that we faced was editing the data in firestore. It was quite difficult to manage the data but again we were able to overcome that challenge. 

## Accomplishments that we're proud of
Our team is proud of our front end design which creates a very child-friendly environment for little ones to learn from. We are also proud of our use of AI to engage with the user and assist them in need and to test their overall understanding of the books they are reading. We are also proud to offer parental controls so that the parent is able to see and reward their child for reading. 

## What we learned
Our team learned about the javascript framework called React.js. Most of us had minimal experience with react.js or no experience at all. This project helped us learn the basics of React so that we can implement the framework in future projects easier. We also learned how to implement OpenAI’s API calls into the project to generate and handle definitions and also generate multiple-choice questions for child understanding. Lastly, we’ve learned how to store and retrieve data, manage user authentication, and leverage Firebase from this project.

## What's next for StoryQuest
Our next plans for StoryQuest involve broadening its reach to provide any parent in need of a great literature learning experience for their kids. In the future, we are planning to implement greater functionality of the parents' involvement in setting goals and rewards for the child. We are also going to be integrating easy-to-navigate pages for parents to view their child’s progress and also edit incentives and goals to motivate the child. Additionally we are looking to expand our database of children’s books so that the child has more reading options.
