import HospitalityDemo from '../../templates/hospitality/hospitality_template';

const BreezeGuesthouseDemo = () => {
  return (
    <HospitalityDemo
      name="Breeze Guesthouse"
      subCategory="Boutique Guesthouse"
      tagline="Your Peaceful Victorian Escape in the Heart of Bulawayo."
      services={[
        "High Quality Accommodation",
        "Boutique Garden Suites",
        "Tranquil Swimming Pool",
        "Lush Private Gardens",
        "Daily Fresh Breakfast"
      ]}
      trustSignals={[
        "104+ Verified Guest Reviews",
        "7.5 Rated Excellence",
        "Victorian Architectural Charm",
        "Near Cultural Landmarks"
      ]}
      address="Near Centenary Park, Bulawayo"
      phone="Inquire via Direct Line"
      accentColor="#78350f" // Amber/Woody Brown
      pricing="Best Direct Rates Guaranteed"
    />
  );
};

export default BreezeGuesthouseDemo;
