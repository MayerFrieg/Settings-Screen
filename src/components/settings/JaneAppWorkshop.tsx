export default function JaneAppWorkshop() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Workshop</h1>

      {/* Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to Jane's Workshop; a place where we work aloud, let you try out features and updates in progress, and capture your feedback. All features are secure and ready to use with real patient data. While fully functional, these features may evolve, improve, or pivot based on your feedback.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You can create detailed{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline font-medium">
            feedback and requests here
          </a>
          . Jump in!
        </p>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>
        
        {/* Empty content area - where workshop features would appear */}
        <div className="min-h-[400px]">
          {/* This area would contain workshop features and content */}
        </div>
      </div>
    </div>
  );
}

