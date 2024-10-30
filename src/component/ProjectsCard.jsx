import { div } from "framer-motion/client";

const ProjectsCard = ({ project }) => {
  const {
    name,
    image,
    live,
    repository1,
    repository2,
    description,
    features,
    technologies,
  } = project;
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-80 h-80">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 group-active:opacity-100 transition-opacity duration-300 z-10"></div>

      {/* Image */}
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        src={image}
        alt=""
      />

      {/* Title */}
      <div className="absolute -bottom-full left-1/2 transform -translate-x-1/2 group-hover:bottom-24 transition-all duration-700 text-white text-center py-2 z-20">
        {name}
      </div>

      {/* Corner Buttons */}
      <div className="absolute -bottom-full w-full px-5 flex justify-between group-hover:bottom-5 transition-all duration-700 z-20">
        <a href={live}>
          <button className="text-white border-2 border-white px-3 py-1 rounded-lg transition-colors hover:bg-white hover:text-black">
            Live
          </button>
        </a>
        <button
          className="text-white border-2 border-white px-3 py-1 rounded-lg transition-colors hover:bg-white hover:text-black"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Code
        </button>
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-64 h-40 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button
              className="btn btn-sm btn-circle btn-ghost text-gray-500 absolute top-2 right-2"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              ✕
            </button>
          </div>
          <div className="flex justify-around mt-6">
            <a
              href={repository1}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
            >
              Client
            </a>
            <a
              href={repository2}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
            >
              Server
            </a>
          </div>
        </div>
      </dialog>
    </div>

    // <div className="flex justify-center mb-8">
    //   <div className="card border border-purple-700 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl">
    //     <figure className="px-4 pt-4 md:px-10 md:pt-10">
    //       <img src={image} alt={name} className="rounded-xl w-full h-auto" />
    //     </figure>
    //     <div className="card-body text-white items-center text-center">
    //       <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
    //       <div className="flex flex-col md:flex-row gap-4 mt-6">
    //         {/* <div className="card-actions">
    //           <a href={live} target="_blank" rel="noopener noreferrer">
    //             <button className="text-purple-700">View Live Project</button>
    //           </a>
    //         </div> */}
    //         {/* <button
    //           className="text-purple-700"
    //           onClick={() => document.getElementById(`modal_${name}`).showModal()}
    //         >
    //           View Details
    //         </button> */}
    //       </div>
    //       <dialog id={`modal_${name}`} className="modal text-black">
    //         <div className="modal-box">
    //           <form method="dialog">
    //             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    //               ✕
    //             </button>
    //           </form>
    //           <h3 className="font-bold text-lg">Features:</h3>
    //           <p className="py-2 text-sm md:text-base lg:text-lg">{features}</p>
    //           <h3 className="font-bold text-lg">Technologies:</h3>
    //           <p className="py-2 text-sm md:text-base lg:text-lg">{technologies}</p>
    //           <a href={repository} target="_blank" rel="noopener noreferrer">
    //             <button className="text-cyan-400 mt-4">View Code</button>
    //           </a>
    //         </div>
    //       </dialog>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectsCard;
