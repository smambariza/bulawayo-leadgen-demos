import HospitalityDemo from './hospitality_template';

const NesbittCastleDemo = () => {
  return (
    <HospitalityDemo
      name="Nesbitt Castle"
      subCategory="Heritage Wedding & Hotel Venue"
      tagline="A Fairy-Tale Princess Wedding in a Unique Heritage Castle."
      services={[
        "Boutique Hotel Accommodation",
        "Unique Wedding Packages",
        "Conference & Banquet Facilities",
        "5-Star On-site Dining",
        "Event Support & Tours"
      ]}
      trustSignals={[
        "14,500+ Community Followers",
        "190+ Tripadvisor Testimonials",
        "Iconic Historical Monument",
        "Picturesque Terraced Views"
      ]}
      address="Matsheumhlope, Bulawayo"
      phone="+263 29 2246343"
      accentColor="#831843" // Rich Burgundy/Wine
      pricing="Rates from USD 150 per night"
    />
  );
};

export default NesbittCastleDemo;
