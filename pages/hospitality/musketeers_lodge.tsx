import HospitalityDemo from '../../templates/hospitality/hospitality_template';

const MusketeersLodgeDemo = () => {
  return (
    <HospitalityDemo
      name="Musketeers Lodge"
      subCategory="Historic Lodge & B&B"
      tagline="True Zimbabwean Hospitality Set in Serene, Lush Gardens."
      services={[
        "Full English Breakfast",
        "Dinners on Request",
        "Restaurant & Bar",
        "Outdoor Playground",
        "En-suite Garden Rooms"
      ]}
      trustSignals={[
        "9.4 Exceptional Guest Rating",
        "1,800+ Social Community",
        "25+ Years of Service",
        "Bordering Nature Reserve"
      ]}
      address="42 Annabel Drive, Eloana, Bulawayo"
      phone="+263 777 335 111"
      accentColor="#065f46" // Forest Green
      pricing="Bespoke Safari-Style Retreats"
    />
  );
};

export default MusketeersLodgeDemo;
