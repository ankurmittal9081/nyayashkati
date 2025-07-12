import whisper

model = whisper.load_model("base")
result = model.transcribe("your_audio.mp3")  # Use any Hindi voice clip
print("🎤 Aapka Bola Gaya Text:")
print(result["text"])
