import ProfessionalDemo from './professional_template';

const BenBaronPartnersDemo = () => {
  return (
    <ProfessionalDemo
      name="Ben Baron & Partners"
      subCategory="Legal Practitioners"
      tagline="Unparalleled Integrity in Property and Notarial Law."
      services={[
        "Subdivisions & Consolidations",
        "Sectional Title Specialists",
        "Property & Estate Transfers",
        "Mortgage Bond Registration",
        "Strategic Notarial Work"
      ]}
      trustSignals={[
        "Strategic Webb, Low & Barry Incorporation",
        "Historic Bulawayo Legal Pillar",
        "Expert Conveyancing Lead",
        "Decades of Private Client Trust"
      ]}
      address="11 Luton Street, Belmont, Bulawayo"
      phone="+263 29 226 4481"
      accentColor="#334155" // Cool Slate
    />
  );
};

export default BenBaronPartnersDemo;
