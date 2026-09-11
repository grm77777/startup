# LIL' Planner

[My Notes](notes.md)

The LIL' Planner is an assignment organizer designed to help college students managing classes across several different sites. The application will have a calming, pastel palette and cutesy aesthetic that will encourage a more relaxed feeling to homework management. Features will include the ability to input upcoming assignments and tests, break down assignments and tests into smaller tasks and study sessions, receive push notifications alerting users to upcoming deadlines, and a celebration screen when users mark anything as complete. 

### Elevator pitch

Meet LIL' Planner, your new assignment organizer! Elevate your studying experience by consoldating assignments all into one place. Group assignments by class and sort them by due date. Manage your time better by breaking assignments into smaller tasks. Let LIL' celebrate with you as you accomplish your goals! 

Lock in, losers - it's study time. 

### Design

![Login Page](login.png)

![Planner Page](main_planner.png)

Here is a sequence diagram demonstrating how the user will send data to and receive data from the backend. 

```mermaid
sequenceDiagram
    actor Hayley
    Hayley->>Server: Course Information
    Hayley->>Server: Assignment Information
    Server -->>Hayley: Push Notification
    Server -->>Hayley: Celebratory Cat Facts
```

### Key features

- Login to access personal assignment details
- Input class details (name, date & time, late policy) and select a color
- Input assignment details (name, due date, course)
- Break assignments down into multiple tasks 
- Display upcoming tasks, color coded by class and organized by due date
- Send push notifications when an assignment will be due later that day 
- Celebrate whenever a task is marked as completed 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - The application will include three HTML pages: a login page, an input page, and a display page that shows upcoming assignments. There will also be a notification component that displays when a push notification is received. 
- **CSS** - Styling for the application will look good on different sized screens. Colors will pull from a calming, coordinated palette. Overall design will envoke feelings of calm focus. 
- **React** - Responds to users, allowing them to login, create classes, input assignments, make subtasks, and mark tasks as completed. Also provides backend endpoint calls. 
- **Service** - Backend service will provide endpoints for authenticating users, storing new assignments/subtasks, retrieving tasks/subtasks, marking a task as complete, and logging users out. Service will also retrieve a [random cat fact](https://catfact.ninja/) to help users celebrate every time they mark a task as complete. 
- **DB/Login** - The database will store authentication information, courses, and assignments/subtasks and their current status (either complete or incomplete). 
- **WebSocket** - When an assignment are due within three hours, a notification is broadcast to the user. 

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Git commit requirement)
- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology including your 3rd party API and use of WebSocket
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Rented EC2 server** - I did not complete this part of the deliverable.
- [ ] **Leased domain name** - I did not complete this part of the deliverable.
- [ ] **Server accessible** from my domain: [https://yourdomainnamehere.click](https://yourdomainnamehere.click) - I did not complete this part of the deliverable.

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.
- [ ] **Uses BCrypt to hash passwords** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
