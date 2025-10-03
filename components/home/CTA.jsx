import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#3A6EA5] to-[#1E3A5F] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="text-xl font-medium mb-8">Schedule your first hypnotherapy session today and start your journey to better mental health.</p>
        <button className="bg-gradient-to-r from-[#1E3A5F] to-[#3A6EA5] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#3A6EA5] hover:to-[#1E3A5F] transition duration-300 shadow-lg hover:shadow-xl">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
