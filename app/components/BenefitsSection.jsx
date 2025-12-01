export default function BenefitsSection() {
const benefits = [
{ title: "Fast Delivery", desc: "Rapid development sprints." },
{ title: "Expert Mentors", desc: "Top-level professionals guiding you." },
{ title: "Scalable Solutions", desc: "Architectures built for long-term growth." },
{ title: "Affordable Packages", desc: "Best value for startups & enterprises." },
];

return ( <section id="benefits" className="py-16 px-6 lg:px-0 bg-orange-50"> <div className="max-w-6xl mx-auto text-center"> <h2 className="text-3xl font-semibold">Key Benefits</h2>


    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((b) => (
        <div key={b.title} className="p-6 bg-white border rounded-lg">
          <h4 className="font-semibold">{b.title}</h4>
          <p className="mt-2 text-sm text-slate-500">{b.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
