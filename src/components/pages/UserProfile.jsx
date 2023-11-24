import React from 'react'

function UserProfile({ loggedInCustomer }) {
    return (
        <div className="profile-details">
        <p>Name: {loggedInCustomer.customerName}</p>
        <p>Email: {loggedInCustomer.customerEmail}</p>
        {/* Add other details as needed */}
        </div>
    );
}

export default UserProfile