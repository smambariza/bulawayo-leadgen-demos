import ProfessionalDemo from './professional_template';

const TripleADesignDemo = () => {
  return (
    <ProfessionalDemo
      name="Triple A Design Studio"
      subCategory="Architectural Specialists"
      tagline="Aesthetically Pleasing Contemporary Design for Zimbabwe."
      services={[
        "Modern Architectural Design",
        "Comprehensive 3D Rendering",
        "Total Interior Design",
        "Building Facade Specialists",
        "Project Management & Planning"
      ]}
      trustSignals={[
        "Modern Aesthetic Specialists",
        "Professional Designer Partnership",
        "Portfolio: House RNA, MKV, PMK",
        "800+ Active Social Community"
      ]}
      address="Suite 5, Bradfield Mall, Bulawayo"
      phone="+263 77 328 0509"
      website="tripleadesignstudio.com"
      accentColor="#0f172a" // Midnight Navy
    />
  );
};

export default TripleADesignDemo;
