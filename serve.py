"""
Simple local development server for Mentya Cinematics Website
Usage:
    python serve.py
Then open http://localhost:8080 in your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    print(f"🎬 Starting Mentya Cinematics server at http://localhost:{PORT}")
    print(f"📂 Serving directory: {DIRECTORY}")
    print("Press Ctrl+C to stop the server.")
    
    # Try opening browser automatically
    try:
        webbrowser.open(f"http://localhost:{PORT}")
    except Exception as e:
        print(f"Could not open browser automatically: {e}")

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()

if __name__ == "__main__":
    run()
