const ProjectsCard = ({ project }) => {
    const { name, image, live, repository, description, features, technologies } = project;
    return (
      <div className="flex justify-center mb-8">
        <div className="card border border-purple-700 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl">
          <figure className="px-4 pt-4 md:px-10 md:pt-10">
            <img src={image} alt={name} className="rounded-xl w-full h-auto" />
          </figure>
          <div className="card-body text-white items-center text-center">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
            <p className="text-sm md:text-base lg:text-lg">{description}</p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="card-actions">
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <button className="text-purple-700">View Live Project</button>
                </a>
              </div>
              <button
                className="text-purple-700"
                onClick={() => document.getElementById(`modal_${name}`).showModal()}
              >
                View Details
              </button>
            </div>
            <dialog id={`modal_${name}`} className="modal text-black">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Features:</h3>
                <p className="py-2 text-sm md:text-base lg:text-lg">{features}</p>
                <h3 className="font-bold text-lg">Technologies:</h3>
                <p className="py-2 text-sm md:text-base lg:text-lg">{technologies}</p>
                <a href={repository} target="_blank" rel="noopener noreferrer">
                  <button className="text-cyan-400 mt-4">View Code</button>
                </a>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectsCard;
  
