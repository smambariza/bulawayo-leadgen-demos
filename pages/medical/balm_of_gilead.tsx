import MedicalDemo from './medical_template';

const BalmOfGileadDemo = () => {
  return (
    <MedicalDemo
      name="Balm of Gilead Dental Clinic"
      subCategory="Dental Clinic"
      tagline="Transforming Smiles in Bulawayo with Gentle, Expert Dental Care."
      services={[
        "Root Canal Treatments",
        "Painless Tooth Extractions",
        "Comprehensive Periodontitis Treatment",
        "Preventative Gum Disease Care",
        "Modern Restorative Dentistry"
      ]}
      trustSignals={[
        "1,400+ Active Community Followers",
        "5.0 Rating for Patient Care",
        "Dr. Moreblessing Mawire-Mugoni (Practice Lead)",
        "CBD Convenience (Tongogara & 5th)"
      ]}
      address="4 Elnat Flat, 59 J Tongogara Cnr 5th Ave, Bulawayo"
      phone="+263 71 926 2660"
      accentColor="#0ea5e9" // Medical Blue
    />
  );
};

export default BalmOfGileadDemo;
