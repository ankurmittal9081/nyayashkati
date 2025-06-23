import './db.js';
import LegalIssue from './models/LegalIssue.js';
import User from './models/User.js';
import Kiosk from './models/Kiosk.js';
import Paralegal from './models/Paralegal.js';

const user = await User.findOne();       // Pick any existing user
const kiosk = await Kiosk.findOne();     // Pick any existing kiosk
const paralegal = await Paralegal.findOne(); // Optional

const issue = new LegalIssue({
  userId: user._id,
  issueType: "Land Dispute",
  description: "Incorrect name on land record.",
  status: "Pending",
  kiosk: kiosk?._id,
  assignedParalegal: paralegal?._id
});

issue.save()
  .then(() => console.log("Legal issue saved ✅"))
  .catch(err => console.error("Error saving issue ❌:", err));
