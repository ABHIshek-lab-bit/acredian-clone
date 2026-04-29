export default function DomainExpertise() {
  const domains = [
    {
      title: 'Product & Innovation Hub',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Gen-AI Mastery',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Leadership Elevation',
      icon: '👔',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tech & Data Insights',
      icon: '💻',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Operations Excellence',
      icon: '⚙️',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Digital Enterprise',
      icon: '🌐',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Fintech Innovation Lab',
      icon: '💰',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Domain Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-90 group-hover:opacity-100 transition`}></div>
              <div className="relative p-8 text-white">
                <div className="text-5xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold">{domain.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
