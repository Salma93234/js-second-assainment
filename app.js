// const div = document.getElementById('para');

// const loadData = () => {
//   fetch(`https://openapi.programming-hero.com/api/videos/categories`)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data.data);
//       data.data.forEach((a) => {
//         const para = document.createElement('p');
//         para.addEventListener('click', function () {
//           displayCategories(a.category_id);
//         });
//         para.innerText = a.category;
//         div.appendChild(para);
//       });
//     });
// };

// const displayCategories = (category_id) => {
//   fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data)
//       // if (data.status == "true") {
//       data.data.forEach((element) => {
//         const showData = document.getElementById('card-section');

//         const card = document.createElement('div');
//         card.classList.add('box');

//         card.innerHTML = `
//             <img class="box-img" src=${element.thumbnail} alt="">
//             <div class="card-display">
//              <img class="profile-img" src="${element.authors[0].profile_picture}" alt="">
//              <h3 class="card-title">${element.title}</h3>
//              </div>
//              <p class="card-text">Posted by: ${element.authors[0].profile_name}</p>
//              <p class="card-text">Views: ${element.others.views}</p>
//             `;
//         showData.appendChild(card);
//       });
//     });
// };

// loadData();





