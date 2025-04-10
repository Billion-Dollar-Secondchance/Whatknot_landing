import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbztgEGKhyZPH6H-CPsyJO2IQj6TFNJauP5fP3YPJ3G68-MO6orW_X6Znw2cNtZcC-1SfA/exec",
        {
          method: "POST",
          mode: "no-cors", // This avoids CORS issues but means you won't get a response body
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, mobile }),
        }
      );

      // Because of 'no-cors', we can't read the actual response
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });

      setName('');
      setMobile('');
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to join the waitlist. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileChange = (e) => {
  const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 10); // remove non-digits, max 10
  setMobile(onlyNums);
};

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">Join the Waitlist!</h2>
      <br/>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/70 backdrop-blur-sm text-black placeholder-black/70 border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/30"
          />
        </div>

        <div>
          <input
  type="tel"
  placeholder="Your Mobile Number"
  value={mobile}
  onChange={handleMobileChange}
  className="w-full px-4 py-3 rounded-full bg-white/70 backdrop-blur-sm text-black placeholder-black/70 border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/30"
/>
          
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 bg-black text-white rounded-full font-medium transition-all duration-200 hover:bg-opacity-80 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Get an Invite'}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
