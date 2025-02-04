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
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-100 h-100">
      {/* Overlay (Pseudo-element using group-hover) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] opacity-0 group-hover:opacity-85 transition-opacity duration-400 z-10"></div>

      {/* Image */}
      <img
        className="w-full h-[230px] object-cover group-hover:scale-110 transition-transform duration-500"
        src={image}
        alt={name}
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
  );
};

export default ProjectsCard;
