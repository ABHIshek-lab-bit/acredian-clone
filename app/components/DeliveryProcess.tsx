export default function DeliveryProcess() {
  const steps = [
    {
      number: '1',
      title: 'Skill Gap Analysis',
      description: 'Assess team skill gaps and developmental needs.',
      icon: '🔍',
    },
    {
      number: '2',
      title: 'Customized Training Plan',
      description: 'Create a tailored roadmap addressing organizational goals.',
      icon: '📋',
    },
    {
      number: '3',
      title: 'Flexible Program Delivery',
      description: 'Deliver adaptable programs aligned with industry and organizational needs.',
      icon: '🎯',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Deliver Results That Matter?
          </h2>
          <p className="text-xl text-gray-600">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
              )}
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full mb-6 mx-auto">
                  {step.number}
                </div>
                <div className="text-5xl text-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
