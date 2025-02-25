"use client"
import React from "react";
export default function UploadTextButton() {
    const [text, setText] = React.useState<string>(""); // To track the input text
    const [loading, setLoading] = React.useState<boolean>(false); // To handle loading state
    const [error, setError] = React.useState<string | null>(null); // To show any error messages
    const [successMessage, setSuccessMessage] = React.useState<string | null>(null); // To show success message
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      };
    
      const handleButtonClick = async () => {
        if (text.trim() === "") {
          alert("Please enter some text.");
          return;
        }
    
        setLoading(true); // Start loading
    
        try {
          const response = await fetch("/api/upload-stuff", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",  // Use JSON for request body
            },
            body: JSON.stringify({
              content: text,
            }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setSuccessMessage(data.message); // Show success message
            setText(""); // Clear input
            setError(null); // Reset error state
          } else {
            setError(data.error || "An unknown error occurred");
          }
        } catch (error) {
          console.error("Error uploading text:", error);
          setError("An error occurred while uploading the text.");
        } finally {
          setLoading(false); // End loading state
        }
    };
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Upload Text</h1>
        {/* Display any error message */}
        {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}

        {/* Display success message */}
        {successMessage && <div className="alert alert-success mb-4"><span>{successMessage}</span></div>}

        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text here"
          className="input input-bordered w-full mb-4"
        />

        <button 
          onClick={handleButtonClick}
          className="btn btn-primary w-full"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Uploading..." : "Upload Text"}
        </button>
      </div>
    );
}