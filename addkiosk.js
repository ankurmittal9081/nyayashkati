import './db.js';
import Kiosk from './models/Kiosk.js';

const kiosk = new Kiosk({
  location: "Block Center",
  village: "Rampur",
  district: "Mathura",
  operatorName: "Mukesh Singh",
  isActive: true,
  numberOfEmployees: 2,
  organizationType: "DLSA",
  organizationName: "District Legal Services Authority"
});

kiosk.save()
  .then(() => console.log("Kiosk saved ✅"))
  .catch(err => console.error("Error saving kiosk ❌:", err));
