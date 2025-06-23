import './db.js';
import Paralegal from './models/Paralegal.js';

const paralegal = new Paralegal({
  name: "Suman Devi",
  phoneNumber: "9123456789",
  areasOfExpertise: ["Land", "Court", "Certificates"],
  active: true,
  rating: 4.2
});

paralegal.save()
  .then(() => console.log("Paralegal saved ✅"))
  .catch(err => console.error("Error saving paralegal ❌:", err));
