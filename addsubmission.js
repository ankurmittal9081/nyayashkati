import './db.js';
import Submission from './models/Submission.js';
import Document from './models/Document.js';

const document = await Document.findOne();

const submission = new Submission({
  documentId: document._id,
  submittedTo: "Tehsil Office",
  submissionStatus: "submitted",
  submissionDate: new Date()
});

submission.save()
  .then(() => console.log("Submission saved ✅"))
  .catch(err => console.error("Error saving submission ❌:", err));
