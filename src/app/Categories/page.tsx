// "use client";
// import { useState } from "react";

// export default function CategoriesPage(){

// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// // Campaign card component for individual listings
// const CampaignCard = ({ title, imageUrl, amount, raised, author, supporters }) => {
//   return (
//     <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//       <img
//         src={imageUrl || '/api/placeholder/400/300'}
//         alt={title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
//         <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
//           <span>${raised || 0}</span>
//           <span>raised of ${amount || 0}</span>
//         </div>
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center">
//             <div className="w-8 h-8 bg-gray-300 rounded-full" />
//             <span className="ml-2 text-sm text-gray-600">{author}</span>
//           </div>
//           <span className="text-sm text-gray-500">{supporters || 0} supporters</span>
//         </div>
//       </div>
//     </Card>
//   );
// };

// // Category page component
// const CategoryPage = ({ category }) => {
//   const [page, setPage] = useState(1);
//   const [campaigns, setCampaigns] = useState([
//     {
//       id: 1,
//       title: "First Campaign",
//       amount: 1000,
//       raised: 500,
//       author: "John Doe",
//       supporters: 25
//     },
//     // Add more initial campaigns...
//   ]);

//   const loadMore = () => {
//     // Simulate loading more campaigns
//     const newCampaigns = [
//       {
//         id: campaigns.length + 1,
//         title: `Campaign ${campaigns.length + 1}`,
//         amount: 1000,
//         raised: Math.floor(Math.random() * 1000),
//         author: "John Doe",
//         supporters: Math.floor(Math.random() * 100)
//       },
//       // Add more campaigns...
//     ];
   
//     setCampaigns([...campaigns, ...newCampaigns]);
//     setPage(page + 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="relative h-64 bg-gray-900">
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 flex items-center justify-center text-center">
//           <div>
//             <h1 className="text-4xl font-bold text-white mb-4">{category}</h1>
//             <p className="text-lg text-white/90">{campaigns.length} campaigns available in this category</p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {campaigns.map((campaign) => (
//             <CampaignCard
//               key={campaign.id}
//               {...campaign}
//             />
//           ))}
//         </div>
       
//         <div className="mt-12 text-center">
//           <Button
//             onClick={loadMore}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-md"
//           >
//             Load more
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main component that handles routing between pages
// const FundraisingPages = () => {
//   const [currentCategory, setCurrentCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setCurrentCategory(category);
//     // Update URL without react-router
//     window.history.pushState({}, '', `/category/${category.toLowerCase()}`);
//   };

//   // If we're on a category page, show that category's campaigns
//   if (currentCategory) {
//     return <CategoryPage category={currentCategory} />;
//   }

//   // Otherwise show the category list
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h1>
//           <p className="text-lg text-gray-600">Find the cause you are looking for by category</p>
//         </div>
       
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {['Animals', 'Business', 'Charity', 'Community', 'Competitions'].map((category) => (
//             <Card
//               key={category}
//               className="relative overflow-hidden cursor-pointer group transition-transform hover:scale-105"
//               onClick={() => handleCategoryClick(category)}
//             >
//               <div className="absolute inset-0 bg-black/40 z-10" />
//               <img
//                 src={`/api/placeholder/400/300`}
//                 alt={category}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 z-20 flex items-center justify-center">
//                 <h3 className="text-white font-semibold text-xl">{category}</h3>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// } 