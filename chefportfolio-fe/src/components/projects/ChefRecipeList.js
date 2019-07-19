import React from 'react';
import ChefRecipeSummary from './ChefRecipeSummary';

const ChefRecipeList = () => {
  return (
    <div className="section chef-stats">
      <ChefRecipeSummary />
      <ChefRecipeSummary />
      <ChefRecipeSummary />
    </div>
  );
};

export default ChefRecipeList;

// This is the "Dashboard" page the Chef sees right after they've logged in.

// It should have their name on the navbar on the top right

// They should be able to see what they've previously posted

// Ability to create a new post
// Cards that display what they've previously posted
// Each card should have an:

// - image
// - recipe title field
// - meal type
// - ingredients
// - instructions

// SPECIAL NOTE: (You can hard code the image in for MVP-no need to upload photos for MVP. Stretch goals will include image uploading and the use of Cloudinary API etc. )

// Ability to edit post

// Ability to delete post
