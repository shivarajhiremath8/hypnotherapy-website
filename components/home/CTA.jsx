import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#3A6EA5] to-[#1E3A5F] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl font-medium mb-8">
          Schedule your first hypnotherapy session today and start your journey to better mental health.
        </p>

        {/* Centered Outline Button */}
        <div className="flex justify-center">
          <PrimaryButton
            variant="outline"
            size="medium"
            as="a"
            href="https://wa.me/917993960056?text=Hi!%20I%20would%20like%20to%20book%20a%20hypnotherapy%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full"
          >
            Get Started Now
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CTA;
