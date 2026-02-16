
import os
import google.generativeai as genai
import pathlib
import textwrap

# Get the API key from the environment variable
gemini_api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=gemini_api_key)

# Get the issue body and title from environment variables
issue_body = os.getenv("ISSUE_BODY")
issue_title = os.getenv("ISSUE_TITLE")

# Create the model
model = genai.GenerativeModel('gemini-pro')

# Generate the content
response = model.generate_content(f"Read the file 'app/page.tsx' and then apply the following changes: {issue_body}. Only output the full code for the file, nothing else.")

# Write the content to the file
with open("app/page.tsx", "w") as f:
    f.write(response.text)

print("File 'app/page.tsx' has been updated.")
