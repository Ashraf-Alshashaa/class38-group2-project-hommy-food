// import React, { Component } from "react";
// import Slider from "react-slick";
// import chefImage from "../../public/images/img_avatar.png";
// import chefRating from "../../public/images/rating.png";

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 5,
//       slidesToScroll: 5,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div id="general">
//         <h2> Top 10 chefs </h2>
//         <Slider {...settings}>
//           <div
//             className="chefCardContainer"
//             style={{ backgroundColor: "#f9a01b" }}
//           >
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Nizar</b>
//               </h4>
//               <p>Syrian</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>John</b>
//               </h4>
//               <p>Indian</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Ahmet</b>
//               </h4>
//               <p>Turkish</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Gourge</b>
//               </h4>
//               <p>Lebanese</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Mahmoud</b>
//               </h4>
//               <p>Syrian</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Nickol</b>
//               </h4>
//               <p>Dutch</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Fatih</b>
//               </h4>
//               <p>Turkish</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>John Doe</b>
//               </h4>
//               <p>Dutch</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Burak</b>
//               </h4>
//               <p>Turkish</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>

//           <div className="chefCardContainer">
//             <img
//               className="chefImg"
//               src={chefImage}
//               alt="Avatar"
//               style={{ width: "100px" }}
//             />
//             <div className="chefInfoContainer">
//               <h4>
//                 <b>Khalel</b>
//               </h4>
//               <p>Syrian</p>
//               <img
//                 className="chefRating"
//                 src={chefRating}
//                 alt="Avatar"
//                 style={{ width: "50px" }}
//               />
//             </div>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
