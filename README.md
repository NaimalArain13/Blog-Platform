# Blog Platform

Welcome to the **Blog Platform** project! This project is a demonstration of Next.js's powerful routing features, including dynamic and nested dynamic routing. The platform allows users to view a list of blog posts, navigate to individual blog details, and explore the associated comments and replies.

## Project Overview

The project showcases the following key concepts:
- **Dynamic Routing**: Used to create routes for individual blog posts.
- **Nested Dynamic Routing**: Implemented to handle comments and their replies on individual blog posts.
- **Data Handling**: The blog data, including comments and replies, is managed through an array of objects.
- **Styling**: The project features responsive design and modern styling techniques.

## Features

- **Blog List**: Displays a list of blog posts in a grid format, each post contained within a styled box.
- **Blog Details**: Allows users to click on a blog title to view detailed content, including an author section and the main body of the post.
- **Comments Section**: Users can explore comments related to each blog post. Each comment is displayed with its author and content.
- **Replies**: Nested dynamic routing allows users to click on a comment and view all replies related to that comment.

## Step-by-Step Development

### 1. Setting Up the Project
I started by setting up a new Next.js project and structuring the folders to support dynamic routing. This involved creating a `blogs` directory with `[blogid]` dynamic route and a nested `[commentid]` route for handling replies.

### 2. Creating the Dataset
A mock dataset was created, representing blog posts with IDs, titles, content, authors, comments, and replies. This data was stored as an array of objects and imported into the relevant components.

### 3. Implementing Dynamic Routing
Dynamic routing was implemented to display individual blog posts based on their ID. The `[blogid]` route in the `blogs` directory fetches the corresponding blog post from the dataset and displays its content.

### 4. Implementing Nested Dynamic Routing
Nested dynamic routing was added to handle the display of comments and replies. The `[commentid]` route within the `comments` directory fetches the relevant comment data and displays the replies under the comment.

### 5. Implementing Pagination
Pagination is implemented to divide the list of blog posts across multiple pages. This enhances the user experience by preventing an overload of content on a single page.

### 6. Styling the Application
Styling was applied using Tailwind CSS to ensure a modern and responsive design. The blog list is displayed in a grid format, with hover effects added to enhance user interaction.

### 7. Handling Errors
Error handling was implemented to manage cases where a blog post or comment is not found. Users are provided with a user-friendly message in such cases.



## How to Use

To run this project locally, clone the repository and install the necessary dependencies. Then, start the development server:

```bash
git clone <repository-url>
cd blog-platform
npm install
npm run dev
