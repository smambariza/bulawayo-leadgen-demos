import MedicalDemo from '../../templates/medical/medical_template';

const UltimateRehabDemo = () => {
  return (
    <MedicalDemo
      name="Ultimate Rehabilitation Solutions"
      subCategory="Specialized Rehab Centre"
      tagline="Your Journey to Better Health Starts with Expert Rehabilitation."
      services={[
        "Precision Physiotherapy",
        "Clinical Occupational Therapy",
        "Intensive Post-Surgery Recovery",
        "Advanced Pain Management",
        "Mobility Restoration Programs"
      ]}
      trustSignals={[
        "Affiliated with Trauma Centre Bulawayo",
        "Multi-Disciplinary Specialist Team",
        "Personalized Patient-First Care",
        "Major Medical Hub Location"
      ]}
      address="Trauma Centre, Bulawayo"
      phone="Inquire via Trauma Centre"
      accentColor="#f43f5e" // Clinical Rose
    />
  );
};

export default UltimateRehabDemo;
