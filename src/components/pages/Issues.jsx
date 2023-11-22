import React, { useState } from "react";

const Issues = () => {
  const [productId, setProductId] = useState("");
  const [issueDesc, setIssueDesc] = useState("");
  const [submittedIssues, setSubmittedIssues] = useState([]);

  fetch("http://127.0.0.1:8000/fetch/issues/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and process the form data
    if (productId.trim() === "" || issueDesc.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Add the new issue to the list
    const newIssue = {
      productId: productId,
      issueDesc: issueDesc,
    };

    setSubmittedIssues([newIssue, ...submittedIssues]);

    // Clear form fields
    setProductId("");
    setIssueDesc("");
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Issue Submission Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Submit an Issue</h2>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="productId"
                className="block text-sm font-medium text-gray-600"
              >
                Product ID
              </label>
              <input
                type="text"
                id="productId"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="issueDesc"
                className="block text-sm font-medium text-gray-600"
              >
                Issue Description
              </label>
              <textarea
                id="issueDesc"
                name="issueDesc"
                value={issueDesc}
                onChange={(e) => setIssueDesc(e.target.value)}
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#20B486] text-white px-4 py-2 rounded-md font-bold"
              >
                Submit Issue
              </button>
            </div>
          </form>
        </div>

        {/* List of Submitted Issues */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Your Issues</h2>
          <ul className="list-disc pl-4">
            {submittedIssues.map((issue, index) => (
              <li key={index} className="mb-2">
                <strong>Product ID:</strong> {issue.productId} -{" "}
                <strong>Issue:</strong> {issue.issueDesc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Issues;
