// const myPosts = [
//   { title: "Post One", body: "This is post one body" },
//   { title: "Post two", body: "This is post two body" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     myPosts.forEach((post) => {
//       console.log(post.title);
//     });
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       myPosts.push(post);
//       const error = false;
//       console.log("hello");
//       if (!error) {
//         resolve();
//       } else {
//         reject("something went wrong");
//       }
//     }, 2000);
//   });
// }

// // createPost({ title: "post 3", body: "this is the post 3 body " })
// //   .then(getPosts)
// //   .catch((e) => {
// //     console.log(e);
// //   });

// async function init() {
//   try {
//     await createPost({ title: "post 3", body: "this is the post 3 body " });
//     getPosts();
//   } catch {}

//   getPosts();
// }

// init();

// const props = ["name", "address", "age"];

// const person = {
//   name: "steve",
//   address: "jhdksfjsd",
//   age: " 35",
// };

// for (let item of props) {
//   console.log(person[item]);
// }
