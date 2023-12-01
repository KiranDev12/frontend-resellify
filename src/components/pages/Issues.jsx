import React, { useState, useEffect } from "react";

const Issues = () => {
  const [productId, setProductId] = useState("");
  const [issueDesc, setIssueDesc] = useState("");
  const [submittedIssues, setSubmittedIssues] = useState([]);

  useEffect(() => {
    // Fetch existing issues when the component mounts
    fetch("http://127.0.0.1:8000/fetch/issues/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update your state with the fetched issues
        setSubmittedIssues(data.issues || []);
      })
      .catch((error) => {
        console.error("Error fetching existing issues:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and process the form data
    if (productId.trim() === "" || issueDesc.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new issue object
    const newIssue = {
      productId: productId,
      issueDesc: issueDesc,
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
      });

    // Clear form fields
    setProductId("");
    setIssueDesc("");
  };

  const LoginUserView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleLogin = () => {
      // Your existing login logic here

      // After successful login, fetch user's issues
      fetch("http://127.0.0.1:8000/user/issues/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerid: user?.customerid,
          merchantid: user?.merchantid,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Update your state or do something with the fetched issues
          setSubmittedIssues(data.issues || []);
        })
        .catch((error) => {
          console.error("Error fetching user issues:", error);
        });
    };

    return (
      <div>
        {/* Your login component JSX here */}
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Issue Submission Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Submit an Issue</h2>
          <form onSubmit={handleSubmit} className="max-w-md">
            {/* ... (your form input fields) */}
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
