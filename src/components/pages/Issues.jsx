import React, { useState, useEffect } from "react";

const Issues = () => {
  const [productId, setProductId] = useState("");
  const [issueDesc, setIssueDesc] = useState("");
  const [submittedIssues, setSubmittedIssues] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const fetchUserIssues = () => {
    if (user && user.customerid) {
      fetch("http://127.0.0.1:8000/receive/getissues/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerid: user.customerid,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSubmittedIssues(data.issues || []);
        })
        .catch((error) => {
          console.error("Error fetching user issues:", error);
        });
    }
  };

  useEffect(() => {
    fetchUserIssues();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and process the form data
    if (productId.trim() === "" || issueDesc.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new issue object
    const newIssue = {
      productid: productId,
      issueDesc: issueDesc,
      customerid: user.customerid,
    };

    // Make a POST request to the backend to raise the issue
    fetch("http://127.0.0.1:8000/receive/raiseissue/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIssue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // If the issue is raised successfully, update the submitted issues list
        setSubmittedIssues([newIssue, ...submittedIssues]);
      })
      .catch((error) => {
        console.error("Error raising issue:", error);
        alert("Error raising issue. Please try again later.");
      });

    // Clear form fields
    setProductId("");
    setIssueDesc("");
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Submit an Issue</h2>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="productId"
                className="block text-sm font-medium text-gray-700"
              >
                Product ID
              </label>
              <input
                type="text"
                id="productId"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="issueDesc"
                className="block text-sm font-medium text-gray-700"
              >
                Issue Description
              </label>
              <textarea
                id="issueDesc"
                name="issueDesc"
                value={issueDesc}
                onChange={(e) => setIssueDesc(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#20B486] text-white px-4 py-2 rounded-md font-bold"
            >
              Submit Issue
            </button>
          </form>
        </div>

        {/* List of Submitted Issues */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Your Issues</h2>
          <ul className="list-disc pl-4">
            {submittedIssues.map((issue, index) => (
              <li key={index} className="mb-2">
                <strong>Product ID:</strong> {issue.productid} -{" "}
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
