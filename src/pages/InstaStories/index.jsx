// import Logo from "../../../assets/Images/logo.png";
// import { useState, useEffect } from "react";
// import "./index.scss";
// import Background1 from "../../../assets/Images/storiesBackground1.png";
// import Background2 from "../../../assets/Images/storiesBackground2.png";
// import Background3 from "../../../assets/Images/storiesBackground3.png";
// import Background4 from "../../../assets/Images/storiesBackground4.png";
// import profilePic from "../../../assets/Images/sandeep.png";

// const Welcome = (props) => {
//   const [stage, setStage] = useState(0);
//   const [name, setName] = useState("Sandeep");
//   const [profileImg, setProfileImg] = useState(profilePic);
//   const [currentProgress, setCurrentProgress] = useState(0);
//   const [prevProgress, setPrevProgress] = useState(0);
//   const progressStep = 3;
//   const storyDuration = 4000;
//   const content = [
//     {
//       text: "You have the chance of being an early members of something incredible.",
//       background: Background1,
//     },
//     {
//       title: "OUR INTEGRATED PORTFOLIO",
//       text: "Designed by experts based on award-winning science.",
//       background: Background2,
//     },
//     {
//       title: "SUPERIOR RETURNS RISK PROTECTION",
//       text: "A personalised portfolio created for you, that makes high performing investing effortless.",
//       background: Background3,
//     },
//     {
//       title: "ARE YOU READY TO START?",
//       text: "It's time your money worked as hard as you do.",
//       background: Background4,
//     },
//   ];

//   const handleRedirection = () => {
//     props.history.push("/integratedPortfolio");
//   };

//   const handleMoveToNextStage = () => {
//     if (stage < 3) {
//       setPrevProgress(0);
//       setCurrentProgress(0);
//       setStage(stage + 1);
//     }
//   };

//   useEffect(() => {
//     if (currentProgress >= 100 && stage < 3) handleMoveToNextStage();
//     else if (stage <= 3 && currentProgress <= 100) {
//       if (prevProgress <= currentProgress) {
//         setPrevProgress(currentProgress);
//         setTimeout(() => {
//           setCurrentProgress(currentProgress + progressStep);
//         }, (storyDuration * progressStep) / 100);
//       } else setPrevProgress(0);
//     }
//   }, [currentProgress]);

//   const welcomeContentDOM = () => {
//     if (stage === 0) {
//       return (
//         <div className="pageContent">
//           <div className="userDetails">
//             <span className="welcomeText">WELCOME</span>
//             <div className="userName">{name}</div>
//             <img src={profileImg} alt="profilePic" className="profilePic" />
//           </div>
//           <div className="pageText">{content[stage].text}</div>
//         </div>
//       );
//     } else if (stage === 1) {
//       return (
//         <div className="pageContent">
//           <div className="pageTitle">{content[stage].title}</div>
//           <div className="pageText">{content[stage].text}</div>
//         </div>
//       );
//     } else if (stage === 2) {
//       return (
//         <div className="pageContent">
//           <div className="pageTitle">{content[stage].title}</div>
//           <div className="pageText">{content[stage].text}</div>
//         </div>
//       );
//     } else if (stage === 3) {
//       return (
//         <div className="pageContent">
//           <div className="pageTitle">{content[stage].title}</div>
//           <div className="pageText">{content[stage].text}</div>
//           <button onClick={handleRedirection} className="proceedBtn">
//             Proceed
//           </button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div onClick={handleMoveToNextStage} className="welcomeStories">
//       <div className="progressBarContainer">
//         {content.map((video, index) => {
//           return (
//             <div className="progressBarSegment" key={index}>
//               <div
//                 className="progressBarProgression"
//                 style={{
//                   width:
//                     stage > index
//                       ? "100%"
//                       : stage === index
//                       ? `${currentProgress}%`
//                       : "0%",
//                   transition: `width ${
//                     storyDuration / (1000 * progressStep * 2)
//                   }s`,
//                 }}
//               ></div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="welcomeStoriesContent">
//         <img src={Logo} alt="logo" className="logo" />
//         {welcomeContentDOM()}
//       </div>
//       {stage >= 0 && (
//         <img
//           src={content[stage].background}
//           alt="backgroundImage"
//           className="backgroundImage"
//         />
//       )}
//     </div>
//   );
// };

// export default Welcome;
