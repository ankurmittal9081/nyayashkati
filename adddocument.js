import './db.js';
import Document from './models/Document.js';
import User from './models/User.js';
import LegalIssue from './models/LegalIssue.js';

const user = await User.findOne();
const issue = await LegalIssue.findOne({ userId: user._id });

const document = new Document({
  userId: user._id,
  issueId: issue._id,
  documentType: "Affidavit",
  fileUrl: "https://example.com/docs/affidavit.pdf",
  submissionStatus: "submitted",
  uploadedBy: "System"
});

document.save()
  .then(() => console.log("Document saved ✅"))
  .catch(err => console.error("Error saving document ❌:", err));
