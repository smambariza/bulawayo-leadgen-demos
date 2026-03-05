import MedicalDemo from '../../templates/medical/medical_template';

const PhysiomedDemo = () => {
  return (
    <MedicalDemo
      name="Physiomed Centre"
      subCategory="Physiotherapy Clinic"
      tagline="Recover Faster. Move Better. Live Pain-Free in Bulawayo."
      services={[
        "Specialized Sports Injury Rehab",
        "Clinical Post-Operative Recovery",
        "Neurological Physiotherapy",
        "Joint & Spinal Manipulation",
        "Customized Rehabilitation Plans"
      ]}
      trustSignals={[
        "Medpages Verified Organization",
        "Expert Clinical Specialists",
        "Central Bulawayo Access",
        "Trusted Referral Network"
      ]}
      address="Medical Centre, Bulawayo"
      phone="Contact for Appointment"
      accentColor="#10b981" // Health Green
    />
  );
};

export default PhysiomedDemo;
