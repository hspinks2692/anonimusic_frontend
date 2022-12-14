# 🎤 Anonimusic 🎤

### What is Anonimusic?

Anonimusic is visually-minimal, feature-rich a site where users are signed in anonimously and are able to upload audio files, tag them and put them onto the site. Other users are able to view, listen to, and comment on the audio files. Provided the user does not leave (or refresh) the page they rea able to delete posts that they have just made. Once they leave the page, the post is on the internet forever.

This project was a collaboration (see Contributors) and was completed in 4 days in September 2022.

## Table of Contents
  -[💻 Screenshots](#screenshots)  
  -[🤔 Getting Started](#getting-started)  
  -[🤼 User Stories](#user-stories)  
  -[✨ Features & Functionality](#features-and-functionality)  
  -[🎭 Contributors](#contributors)  
  -[🐾 Next Steps](#next-steps)  
  
  ## Screenshots
   <details>\
  <summary>WireFrame and ERD</summary>
  <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FD6crYSk0USXQxl5OiQSNqC%2Fthumbnail%3Fver%3Dthumbnails%2F668c343a-daa6-4495-a0a6-8844cbe34fb6" alt="WireFrame and ERD"  style="width: 600px; padding: 20px">
   </details>
   <details>
   <summary>Home Screen</summary>
   <img src="https://i.imgur.com/z4ZNYcz.png" alt="Anonimusic Screenshot 01" style="width: 600px; padding: 20px" />
   </details>
  
   <details>
   <summary>Posts Example</summary>
    <img src="https://i.imgur.com/zKIzm6T.png" alt="Anonimusic Screenshot 02" style="width: 600px; padding: 20px" />
   </details> 
   
   <details>
   <summary>Data Returned from Cloudinary on Upload</summary>
    <img src="https://i.imgur.com/JjeCVLy.png" alt="JSON Returned from Cloudinary Upload" style="width: 600px; padding: 20px" />
   </details>  
   
   <details>
   <summary>Data Structure for each Post</summary>
    <img src="https://imgur.com/VNxsjC1.png" alt="Data Structure within MongoDB" style="width: 600px; padding: 20px" />
   </details>  
  
  
  ## Getting Started
   ### Links 
   * <a href ="https://vocal-daffodil-44e825.netlify.app/"> Frontend </a> 
   * <a href ="https://anonimusic-backend.herokuapp.com/"> Backend </a> 
 
  ## User Stories
  * A user navigates to the page and sees the logo and carousel with any news or updates
  * User scrolls through the page and listens to the post's audio. Finding a post that grabs their attention, the user decides to contribute to the conversation by adding a comment.

---

  * A user wants to contribute a post to the page.
  * User navigates to the new post option, opening the drop down and filling in the required information. 
  * Once submitted, the user sees their post populate the page and, for as long as the user maintains the same session, the user can delete their post. Once the user leaves the page or ends their session the post is no longer editable.
    
  ## Features and Functionality
   
   ### Technologies Used

Application built with MERN stack
- [x] Mongoose  
- [x] Express  
- [x] React  
- [x] NodeJS  
  
#### File Storage
* Cloudinary

#### Node Packages Utilized
*  React Audio Player - for playing audio files from cloudinary   
*  React Bootstrap - page components   
*  React Slideshow - Homepage Slideshow     


<details>
<summary>Post Component</summary>
 <img src="https://i.imgur.com/yW4BPi9.png" alt="Anonimusic Code Example 01" style="width: 600px; padding: 20px" />
</details>
  
<details>
<summary>Conditional Post Deleting</summary>
 <img src="https://i.imgur.com/uuQrFRl.png" alt="Anonimusic Code Example 02" style="width: 600px; padding: 20px" />
</details>
   
<details>
<summary>Session Initialization</summary>
 <img src="https://i.imgur.com/NhpZboU.png" alt="Anonimusic Code Example 03" style="width: 600px; padding: 20px" />
</details>

<details>
<summary>Uploading New Files and new Posts</summary>
 <img src="https://i.imgur.com/85aDARR.png" alt="Anonimusic Code Example 04" style="width: 600px; padding: 20px" />
</details>
  
  ## Contributors
  * Ben Baker - <a href="https://github.com/bbakercello">GitHub</a> - <a href="https://www.linkedin.com/in/ben-baker-cello/">LinkedIn</a>
  * Harvey Spinks - <a href="https://github.com/hspinks2692">GitHub</a> - <a href="https://www.linkedin.com/in/harvey-spinks/">LinkedIn</a>
  * Tim Rathert - <a href="https://github.com/TimRathert">GitHub</a> - <a href="https://www.linkedin.com/in/tim-rathert/">LinkedIn</a>
  
  ## Next Steps
- [ ] Search post tags
- [x] Generate Random Profile Image (Canvas generated based on session username)
- [ ] Implement Random Profile Images
- [ ] Ability to record a new audio file in the browser
- [ ] Refine styling for mobile devices
- [ ] Oxford Comma?
