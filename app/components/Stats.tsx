export default function Stats() {
  const stats = [
    {
      number: '10K+',
      description: 'Professionals Trained For Exceptional Career Success',
    },
    {
      number: '200+',
      description: 'Sessions Delivered With Unmatched Learning Excellence',
    },
    {
      number: '5K+',
      description: 'Active Learners Engaged In Dynamic Courses',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-600">
            The Numbers Behind Our Success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                {stat.number}
              </div>
              <p className="text-gray-700 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
