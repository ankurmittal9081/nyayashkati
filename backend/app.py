from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from xhtml2pdf import pisa
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
PDF_FOLDER = "pdfs"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PDF_FOLDER, exist_ok=True)

@app.route('/')
def home():
    return "✅ NyayaShakti Backend Running"

@app.route('/ask', methods=['POST'])
def ask():
    name = request.form.get("name")
    phone = request.form.get("phone")
    query = request.form.get("query")
    file = request.files.get("aadhaar")

    if file:
        file.save(os.path.join(UPLOAD_FOLDER, file.filename))

    reply = f"आपकी समस्या '{query}' को समझ लिया गया है। कृपया निकटतम CSC केंद्र पर संपर्क करें।"

    html = f"""
    <html><body>
    <h2>NyayaShakti Legal Help</h2>
    <p><strong>नाम:</strong> {name}</p>
    <p><strong>फोन:</strong> {phone}</p>
    <p><strong>सवाल:</strong> {query}</p>
    <p><strong>उत्तर:</strong> {reply}</p>
    </body></html>
    """

    pdf_path = os.path.join(PDF_FOLDER, "output.pdf")
    with open(pdf_path, "wb") as pdf_file:
        pisa.CreatePDF(html, dest=pdf_file)

    return jsonify({"reply": reply})

@app.route('/download/<path:filename>', methods=['GET'])
def download(filename):
    return send_file(os.path.join(PDF_FOLDER, filename), as_attachment=True)

if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
