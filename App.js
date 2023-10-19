// import React, { useEffect } from 'react';
// import postStore from './store';
// import './App.css';

// function App() {
//   const { posts, fetchPosts } = postStore();

//   useEffect(() => {
//     fetchPosts();
//   }, [fetchPosts]); 

//   ///What is dependency array in useEffect? 
//   //is the fetchPosts required?

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Post List</h1>
//       </header>
//       <div className="Posts">
//         {posts.map((post) => (
//           <div key={post.id} className="Card">
//             <h3 className="title">{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import postStore from './store';
// import './App.css';
import {Button,Card,CardContent,Typography,Grid,AppBar,Toolbar} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const { posts, fetchPosts, deletePost } = postStore();
  useEffect(() => {
    fetchPosts().then(() => {
    });
  }, [fetchPosts]);

  const handleDeletePost = (postId) => {
    deletePost(postId);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar b>
          <Typography variant="h6">Post List</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: '#b0bec5'
              
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

