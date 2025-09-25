// Adult Content Warning Component

const AdultContentNotice = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md mx-auto text-center border border-red-600">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-4">Content Notice</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          This site now includes adult content. You must be 18 years or older to continue.
          By proceeding, you acknowledge that you are of legal age and consent to viewing
          mature content.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onAccept}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            I am 18+ (Continue)
          </button>
          <button
            onClick={onDecline}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Exit
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Adult content is filtered and moderated according to platform policies.
        </p>
      </div>
    </div>
  );
};

export default AdultContentNotice;