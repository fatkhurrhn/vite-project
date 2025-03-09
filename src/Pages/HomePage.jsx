import React from 'react';

// Custom GitHub-style calendar component
const GitHubCalendar = ({ username }) => {
  // Generate some sample data for demonstration
  const generateContributionData = () => {
    const data = [];
    // Last 52 weeks (1 year)
    for (let week = 0; week < 52; week++) {
      const weekData = [];
      // 7 days per week
      for (let day = 0; day < 7; day++) {
        // Simulate some activity patterns
        let intensity = 0;
        
        // Create more contributions in recent months (right side)
        if (week > 40) {
          // Higher activity in recent weeks
          intensity = Math.floor(Math.random() * 4);
          
          // Create a pattern similar to the image for Jan-Feb area
          if (week > 44 && day < 4) {
            intensity = Math.floor(Math.random() * 3) + 1;
          }
        }
        
        weekData.push(intensity);
      }
      data.push(weekData);
    }
    return data;
  };

  const contributionData = generateContributionData();
  
  // Calculate total contributions
  const totalContributions = contributionData.flat().reduce((sum, val) => sum + val, 0);

  return (
    <div className="bg-gray-900 rounded-md p-4">
      <div className="flex justify-between mb-2">
        <div className="flex space-x-8">
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
          <span>Feb</span>
        </div>
      </div>
      
      <div className="grid grid-flow-col gap-1 auto-cols-min">
        {contributionData.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-1">
            {week.map((intensity, dayIndex) => {
              // Map intensity to color classes
              const colorClass = intensity === 0 
                ? 'bg-gray-800' 
                : intensity === 1 
                  ? 'bg-emerald-900' 
                  : intensity === 2 
                    ? 'bg-emerald-700' 
                    : 'bg-emerald-500';
              
              return (
                <div 
                  key={dayIndex} 
                  className={`w-3 h-3 rounded-sm ${colorClass}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-2 text-sm text-gray-400">
        <div>{totalContributions} contributions in the last year</div>
        <div className="flex items-center">
          <span className="mr-1">Less</span>
          <div className="flex space-x-1 items-center">
            <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
            <div className="w-3 h-3 bg-emerald-900 rounded-sm"></div>
            <div className="w-3 h-3 bg-emerald-700 rounded-sm"></div>
            <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
          </div>
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">A</div>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">Writings</a>
            <a href="#" className="text-white hover:text-gray-300">Guestbook</a>
          </div>
        </nav>
        
        {/* Profile Section */}
        <section>
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="mt-8 md:mt-0 space-y-4 md:w-2/3">
              <h1 className="text-2xl font-bold text-white">Abyan Raditya 🪴</h1>
              <p className="text-gray-400">FrontEnd Developer</p>
              <p className="text-gray-300">
                I'm a frontend developer specializing in building responsive and 
                user-friendly web applications. My focus is on creating clean, 
                efficient, and maintainable code.
              </p>
            </div>
            <div className="relative">
              <img 
                width={130} 
                height={130} 
                src="/api/placeholder/130/130" 
                className="rounded-full grayscale hover:grayscale-0 transition duration-150" 
                alt="Profile Avatar"
              />
              <div className="absolute top-0 right-0 -rotate-12">
                <div className="px-2 py-1 bg-emerald-700 rounded-sm border-2 border-emerald-900 text-white">
                  456
                </div>
              </div>
              <div className="absolute bottom-0 right-16">
                <svg className="w-12 h-12 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Custom GitHub Calendar Section */}
          <div className="mt-16">
            <GitHubCalendar username="fatkhurrhn" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;