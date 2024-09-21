// import React from "react";

// const Icloud = () => {
//   return (
//     <div
//       className="min-h-screen pt-28 text-2xl bg-cover bg-no-repeat bg-center"
//       style={{ backgroundImage: url("/Images/bg.jpg") }}
//     >
//       <div className="mx-80 my-20 grid grid-cols-3 gap-12 items-center">
//         <div className="p-10 bg-slate-200 rounded-3xl h-[25rem] hover:scale-105 overflow-hidden">
//           <img src="Images/user.png" className="h-[7rem] rounded-full" />
//           <h1 className="text-4xl font-bold mt-8">Devansh</h1>
//           <h2 className="text-2xl normal-case mt-2">devubhai@gmail.com</h2>
//           <p className="text-2xl font-bold normal-case mt-8">iCloud</p>
//         </div>
//         <div className="col-span-2 bg-white rounded-3xl h-[25rem] hover:scale-105 overflow-hidden">
//           <div className="h-[25%] bg-slate-200 ">
//             <div className="flex p-4 items-center">
//               <img
//                 src="Images/photos.webp"
//                 alt=""
//                 className="h-[4rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-2xl font-bold">Photos</h1>
//                 <p className="text-xl  normal-case">
//                   Library 2 Photos, 2 Videos
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-4 gap-0 overflow-hidden">
//             <img
//               src="SliderImages/bg12.jpg"
//               alt=""
//               className="h-[13rem] w-full"
//             />
//             <img
//               src="SliderImages/bg19.jpg"
//               alt=""
//               className="h-[13rem] w-full"
//             />
//             <img
//               src="SliderImages/bg24.jpg"
//               alt=""
//               className="h-[13rem] w-full"
//             />
//             <img
//               src="SliderImages/bg20.jpg"
//               alt=""
//               className="h-[13rem] w-full"
//             />
//           </div>
//           <div className="ml-4 mt-9">
//             <a
//               href="#"
//               className="p-2 text-2xl font-bold bg-slate-300 rounded-lg text-white"
//             >
//               &bull;&bull;&bull;
//             </a>
//           </div>
//         </div>
//         <div className="col-span-2 bg-white rounded-3xl h-[27rem] hover:scale-105 overflow-hidden">
//           <div className="h-[25%] bg-slate-200 ">
//             <div className="flex p-4 items-center">
//               <img
//                 src="Images/drive.jpg"
//                 alt=""
//                 className="h-[4rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-2xl font-bold">Drive</h1>
//                 <p className="text-xl  normal-case">Recents</p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-y-4 gap-x-4 p-2 h-[17rem] overflow-hidden">
//             <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
//               <img
//                 src="Images/pdf.png"
//                 alt=""
//                 className="h-[2.5rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-[1.35rem]">Devu</h1>
//                 <p className="text-xl text-slate-400">PDF</p>
//               </div>
//             </div>
//             <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
//               <img
//                 src="Images/pdf.png"
//                 alt=""
//                 className="h-[2.5rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-[1.35rem]">Devu</h1>
//                 <p className="text-xl text-slate-400">PDF</p>
//               </div>
//             </div>
//             <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
//               <img
//                 src="Images/pdf.png"
//                 alt=""
//                 className="h-[2.5rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-[1.35rem]">Devu</h1>
//                 <p className="text-xl text-slate-400">PDF</p>
//               </div>
//             </div>
//             <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
//               <img
//                 src="Images/pdf.png"
//                 alt=""
//                 className="h-[2.5rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-[1.35rem]">Devu</h1>
//                 <p className="text-xl text-slate-400">PDF</p>
//               </div>
//             </div>
//             <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
//               <img
//                 src="Images/pdf.png"
//                 alt=""
//                 className="h-[2.5rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-[1.35rem]">Devu</h1>
//                 <p className="text-xl text-slate-400">PDF</p>
//               </div>
//             </div>
//           </div>
//           <div className="ml-4 mt-4">
//             <a
//               href="#"
//               className="p-2 text-2xl font-bold rounded-lg text-black"
//             >
//               &bull;&bull;&bull;
//             </a>
//           </div>
//         </div>
//         <div className="bg-white rounded-3xl h-[27rem] hover:scale-105 overflow-hidden">
//           <div className="h-[25%] bg-slate-200 ">
//             <div className="flex p-4 items-center">
//               <img
//                 src="Images/notes.png"
//                 alt=""
//                 className="h-[4rem] rounded-lg"
//               />
//               <div className="ml-6">
//                 <h1 className="text-2xl font-bold">Notes</h1>
//                 <p className="text-xl normal-case">All iCloud</p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 px-12 pt-2 gap-y-2 text-[1.4rem]">
//             <div className="p-2 flex flex-col shadow-sm hover:bg-slate-100">
//               <div>Balance</div>
//               <div className="flex">
//                 <p>13/09/24</p>
//                 <p className="ml-4 text-slate-400">4000</p>
//               </div>
//             </div>
//             <div className="p-2 flex flex-col shadow-sm hover:bg-slate-100">
//               <div>Balance</div>
//               <div className="flex">
//                 <p>13/09/24</p>
//                 <p className="ml-4 text-slate-400">4000</p>
//               </div>
//             </div>
//             <div className="p-2 flex flex-col shadow-sm hover:bg-slate-100">
//               <div>Balance</div>
//               <div className="flex">
//                 <p>13/09/24</p>
//                 <p className="ml-4 text-slate-400">4000</p>
//               </div>
//             </div>
//           </div>
//           <div className="ml-4 mt-4">
//             <a
//               href="#"
//               className="p-2 text-2xl font-bold rounded-lg text-black"
//             >
//               &bull;&bull;&bull;
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Icloud;
