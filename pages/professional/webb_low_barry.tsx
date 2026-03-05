import ProfessionalDemo from './professional_template';

const WebbLowBarryDemo = () => {
  return (
    <ProfessionalDemo
      name="Webb, Low & Barry"
      subCategory="Legal Practitioners"
      tagline="Dominant Legal Authority in Bulawayo Since 1897."
      services={[
        "Commercial & Constitutional Law",
        "Trade & Investment Advisory",
        "Conveyancing & Estate Transfers",
        "Notarial Work & Bond Registration",
        "International Arbitration"
      ]}
      trustSignals={[
        "120+ Years Professional Legacy",
        "Largest Legal Firm in Bulawayo",
        "Human Rights Award-Winning Partners",
        "Approved Specialists for Major Banks"
      ]}
      address="Haddon & Sly Bldg, 8th Ave, Bulawayo"
      phone="+263 9 64481"
      website="webblowbarry.com"
      accentColor="#1e293b" // Deep Slate
    />
  );
};

export default WebbLowBarryDemo;
