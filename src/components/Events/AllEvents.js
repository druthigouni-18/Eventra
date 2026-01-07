import React, { useState } from 'react';
import Dc from './DanceClub.jpeg';  
import Council from './Council.jpeg'; 
import GDG from './GDG.jpeg';   
import GDG1 from './GDG1.jpeg'; 
import Nss1 from './Nss1.jpeg';     
import Nss2 from './Nss2.jpeg';     
import Nss3 from './Nss3.jpeg';     



function AllEvents() {

  const posts = [
    {
      id: 1,img: Dc,
      caption: "Beautiful sunset 🌅 Feeling peaceful and calm."},
    {
      id: 2,img: Council,
      caption: " Join the IIC Community – Where Ideas Come to Life * Explore innovation and entrepreneurship beyond the classroom * Take part in workshops, hackathons, and idea-pitching sessions * Collaborate with like-minded students and industry mentors * Develop skills in leadership, teamwork, and problem-solving * Get opportunities to showcase your ideas at various levels Register here to join the community: https://docs.google.com/forms/d/e/1FAIpQLSd3FEKj6n6QjHcd9rvJCnpn4FJhSsRG9-wIjip35xvhqaxiNA/viewform?usp=header If you have ideas, curiosity, or the passion to build something new, IIC is the place for you.Open to students of 2nd year. Be a part of the innovation culture. Also follow us on the Instagram for regular updates! https://www.instagram.com/iic_cmrithyd?igsh=Z3RucWw2NDk2OGo4      "
    },
    {
      id: 3,img: GDG,
      caption: "Travel memories ✈️ Exploring new places."
    },
    {
      id: 4,img: GDG1,
      caption: "Travel memories ✈️ Exploring new places."
    },
    {
      id: 5,img: Nss1,
      caption: "Travel memories ✈️ Exploring new places."
    },
    {
      id: 6,img: Nss2,
      caption: "Travel memories ✈️ Exploring new places."
    },
    {
      id: 7,img: Nss3,
      caption: "Travel memories ✈️ Exploring new places."
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div style={styles.container}>

      {/* POSTS GRID */}
      <div style={styles.grid}>
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.img}
            alt="post"
            style={styles.post}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedPost && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <span
              style={styles.close}
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </span>

            {/* IMAGE */}
            <img
              src={selectedPost.img}
              alt="post"
              style={styles.modalImg}
            />

            {/* CAPTION */}
            <div style={styles.captionBox}>
              <h4>Club Name</h4>
              <p>{selectedPost.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    margin: "1px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    maxWidth: "600px",
    margin: "auto"
  },
  post: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    cursor: "pointer",
    border: "1px solid black",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "white",
    display: "flex",
    width: "70%",
    maxWidth: "900px",
    position: "relative"
  },
  modalImg: {
    width: "60%",
    objectFit: "cover"
  },
  captionBox: {
    width: "40%",
    padding: "20px",
    textAlign: "left"
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "25px",
    cursor: "pointer"
  }
};

export default AllEvents;
